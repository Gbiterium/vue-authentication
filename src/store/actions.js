import axiosInstance from '../config/axiosInstance'
const actions = {
    async CREATE_USER({commit}, payload) {
        try{
        const response = await axiosInstance.post('/users/', payload)
        commit('set_users', response)
        console.log(response)
        } catch (error) {
            console.log(error)
        }
    }, 
    async LOGIN({commit}, payload) {
        try{
            const response = await axiosInstance.post('/login/', payload)
            .then((res) => {
                const response = res.data
                commit('set_users', response)
                console.log(response)
                return res
            }).catch(err => err.response)
            return response
        } catch (error) {
            console.log(error)
        }
    }
}
export default actions