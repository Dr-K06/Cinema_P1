// =====================
// FILMES
// =====================
function salvarFilme() {
  const filme = {
    titulo: titulo.value,
    genero: genero.value,
    descricao: descricao.value,
    classificacao: classificacao.value,
    duracao: duracao.value,
    estreia: estreia.value
  };

  let filmes = JSON.parse(localStorage.getItem("filmes")) || [];
  filmes.push(filme);
  localStorage.setItem("filmes", JSON.stringify(filmes));

  alert("Filme salvo!");
}

// =====================
// SALAS
// =====================
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

// =====================
// CARREGAR SELECTS (SESSÕES)
// =====================
function carregarSelects() {
  const selectFilme = document.getElementById("filme");
  const selectSala = document.getElementById("sala");

  if (!selectFilme || !selectSala) return; // evita erro

  const filmes = JSON.parse(localStorage.getItem("filmes")) || [];
  const salas = JSON.parse(localStorage.getItem("salas")) || [];

  filmes.forEach((f, i) => {
    const option = document.createElement("option");
    option.value = i;
    option.textContent = f.titulo;
    selectFilme.appendChild(option);
  });

  salas.forEach((s, i) => {
    const option = document.createElement("option");
    option.value = i;
    option.textContent = s.nome;
    selectSala.appendChild(option);
  });
}

// =====================
// SALVAR SESSÃO
// =====================
function salvarSessao() {
  const sessao = {
    filme: document.getElementById("filme").value,
    sala: document.getElementById("sala").value,
    data: document.getElementById("data").value,
    preco: document.getElementById("preco").value,
    idioma: document.getElementById("idioma").value,
    formato: document.getElementById("formato").value
  };

  let sessoes = JSON.parse(localStorage.getItem("sessoes")) || [];
  sessoes.push(sessao);
  localStorage.setItem("sessoes", JSON.stringify(sessoes));

  alert("Sessão cadastrada!");
}

// =====================
// CARREGAR SESSÕES (VENDA)
// =====================
function carregarSessoes() {
  const select = document.getElementById("sessoes");
  if (!select) return;

  const sessoes = JSON.parse(localStorage.getItem("sessoes")) || [];

  select.innerHTML = '<option value="">Selecione a Sessão</option>';

  sessoes.forEach((s, i) => {
    const option = document.createElement("option");
    option.value = i;
    option.textContent = `Sessão ${i + 1} - ${s.data}`;
    select.appendChild(option);
  });
}

// =====================
// VENDER INGRESSO
// =====================
function venderIngresso() {
  const ingresso = {
    sessoes: document.getElementById("sessoes").value,
    cliente: document.getElementById("cliente").value,
    cpf: document.getElementById("cpf").value,
    assento: document.getElementById("assento").value,
    pagamento: document.getElementById("pagamento").value
  };

  let ingressos = JSON.parse(localStorage.getItem("ingressos")) || [];
  ingressos.push(ingresso);
  localStorage.setItem("ingressos", JSON.stringify(ingressos));

  alert("Ingresso vendido com sucesso!");
}

// =====================
// LISTAR SESSÕES
// =====================
function listarSessoes() {
  const lista = document.getElementById("lista");
  if (!lista) return;

  let sessoes = JSON.parse(localStorage.getItem("sessoes")) || [];
  let filmes = JSON.parse(localStorage.getItem("filmes")) || [];
  let salas = JSON.parse(localStorage.getItem("salas")) || [];

  lista.innerHTML = "";

  if (sessoes.length === 0) {
    lista.innerHTML = "<li class='list-group-item'>Nenhuma sessão cadastrada</li>";
    return;
  }

  sessoes.forEach(s => {
    const filme = filmes[s.filme];
    const sala = salas[s.sala];

    const item = document.createElement("li");
    item.className = "list-group-item";

    item.textContent = `
      ${filme ? filme.titulo : "Filme não encontrado"} - 
      ${sala ? sala.nome : "Sala não encontrada"} - 
      ${s.data} - R$${s.preco}
    `;

    lista.appendChild(item);
  });
}

// =====================
// INICIALIZAÇÃO
// =====================
document.addEventListener("DOMContentLoaded", () => {
  carregarSelects();
  carregarSessoes(); // 🔥 ESSENCIAL
  listarSessoes();
});