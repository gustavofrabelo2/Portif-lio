/* =====================================================================
   MAIN.JS
   ---------------------------------------------------------------------
   Este arquivo pega o conteúdo do conteudo.js e monta cada seção da
   página. Também cuida do menu no celular e das animações.

   Normalmente você NÃO precisa mexer aqui: para mudar textos, links
   ou listas, edite o arquivo js/conteudo.js.
   ===================================================================== */


/* ---------------------------------------------------------------------
   FUNÇÕES DE AJUDA
   Pequenas funções reaproveitadas por todo o arquivo.
   --------------------------------------------------------------------- */

// Atalho para buscar um elemento da página pelo id.
function pegar(id) {
  return document.getElementById(id);
}

// Protege o texto antes de colocá-lo no HTML.
// Assim, um caractere como "<" aparece como texto e não quebra a página.
function escapar(texto) {
  return String(texto)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

// Transforma uma lista de textos em itens <li>.
function itensDeLista(itens) {
  return itens.map(function (item) {
    return "<li>" + escapar(item) + "</li>";
  }).join("");
}

// Transforma uma lista de textos em "etiquetas" (aquelas pílulas arredondadas).
function etiquetas(itens) {
  const lis = itens.map(function (item) {
    return '<li class="etiqueta">' + escapar(item) + "</li>";
  }).join("");
  return '<ul class="etiquetas">' + lis + "</ul>";
}

// Procura as informações de uma seção (título, introdução) em conteudo.secoes.
function dadosDaSecao(id) {
  return conteudo.secoes.find(function (secao) {
    return secao.id === id;
  }) || {};
}

// Monta o título (h2) e a introdução de uma seção.
function cabecalhoDaSecao(id) {
  const secao = dadosDaSecao(id);
  let html = '<div class="secao-cabecalho">';
  html += '<h2 id="' + id + '-titulo" class="secao-titulo">' + escapar(secao.titulo || "") + "</h2>";
  if (secao.introducao) {
    html += '<p class="secao-intro">' + escapar(secao.introducao) + "</p>";
  }
  html += "</div>";
  return html;
}

// Coloca o título + o conteúdo dentro da <section> com o id informado.
function preencherSecao(id, conteudoHtml) {
  const elemento = pegar(id);
  if (!elemento) return;
  elemento.innerHTML = '<div class="container">' + cabecalhoDaSecao(id) + conteudoHtml + "</div>";
}

// Texto escondido na tela, mas lido por leitores de tela.
const avisoNovaAba = '<span class="visualmente-oculto"> (abre em nova aba)</span>';

// Ícones em SVG (desenhos simples, sem depender de arquivos externos).
const icones = {
  linkedin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>',
  github: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>',
  email: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 6-10 7L2 6"/></svg>',
  baixar: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="m7 10 5 5 5-5"/><path d="M12 15V3"/></svg>',
  medalha: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><circle cx="12" cy="8" r="6"/><path d="M8.2 13.4 7 22l5-3 5 3-1.2-8.6"/></svg>',
};


/* ---------------------------------------------------------------------
   MENU
   Cria um link no menu para cada seção listada em conteudo.secoes.
   --------------------------------------------------------------------- */
function montarMenu() {
  const lista = pegar("menu-lista");
  lista.innerHTML = conteudo.secoes.map(function (secao) {
    return '<li><a class="menu-link" href="#' + secao.id + '">' + escapar(secao.menu) + "</a></li>";
  }).join("");
}


/* ---------------------------------------------------------------------
   INÍCIO (primeira tela)
   --------------------------------------------------------------------- */
function montarInicio() {
  const dados = conteudo.inicio;

  // Se existir foto, mostra a foto. Se não, mostra as iniciais.
  let foto;
  if (fotoUrl) {
    foto = '<img class="foto-img" src="' + escapar(fotoUrl) + '" alt="Foto de ' + escapar(dados.nome) + '">';
  } else {
    foto = '<div class="foto-placeholder" role="img" aria-label="Espaço reservado para a foto de ' + escapar(dados.nome) + '">' + escapar(dados.iniciais) + "</div>";
  }

  // Aviso de disponibilidade (pontinho + texto).
  let disponibilidade = "";
  if (dados.mostrarDisponibilidade) {
    disponibilidade =
      '<p class="disponibilidade">' +
        '<span class="disponibilidade-ponto" aria-hidden="true"></span>' +
        escapar(dados.disponibilidade) +
      "</p>";
  }

  // Botões: o primeiro é o principal (preenchido), os outros têm só contorno.
  const botoes = dados.botoes.map(function (botao, posicao) {
    const estilo = posicao === 0 ? "botao-principal" : "botao-secundario";
    return '<a class="botao ' + estilo + '" href="' + escapar(botao.destino) + '">' + escapar(botao.texto) + "</a>";
  }).join("");

  pegar("inicio").innerHTML =
    '<div class="container inicio-grade">' +
      '<div class="inicio-texto">' +
        disponibilidade +
        '<h1 id="inicio-titulo" class="inicio-nome">' + escapar(dados.nome) + "</h1>" +
        '<p class="inicio-titulo">' + escapar(dados.titulo) + "</p>" +
        '<p class="inicio-frase">' + escapar(dados.frase) + "</p>" +
        '<div class="botoes">' + botoes + "</div>" +
      "</div>" +
      '<div class="inicio-foto"><div class="foto-moldura">' + foto + "</div></div>" +
    "</div>";
}


/* ---------------------------------------------------------------------
   SOBRE MIM
   --------------------------------------------------------------------- */
function montarSobre() {
  const dados = conteudo.sobre;

  const paragrafos = dados.paragrafos.map(function (texto) {
    return "<p>" + escapar(texto) + "</p>";
  }).join("");

  preencherSecao("sobre",
    '<div class="sobre-grade">' +
      '<div class="sobre-texto">' + paragrafos + "</div>" +
      '<div class="sobre-qualidades">' +
        '<h3 class="subtitulo">' + escapar(dados.tituloQualidades) + "</h3>" +
        etiquetas(dados.qualidades) +
      "</div>" +
    "</div>"
  );
}


/* ---------------------------------------------------------------------
   MINHA TRAJETÓRIA (linha do tempo)
   --------------------------------------------------------------------- */
function montarTrajetoria() {
  const itens = conteudo.trajetoria.map(function (item) {
    const classeExtra = item.destaque ? " linha-item--destaque" : "";
    return (
      '<li class="linha-item' + classeExtra + '">' +
        '<span class="linha-marcador" aria-hidden="true"></span>' +
        '<p class="linha-periodo">' + escapar(item.periodo) + "</p>" +
        '<h3 class="linha-titulo">' + escapar(item.titulo) + "</h3>" +
        '<p class="linha-resumo">' + escapar(item.resumo) + "</p>" +
      "</li>"
    );
  }).join("");

  preencherSecao("trajetoria", '<ol class="linha-tempo">' + itens + "</ol>");
}


/* ---------------------------------------------------------------------
   EXPERIÊNCIA PROFISSIONAL
   --------------------------------------------------------------------- */
function montarExperiencia() {
  const cards = conteudo.experiencias.map(function (exp) {
    const classeExtra = exp.secundaria ? " experiencia--secundaria" : "";
    const subtitulo = exp.subtitulo ? '<p class="experiencia-subtitulo">' + escapar(exp.subtitulo) + "</p>" : "";

    return (
      '<article class="card experiencia' + classeExtra + '">' +
        '<div class="experiencia-topo">' +
          '<h3 class="experiencia-nome">' + escapar(exp.empresa) + "</h3>" +
          '<p class="experiencia-periodo">' + escapar(exp.periodo) + "</p>" +
        "</div>" +
        subtitulo +
        '<h4 class="rotulo">Atividades</h4>' +
        '<ul class="lista">' + itensDeLista(exp.atividades) + "</ul>" +
        '<h4 class="rotulo">Habilidades desenvolvidas</h4>' +
        etiquetas(exp.habilidades) +
      "</article>"
    );
  }).join("");

  preencherSecao("experiencia", '<div class="experiencias">' + cards + "</div>");
}


/* ---------------------------------------------------------------------
   FORMAÇÃO
   --------------------------------------------------------------------- */
function montarFormacao() {
  const itens = conteudo.formacao.map(function (item) {
    return (
      '<li class="card formacao-item">' +
        '<h3 class="formacao-curso">' + escapar(item.curso) + "</h3>" +
        '<p class="formacao-instituicao">' + escapar(item.instituicao) + "</p>" +
        '<p class="formacao-detalhes">' + item.detalhes.map(escapar).join(" · ") + "</p>" +
      "</li>"
    );
  }).join("");

  preencherSecao("formacao", '<ul class="formacao-lista">' + itens + "</ul>");
}


/* ---------------------------------------------------------------------
   PROJETOS
   --------------------------------------------------------------------- */
function montarProjetos() {
  const projetos = conteudo.projetos;

  const cards = projetos.map(function (projeto) {
    // Nome antigo (opcional).
    const nomeAnterior = projeto.nomeAnterior
      ? '<p class="projeto-nome-anterior">Antes chamado ' + escapar(projeto.nomeAnterior) + "</p>"
      : "";

    // Tecnologias: se a lista estiver vazia, mostra "Ainda não definidas".
    const tecnologias = projeto.tecnologias.length > 0
      ? escapar(projeto.tecnologias.join(", "))
      : "Ainda não definidas";

    // Botão do GitHub: ativo se tiver link, desabilitado se não tiver.
    const botaoGithub = projeto.githubUrl
      ? '<a class="botao botao-secundario" href="' + escapar(projeto.githubUrl) + '" target="_blank" rel="noopener noreferrer">' + icones.github + "Ver no GitHub" + avisoNovaAba + "</a>"
      : '<button class="botao botao-desabilitado" type="button" disabled>' + icones.github + "Repositório em breve</button>";

    return (
      '<article class="card projeto">' +
        '<div class="projeto-topo">' +
          "<div>" +
            '<h3 class="projeto-nome">' + escapar(projeto.nome) + "</h3>" +
            nomeAnterior +
          "</div>" +
          '<p class="selo">' + escapar(projeto.status) + "</p>" +
        "</div>" +
        '<p class="projeto-descricao">' + escapar(projeto.descricao) + "</p>" +
        '<p class="projeto-contexto">' + escapar(projeto.contexto) + "</p>" +
        '<dl class="projeto-info">' +
          "<div><dt>Meu papel</dt><dd>" + escapar(projeto.papel) + "</dd></div>" +
          '<div><dt>Equipe</dt><dd><ul class="projeto-equipe">' + itensDeLista(projeto.equipe) + "</ul></dd></div>" +
          "<div><dt>Etapa atual</dt><dd>" + escapar(projeto.etapaAtual) + "</dd></div>" +
          "<div><dt>Tecnologias</dt><dd>" + tecnologias + "</dd></div>" +
        "</dl>" +
        '<div class="projeto-listas">' +
          '<div><h4 class="rotulo">Já feito</h4><ul class="lista lista--feito">' + itensDeLista(projeto.jaFeito) + "</ul></div>" +
          '<div><h4 class="rotulo">Próximas etapas</h4><ul class="lista">' + itensDeLista(projeto.proximasEtapas) + "</ul></div>" +
        "</div>" +
        '<div class="projeto-acoes">' + botaoGithub + "</div>" +
      "</article>"
    );
  }).join("");

  // Com um único projeto, o card ocupa a largura toda (sem grade).
  const classeGrade = projetos.length === 1 ? "projetos-grade projetos-grade--unico" : "projetos-grade";
  preencherSecao("projetos", '<div class="' + classeGrade + '">' + cards + "</div>");
}


/* ---------------------------------------------------------------------
   HABILIDADES E TECNOLOGIAS
   --------------------------------------------------------------------- */
function montarHabilidades() {
  const dados = conteudo.habilidades;

  // Pega só as categorias técnicas que têm pelo menos um item.
  const categoriasPreenchidas = Object.keys(dados.tecnicas).filter(function (categoria) {
    return dados.tecnicas[categoria].length > 0;
  });

  let tecnicasHtml;
  if (categoriasPreenchidas.length === 0) {
    // Nenhuma tecnologia ainda: mostra a mensagem de "jornada começando".
    tecnicasHtml = '<p class="habilidades-vazio">' + escapar(dados.mensagemSemTecnicas) + "</p>";
  } else {
    tecnicasHtml = categoriasPreenchidas.map(function (categoria) {
      const nome = dados.nomesDasCategorias[categoria] || categoria;
      return '<h4 class="rotulo">' + escapar(nome) + "</h4>" + etiquetas(dados.tecnicas[categoria]);
    }).join("");
  }

  preencherSecao("habilidades",
    '<div class="habilidades-grade">' +
      '<div class="card habilidades-bloco">' +
        '<h3 class="subtitulo-serifa">Técnicas</h3>' +
        tecnicasHtml +
      "</div>" +
      '<div class="card habilidades-bloco">' +
        '<h3 class="subtitulo-serifa">Comportamentais</h3>' +
        etiquetas(dados.comportamentais) +
      "</div>" +
    "</div>"
  );
}


/* ---------------------------------------------------------------------
   CERTIFICAÇÕES
   --------------------------------------------------------------------- */
function montarCertificacoes() {
  const lista = conteudo.certificacoes;
  let html;

  if (lista.length === 0) {
    // Lista vazia: mostra um aviso discreto.
    html =
      '<div class="estado-vazio">' +
        '<span class="estado-vazio-icone">' + icones.medalha + "</span>" +
        '<p class="estado-vazio-titulo">' + escapar(conteudo.certificacoesVazio.titulo) + "</p>" +
        '<p class="estado-vazio-texto">' + escapar(conteudo.certificacoesVazio.texto) + "</p>" +
      "</div>";
  } else {
    const cards = lista.map(function (cert) {
      // Junta data e carga horária, pulando o que estiver vazio.
      const detalhes = [cert.dataConclusao, cert.cargaHoraria].filter(Boolean).map(escapar).join(" · ");

      let linksHtml = "";
      if (cert.linkCertificado) {
        linksHtml += '<a class="link-texto" href="' + escapar(cert.linkCertificado) + '" target="_blank" rel="noopener noreferrer">Ver certificado' + avisoNovaAba + "</a>";
      }
      if (cert.linkVerificacao) {
        linksHtml += '<a class="link-texto" href="' + escapar(cert.linkVerificacao) + '" target="_blank" rel="noopener noreferrer">Verificar autenticidade' + avisoNovaAba + "</a>";
      }

      return (
        '<li class="card certificado">' +
          '<h3 class="certificado-nome">' + escapar(cert.nome) + "</h3>" +
          '<p class="certificado-instituicao">' + escapar(cert.instituicao) + "</p>" +
          (detalhes ? '<p class="certificado-detalhes">' + detalhes + "</p>" : "") +
          (linksHtml ? '<div class="certificado-links">' + linksHtml + "</div>" : "") +
        "</li>"
      );
    }).join("");
    html = '<ul class="certificados">' + cards + "</ul>";
  }

  preencherSecao("certificacoes", html);
}


/* ---------------------------------------------------------------------
   CONTATO
   Cada botão só aparece se o link correspondente estiver preenchido.
   --------------------------------------------------------------------- */
function montarContato() {
  const botoes = [];

  if (links.linkedinUrl) {
    botoes.push('<a class="botao botao-claro" href="' + escapar(links.linkedinUrl) + '" target="_blank" rel="noopener noreferrer">' + icones.linkedin + "LinkedIn" + avisoNovaAba + "</a>");
  }
  if (links.githubUrl) {
    botoes.push('<a class="botao botao-claro" href="' + escapar(links.githubUrl) + '" target="_blank" rel="noopener noreferrer">' + icones.github + "GitHub" + avisoNovaAba + "</a>");
  }
  if (links.email) {
    botoes.push('<a class="botao botao-claro" href="mailto:' + escapar(links.email) + '">' + icones.email + "E-mail</a>");
  }
  if (links.curriculoUrl) {
    botoes.push('<a class="botao botao-claro" href="' + escapar(links.curriculoUrl) + '" download>' + icones.baixar + "Baixar currículo</a>");
  }

  // Se nenhum link estiver preenchido, mostra a mensagem de "em breve".
  const acoes = botoes.length > 0
    ? '<div class="botoes">' + botoes.join("") + "</div>"
    : '<p class="contato-vazio">' + escapar(conteudo.contato.mensagemSemLinks) + "</p>";

  preencherSecao("contato",
    '<p class="contato-texto">' + escapar(conteudo.contato.texto) + "</p>" + acoes
  );
}


/* ---------------------------------------------------------------------
   RODAPÉ
   --------------------------------------------------------------------- */
function montarRodape() {
  const ano = new Date().getFullYear(); // ano atual, calculado automaticamente

  let linksHtml = "";
  if (links.githubUrl) {
    linksHtml += '<li><a class="rodape-link" href="' + escapar(links.githubUrl) + '" target="_blank" rel="noopener noreferrer">GitHub' + avisoNovaAba + "</a></li>";
  }
  if (links.linkedinUrl) {
    linksHtml += '<li><a class="rodape-link" href="' + escapar(links.linkedinUrl) + '" target="_blank" rel="noopener noreferrer">LinkedIn' + avisoNovaAba + "</a></li>";
  }

  pegar("rodape").innerHTML =
    '<div class="container">' +
      '<div class="rodape-conteudo">' +
        "<p>" + escapar(conteudo.inicio.nome) + " · " + escapar(conteudo.inicio.titulo) + "</p>" +
        '<p class="rodape-ano">© ' + ano + "</p>" +
        (linksHtml ? '<ul class="rodape-links">' + linksHtml + "</ul>" : "") +
      "</div>" +
    "</div>";
}


/* ---------------------------------------------------------------------
   MENU NO CELULAR (hambúrguer)
   --------------------------------------------------------------------- */
function ativarMenuMobile() {
  const botao = document.querySelector(".menu-botao");
  const menu = pegar("menu-principal");

  function abrirOuFechar(abrir) {
    menu.classList.toggle("menu--aberto", abrir);
    botao.setAttribute("aria-expanded", abrir ? "true" : "false");
    botao.setAttribute("aria-label", abrir ? "Fechar menu" : "Abrir menu");
  }

  // Clicar no botão abre ou fecha o menu.
  botao.addEventListener("click", function () {
    const estaAberto = botao.getAttribute("aria-expanded") === "true";
    abrirOuFechar(!estaAberto);
  });

  // Clicar em um link do menu fecha o menu.
  menu.addEventListener("click", function (evento) {
    if (evento.target.closest("a")) {
      abrirOuFechar(false);
    }
  });

  // Apertar Esc fecha o menu e devolve o foco para o botão.
  document.addEventListener("keydown", function (evento) {
    if (evento.key === "Escape" && botao.getAttribute("aria-expanded") === "true") {
      abrirOuFechar(false);
      botao.focus();
    }
  });
}


/* ---------------------------------------------------------------------
   ANIMAÇÕES AO ROLAR A PÁGINA
   Os elementos aparecem com um leve "fade" quando entram na tela.
   Se a pessoa pediu menos movimento no sistema, nada é animado.
   --------------------------------------------------------------------- */
function ativarAnimacoes() {
  const menosMovimento = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (menosMovimento || !("IntersectionObserver" in window)) return;

  const elementos = document.querySelectorAll(
    ".inicio-texto, .inicio-foto, .secao-cabecalho, .sobre-grade > *, .linha-item, " +
    ".card, .estado-vazio, .contato-texto, #contato .botoes, .contato-vazio"
  );

  const observador = new IntersectionObserver(function (entradas) {
    entradas.forEach(function (entrada) {
      if (entrada.isIntersecting) {
        entrada.target.classList.add("visivel");
        observador.unobserve(entrada.target); // anima só uma vez
      }
    });
  }, { threshold: 0.12 });

  elementos.forEach(function (elemento) {
    elemento.classList.add("revelar");
    observador.observe(elemento);
  });
}


/* ---------------------------------------------------------------------
   INICIAR
   Quando a página termina de carregar, monta todas as seções.
   --------------------------------------------------------------------- */
document.addEventListener("DOMContentLoaded", function () {
  montarMenu();
  montarInicio();
  montarSobre();
  montarTrajetoria();
  montarExperiencia();
  montarFormacao();
  montarProjetos();
  montarHabilidades();
  montarCertificacoes();
  montarContato();
  montarRodape();
  ativarMenuMobile();
  ativarAnimacoes();
});
