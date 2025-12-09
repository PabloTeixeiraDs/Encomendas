document.addEventListener("DOMContentLoaded", () => {
  const nav = document.querySelector(".nav");
  const toggle = document.querySelector(".nav__toggle");
  const resumoLista = document.getElementById("resumoItens");
  const botoesAdd = document.querySelectorAll(".js-add-item");
  const form = document.querySelector(".form");
  const anoSpan = document.getElementById("anoAtual");

  // Ano atual no rodapé
  if (anoSpan) {
    anoSpan.textContent = new Date().getFullYear();
  }

  // Menu mobile
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("nav--open");
    });

    nav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        nav.classList.remove("nav--open");
      });
    });
  }

  // Resumo de itens selecionados
  const itensSelecionados = new Map();

  function atualizarResumo() {
    if (!resumoLista) return;

    resumoLista.innerHTML = "";

    if (itensSelecionados.size === 0) {
      resumoLista.classList.add("encomenda__lista-vazia");
      const li = document.createElement("li");
      li.textContent = "Nenhum item selecionado ainda.";
      resumoLista.appendChild(li);
      return;
    }

    resumoLista.classList.remove("encomenda__lista-vazia");

    itensSelecionados.forEach((quantidade, nome) => {
      const li = document.createElement("li");
      li.textContent = `${nome} — ${quantidade}x`;
      resumoLista.appendChild(li);
    });
  }

  botoesAdd.forEach((botao) => {
    botao.addEventListener("click", () => {
      const item = botao.dataset.item;
      if (!item) return;

      const atual = itensSelecionados.get(item) || 0;
      itensSelecionados.set(item, atual + 1);
      atualizarResumo();
    });
  });

  // Simples feedback ao enviar o formulário
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      alert(
        "Pedido enviado! Em breve entraremos em contato pelo WhatsApp informado para combinar todos os detalhes."
      );

      form.reset();
    });
  }
});

