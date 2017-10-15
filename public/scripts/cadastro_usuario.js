new Vue({
  el: '#app',
  data:{
    user: {code: "",name: ""}
  },
  methods: {
    saveUser(){
      var user = this.user
      this.$http.get(`/xml/user/new/${user.code}/${user.name}`).then(response => {
        console.log(response)
        alert(response.body)
      }, error => {
        alert(error.body)
      });
    }
  },
})