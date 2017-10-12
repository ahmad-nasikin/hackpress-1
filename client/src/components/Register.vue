<template>
  
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
