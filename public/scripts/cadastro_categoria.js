new Vue({
  el: '#app',
  data:{
    categoria: {code: "",name: ""}
  },
  methods: {
    saveCategoria(){
      var categoria = this.categoria
      this.$http.get(`/api/categoria/new/${categoria.code}/${categoria.name}`).then(response => {
        console.log(response)
        alert(response.body)
      }, error => {
        alert(error.body)
      });
    }
  },
})