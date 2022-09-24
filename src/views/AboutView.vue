<template>
  <div class="row">
    <div class="col-md-6 offset-md-3">
      <div>
        <div>
          <h3>Login</h3>
          <hr />
        </div>
        <!-- <div class="alert alert-danger" v-if="error">
                    {{ error }}
                </div> -->
        <form @submit.prevent="login()">
          <div class="form-group">
            <label>Username</label>
            <input type="text" class="form-control" v-model="username" />
            <!-- <div class="error" v-if="errors.email">
                            {{ errors.email }}
                        </div> -->
          </div>
          <div class="form-group">
            <label>Password</label>
            <input type="password" class="form-control" v-model="password" />
            <!-- <div class="error" v-if="errors.password">
                            {{ errors.password }}
                        </div> -->
          </div>

          <div class="my-3">
            <button type="submit" class="btn btn-primary">Login</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "LoginView",
  data() {
    return {
      username: "",
      password: "",
    };
  },
  computed: {
    ...mapGetters(["getUser"]),
  },
  methods: {
    ...mapActions(["LOGIN"]),
    async login() {
      try {
        const response = await this.LOGIN({
          username: this.username,
          password: this.password,
        });
        if (response.status === 200) {
          alert(
            "Welcome " +
              this.getUser.username +
              " you have successfully logged in"
          );
        } else {
          alert("An error occurred while logging you in");
        }
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
