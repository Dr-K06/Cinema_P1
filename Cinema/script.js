// SALVAR FILME
function salvarFilme() {
  const filme = {
    titulo: document.getElementById("titulo").value,
    genero: document.getElementById("genero").value,
    descricao: document.getElementById("descricao").value,
    duracao: document.getElementById("duracao").value
  };

  let filmes = JSON.parse(localStorage.getItem("filmes")) || [];
  filmes.push(filme);

  localStorage.setItem("filmes", JSON.stringify(filmes));

  alert("Filme salvo!");
}