<template>
   <div>
    <div class="">
      <div class="container">
      <div class="text-header">
      </div>
        <div class="row">
          <div class="formRegister">
            <div class="col-md-6 col-md-offset-3">
                <div class="form-group">
                  <label for="inputPassword" class="col-lg-2 control-label">Username</label>
                  <div class="col-lg-10">
                    <input type="text" class="form-control" placeholder="username" v-model="login.username">
                  </div>
                </div>
                <div class="form-group">
                  <label for="inputPassword" class="col-lg-2 control-label">Password</label>
                  <div class="col-lg-10">
                    <input type="password" class="form-control" placeholder="Password" v-model="login.password">
                  </div>
                </div>
                <div class="form-group">
                <div class="col-lg-10 col-lg-offset-2">
                  <button type="reset" class="btn btn-default">Cancel</button>
                  <button type="button" class="" @click="Login()" data-dismiss="modal">Login</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      login: {
        username: '',
        passowrd: ''
      }
    }
  },
  methods: {
    Login () {
      this.$http.post('/login', {
        username: this.login.username,
        password: this.login.password
      })
      .then((Response) => {
        console.log('res', Response)
        localStorage.setItem('token', Response.data.token)
        this.$router.push('/articles')
      })
      .catch((err) => {
        console.error(err)
      })
    }
  }
}
</script>

<style>

</style>
