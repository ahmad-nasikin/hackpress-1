<template>
  <div>
    <div class="">
      <div class="container">
      <div class="text-header">
      </div>
        <div class="row">
          <div class="formRegister">
            <div class="col-md-6 col-md-offset-3">
              <form @submit.prevent="register()"class="form-horizontal" id="login">
                <div class="form-group">
                  <label for="inputPassword" class="col-lg-2 control-label">Username</label>
                  <div class="col-lg-10">
                    <input type="text" class="form-control" placeholder="username" v-model="regis.username">
                  </div>
                </div>
                <div class="form-group">
                  <label for="inputPassword" class="col-lg-2 control-label">Email</label>
                  <div class="col-lg-10">
                    <input type="text" class="form-control" placeholder="email" v-model="regis.email">
                  </div>
                </div>
                <div class="form-group">
                  <label for="inputPassword" class="col-lg-2 control-label">Password</label>
                  <div class="col-lg-10">
                    <input type="password" class="form-control" placeholder="Password" v-model="regis.password">
                  </div>
                </div>
                <div class="form-group">
                  <div class="col-lg-10 col-lg-offset-2">
                    <button type="reset" class="btn btn-default">Cancel</button>
                    <button type="submit" class="btn btn-primary">Submit</button>
                  </div>
                </div>
              </form>
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
      regis: {
        username: '',
        email: '',
        password: ''
      }
    }
  },
  methods: {
    register () {
      let self = this
      this.$http.post('/register', {
        username: self.regis.username,
        email: self.regis.email,
        password: self.regis.password
      })
      .then(response => {
        console.log('responya', response)
        this.$router.push('/')
      })
      .catch(err => {
        console.err(err)
      })
    }
  }
}
</script>

<style>

</style>
