new Vue({
  el: '#app',
  data:{
    cliente: {id: "",nome: "", aniversario: "", endereco: "", telefone: "", email: ""}
  },
  methods: {
    saveCliente(){
      var cliente = this.cliente
      this.$http.get(`/api/cliente/new/${cliente.id}/${cliente.nome}/${cliente.aniversario}/${cliente.endereco}/${cliente.telefone}/${cliente.email}`).then(response => {
        console.log(response)
        alert(response.body)
      }, error => {
        alert(error.body)
      });
    }
  },
})