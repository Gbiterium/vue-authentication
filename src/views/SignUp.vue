<template>
    <div class="row">
        <div class="col-md-6 offset-md-3">
            <div>
                <div>
                    <h3>Signup</h3>
                    <hr />
                </div>
                <!-- <div class="alert alert-danger" v-if="error">
                    {{ error }}
                </div> -->
                <form @submit.prevent="register()">
                  <div class="form-group">
                        <label>Username</label>
                        <input
                            type="text"
                            class="form-control"
                            v-model="username"
                            required
                        /></div>
                    <div class="form-group">
                        <label>Email</label>
                        <input
                            type="text"
                            class="form-control"
                            v-model="email"
                            required
                        />
                        <!-- <div class="error" v-if="errors.email">
                            {{ errors.email }}
                        </div> -->
                    </div>
                    <div class="form-group">
                        <label>Password</label>
                        <input
                            type="password"
                            class="form-control"
                            v-model="password"
                            required
                        />
                        <!-- <div class="error" v-if="errors.password">
                            {{ errors.password }}
                        </div> -->
                    </div>

                    <div class="my-3">
                        <button type="submit" class="btn btn-primary">
                            Signup
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'SignupPage',
  data () {
    return {
      username: '',
      email: '',
      password: ''

    }
  },
  methods: {
    ...mapActions(['CREATE_USER']),
    async register() {
      try{
      const response = await this.CREATE_USER({
        username: this.username,
        email: this.email,
        password: this.password,
        phone_number: '+2349064506005'
      })
      this.$router.push('/about')
      console.log(response)
    } catch (error) {
      console.log(error)
    }
    }
  }
  // components: {
  //   HelloWorld
  // }
}
</script>
