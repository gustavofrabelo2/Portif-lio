/* =====================================================================
   CONTEÚDO DO SITE
   ---------------------------------------------------------------------
   Este é o ÚNICO arquivo que você precisa editar para mudar textos,
   links e listas do site. O arquivo main.js lê tudo daqui e monta a
   página automaticamente.

   Dicas rápidas:
   - Textos ficam entre aspas: "assim".
   - Itens de uma lista ficam entre colchetes e separados por vírgula:
     ["Item 1", "Item 2"]
   - Depois de salvar, é só recarregar a página no navegador (F5).
   ===================================================================== */


/* ---------------------------------------------------------------------
   1. LINKS E FOTO
   Todos começam vazios (""). Enquanto estiverem vazios, o site esconde
   o botão correspondente ou mostra um espaço reservado no lugar.
   --------------------------------------------------------------------- */
const links = {
  githubUrl: "",          // ex.: "https://github.com/seu-usuario"
  linkedinUrl: "",        // ex.: "https://www.linkedin.com/in/seu-perfil"
  email: "",              // ex.: "seuemail@exemplo.com"
  curriculoUrl: "",       // ex.: "assets/curriculo/curriculo-gustavo.pdf"
  githubProjetoUrl: "",   // repositório do Uplay
};
const fotoUrl = "";       // ex.: "assets/foto/gustavo.jpg"


/* ---------------------------------------------------------------------
   2. TODO O RESTO DO CONTEÚDO
   --------------------------------------------------------------------- */
