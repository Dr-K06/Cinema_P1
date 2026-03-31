
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

// SALVAR SALA
function salvarSala() {
  const sala = {
    nome: nomeSala.value,
    capacidade: capacidade.value,
    tipo: tipo.value
  };

  let salas = JSON.parse(localStorage.getItem("salas")) || [];
  salas.push(sala);

  localStorage.setItem("salas", JSON.stringify(salas));

  alert("Sala salva!");
}

// SALVAR SESSÃO
function carregarSelects() {
  let filmes = JSON.parse(localStorage.getItem("filmes")) || [];
  let salas = JSON.parse(localStorage.getItem("salas")) || [];

  filmes.forEach((f, i) => {
    filme.innerHTML += `<option value="${i}">${f.titulo}</option>`;
  });

  salas.forEach((s, i) => {
    sala.innerHTML += `<option value="${i}">${s.nome}</option>`;
  });
}

function salvarSessao() {
  let sessoes = JSON.parse(localStorage.getItem("sessoes")) || [];

  sessoes.push({
    filme: filme.value,
    sala: sala.value,
    data: data.value,
    preco: preco.value
  });

  localStorage.setItem("sessoes", JSON.stringify(sessoes));

  alert("Sessão salva!");
}

carregarSelects();

// COMPRAR INGRESSO
function comprar() {
  let ingressos = JSON.parse(localStorage.getItem("ingressos")) || [];

  ingressos.push({
    sessao: sessao.value,
    cliente: cliente.value,
    cpf: cpf.value
  });

  localStorage.setItem("ingressos", JSON.stringify(ingressos));

  alert("Compra realizada!");
}

// LISTAR SESSÕES
function listarSessoes() {
  let sessoes = JSON.parse(localStorage.getItem("sessoes")) || [];
  let filmes = JSON.parse(localStorage.getItem("filmes")) || [];
  let salas = JSON.parse(localStorage.getItem("salas")) || [];

  lista.innerHTML = "";

  sessoes.forEach(s => {
    lista.innerHTML += `
      <li>
        ${filmes[s.filme].titulo} - 
        ${salas[s.sala].nome} - 
        ${s.data} - R$${s.preco}
      </li>
    `;
  });
}

listarSessoes();