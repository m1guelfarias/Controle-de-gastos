function logout(){
    window.location.href = "index.html";
}

function adicionarItem() {
    // Obter o valor digitado pelo usuário
    var novoItemValor = document.getElementById("novoItem").value;

    // Verificar se o campo não está vazio
    if (novoItemValor.trim() !== "") {
      // Criar um novo elemento de lista
      var novoElementoLista = document.createElement("li");
      
      // Definir o texto do novo elemento como o valor digitado pelo usuário
      novoElementoLista.textContent = novoItemValor;

      // Adicionar o novo elemento à lista
      document.getElementById("listaItens").appendChild(novoElementoLista);

      // Limpar o campo de entrada após adicionar o item
      document.getElementById("novoItem").value = "";
    } else {
      alert("Digite algo antes de adicionar!");
    }
}