const conteudo = {

  // Seções do site, na ordem em que aparecem.
  // "menu" é o texto do link no menu e "titulo" é o título da seção.
  // "introducao" (opcional) é uma frase curta abaixo do título.
  secoes: [
    { id: "inicio", menu: "Início" },
    { id: "sobre", menu: "Sobre", titulo: "Sobre mim" },
    {
      id: "trajetoria",
      menu: "Trajetória",
      titulo: "Minha trajetória",
      introducao: "Os passos que me trouxeram até a tecnologia.",
    },
    {
      id: "experiencia",
      menu: "Experiência",
      titulo: "Experiência profissional",
      introducao: "Minhas experiências até aqui não foram com programação, mas me deram habilidades que levo comigo para a tecnologia.",
    },
    { id: "formacao", menu: "Formação", titulo: "Formação" },
    { id: "projetos", menu: "Projetos", titulo: "Projetos" },
    { id: "habilidades", menu: "Habilidades", titulo: "Habilidades e tecnologias" },
    { id: "certificacoes", menu: "Certificações", titulo: "Certificações" },
    { id: "contato", menu: "Contato", titulo: "Vamos conversar?" },
  ],

  // ----- Início (primeira tela) -----
  inicio: {
    nome: "Gustavo Fernandes Rabelo",
    iniciais: "GR", // aparecem no lugar da foto enquanto fotoUrl estiver vazio
    titulo: "Estudante de Engenharia de Software",
    frase: "Construindo minha carreira em tecnologia, um projeto de cada vez.",
    // Para esconder o aviso de disponibilidade, troque true por false.
    mostrarDisponibilidade: true,
    disponibilidade: "Disponível para oportunidades de estágio em tecnologia",
    botoes: [
      { texto: "Conheça minha trajetória", destino: "#trajetoria" },
      { texto: "Veja meus projetos", destino: "#projetos" },
    ],
  },

  // ----- Sobre mim -----
  sobre: {
    // Cada texto entre aspas vira um parágrafo.
    paragrafos: [
      "Tenho 19 anos e curso Engenharia de Software na UniEVANGÉLICA, em Anápolis (GO). Estou no 2º período, no curso presencial noturno, e ainda estou construindo minha base técnica em programação.",
      "Antes da tecnologia, trabalhei com redes sociais, edição de vídeo e na área comercial. Foi nesses trabalhos que desenvolvi comunicação, atendimento ao cliente e organização, e são habilidades que levo comigo para essa nova fase.",
      "Hoje busco um estágio ou uma primeira oportunidade em tecnologia para ganhar experiência prática, aprender com profissionais experientes e continuar me desenvolvendo.",
    ],
    tituloQualidades: "O que levo comigo",
    qualidades: [
      "Vontade de aprender",
      "Comunicação",
      "Responsabilidade",
      "Curiosidade",
      "Adaptabilidade",
      "Comprometimento",
    ],
  },

  // ----- Minha trajetória (do mais recente para o mais antigo) -----
  // "destaque: true" deixa o marcador da linha do tempo preenchido.
  trajetoria: [
    {
      periodo: "2026 — atualmente",
      titulo: "Início em Engenharia de Software na UniEVANGÉLICA",
      resumo: "Comecei a graduação e a construir minha base em programação.",
      destaque: true,
    },
    {
      periodo: "2025 — atualmente",
      titulo: "Representação comercial",
      resumo: "Atendimento e relacionamento com clientes da linha Döhler.",
    },
    {
      periodo: "2020 — 2025",
      titulo: "BR Soluções LTDA",
      resumo: "Redes sociais, edição de vídeo, atendimento ao cliente e apoio às atividades da empresa.",
    },
  ],

  // ----- Experiência profissional -----
  // "secundaria: true" deixa o card com aparência mais discreta.
  experiencias: [
    {
      empresa: "BR Soluções LTDA",
      subtitulo: "",
      periodo: "2020 — 2025",
      atividades: [
        "Gestão do Instagram: criação e publicação de posts e legendas",
        "Edição de vídeos curtos e de vídeos para o YouTube",
        "Criação de thumbnails e otimização de SEO no YouTube",
        "Atendimento e comunicação com clientes que compravam os produtos da empresa",
        "Apoio em atividades financeiras e operacionais",
      ],
      habilidades: [
        "Comunicação",
        "Responsabilidade",
        "Organização",
        "Criatividade",
        "Atendimento ao cliente",
        "Autonomia",
        "Adaptabilidade",
        "Lidar com várias demandas ao mesmo tempo",
        "Entendimento de como um negócio funciona",
      ],
      secundaria: false,
    },
    {
      empresa: "Representação comercial",
      subtitulo: "Linha Döhler",
      periodo: "2025 — atualmente",
      atividades: [
        "Atendimento e relacionamento com uma carteira de aproximadamente 400 clientes",
        "Comunicação profissional e entendimento das necessidades de cada cliente",
        "Organização do acompanhamento dos clientes",
      ],
      habilidades: [
        "Comunicação",
        "Relacionamento com clientes",
        "Responsabilidade",
        "Organização",
      ],
      secundaria: true,
    },
  ],

  // ----- Formação -----
  // Para adicionar um curso, copie um bloco { ... } e cole abaixo.
  formacao: [
    {
      curso: "Engenharia de Software",
      instituicao: "UniEVANGÉLICA",
      detalhes: ["2º período", "Anápolis - GO", "2026 — atualmente"],
    },
  ],

  // ----- Projetos -----
  // Para adicionar um projeto, copie o bloco { ... } inteiro e cole abaixo.
  // Se "tecnologias" estiver vazia, aparece "Ainda não definidas".
  // Se "githubUrl" estiver vazio, o botão aparece como "Repositório em breve".
  projetos: [
    {
      nome: "Uplay",
      nomeAnterior: "NOCTRA",
      status: "Em desenvolvimento",
      descricao: "Plataforma que conecta microinfluenciadores e empresas.",
      contexto: "Projeto integrador do curso de Engenharia de Software, desenvolvido em equipe. A proposta é uma rede social profissional em que empresas encontram microinfluenciadores por nicho e métricas e negociam parcerias diretamente na plataforma.",
      papel: "Back-end",
      equipe: ["Gustavo Fernandes Rabelo", "Gabriel Oliveira Santos", "Yuri Oliveira"],
      etapaAtual: "Especificação e levantamento de requisitos",
      jaFeito: [
        "Definição do produto e do nome",
        "Visão geral do negócio",
        "Problema central",
        "Equipe e responsabilidades",
        "7 regras de negócio",
        "10 requisitos funcionais",
        "7 requisitos não funcionais",
        "Business Model Canvas",
        "Análise inicial de soluções concorrentes",
      ],
      proximasEtapas: [
        "Aprofundar a pesquisa de mercado e de concorrentes",
        "Primeiros wireframes",
        "Casos de uso detalhados",
        "Jornadas de usuário",
        "Validação com usuários reais",
      ],
      tecnologias: [], // ex.: ["Java", "PostgreSQL"]
      githubUrl: links.githubProjetoUrl,
    },
  ],

  // ----- Habilidades e tecnologias -----
  habilidades: {
    // Coloque aqui só o que você realmente já usou.
    // Categoria vazia não aparece no site.
    // Exemplo: linguagens: ["JavaScript", "Python"],
    tecnicas: {
      linguagens: [],
      frameworks: [],
      bancosDeDados: [],
      ferramentas: [],
      praticas: [],
    },
    // Nome que aparece no site para cada categoria acima.
    nomesDasCategorias: {
      linguagens: "Linguagens",
      frameworks: "Frameworks",
      bancosDeDados: "Bancos de dados",
      ferramentas: "Ferramentas",
      praticas: "Práticas",
    },
    // Texto mostrado enquanto todas as categorias técnicas estiverem vazias.
    mensagemSemTecnicas: "Minha jornada técnica está apenas começando. Estou construindo minha base em programação e adicionando novas tecnologias conforme avanço nos estudos e projetos.",
    comportamentais: [
      "Comunicação",
      "Atendimento ao cliente",
      "Organização",
      "Criatividade",
      "Adaptabilidade",
      "Trabalho em equipe",
    ],
  },

  // ----- Certificações -----
  // Enquanto a lista estiver vazia, aparece a mensagem "Em constante aprendizado."
  // Para adicionar um certificado, copie o exemplo abaixo para dentro dos
  // colchetes, apague as barras (//) do começo das linhas e preencha.
  certificacoes: [
    // {
    //   nome: "Nome do curso",
    //   instituicao: "Nome da instituição",
    //   dataConclusao: "mês/ano",
    //   cargaHoraria: "20 horas",
    //   linkCertificado: "https://...",
    //   linkVerificacao: "https://...",
    // },
  ],
  certificacoesVazio: {
    titulo: "Em constante aprendizado.",
    texto: "Novos cursos e certificações serão adicionados conforme minha jornada de aprendizado evolui.",
  },

  // ----- Contato -----
  // O título vem de "secoes" lá em cima. Os botões aparecem
  // sozinhos quando os links do item 1 estiverem preenchidos.
  contato: {
    texto: "Estou no início da minha jornada em tecnologia e aberto a oportunidades que me permitam aprender, contribuir e crescer profissionalmente.",
    mensagemSemLinks: "Em breve, meus canais de contato estarão disponíveis aqui.",
  },
};
