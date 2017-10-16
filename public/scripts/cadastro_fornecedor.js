new Vue({
  el: '#app',
  data:{
    fornecedor: {code: "",name: "", cnpj: "", endereco: "", telefone: "", email: ""}
  },
  methods: {
    saveFornecedor(){
      var fornecedor = this.fornecedor
      this.$http.get(`/api/fornecedor/new/${fornecedor.code}/${fornecedor.name}/${fornecedor.cnpj}/${fornecedor.endereco}/${fornecedor.telefone}/${fornecedor.email}`).then(response => {
        console.log(response)
        alert(response.body)
      }, error => {
        alert(error.body)
      });
    }
  },
})