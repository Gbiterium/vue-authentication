import { createStore as auth } from 'vuex'

// export default createStore({
//   state: {
//   },
//   getters: {
//   },
//   mutations: {
//   },
//   actions: {
//   },
//   modules: {
//   }
// })
import state from './state'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'

export default auth({ state, mutations, actions, getters })
