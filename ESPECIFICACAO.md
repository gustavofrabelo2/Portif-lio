# Especificação — Portfólio pessoal de Gustavo Fernandes Rabelo

> Este arquivo é a especificação completa do site. Leia tudo antes de começar.
> Em caso de dúvida sobre algum conteúdo, **pergunte em vez de inventar**.

---

## 1. Objetivo

Criar um site de página única que funcione como **currículo e portfólio** de Gustavo Fernandes Rabelo, estudante de Engenharia de Software.

O visitante (recrutador, empresa, outro profissional) precisa entender rapidamente:

1. Quem é o Gustavo?
2. O que ele já fez?
3. O que ele está construindo e para onde está indo?

Mensagem central do site:

> "Estou no início da minha carreira em tecnologia, mas estou construindo minha trajetória de forma séria e consistente."

Impressão que o visitante deve levar: *"Ele ainda está começando, mas é sério, comunicativo, organizado e está realmente construindo a carreira."*

---

## 2. Regras inegociáveis

1. **Todo texto visível em português do Brasil natural.** Títulos, menu, botões, rótulos, rodapé, `alt` de imagens, `aria-label`, mensagens de estado vazio, tudo. Nada de inglês na interface, nada de Lorem Ipsum. Nomes de variáveis, funções e arquivos podem ficar em inglês.
2. **Nada inventado.** Não criar experiências, projetos, tecnologias, certificados, estatísticas, números, URLs, e-mail ou foto que não estejam neste documento. Onde faltar informação, usar um placeholder claro.
3. **Não exagerar.** Gustavo é iniciante em programação. O site vende potencial, profissionalismo, comunicação, vontade de aprender e consistência — não "sou um dev experiente".
4. **Código simples.** Gustavo está no 2º período e precisa conseguir entender, editar e manter o código sozinho.

---

## 3. Stack técnica (obrigatória)

- **HTML, CSS e JavaScript puros.** Sem React, sem Next, sem Tailwind, sem framework, sem etapa de build, sem `npm install`.
- O site deve abrir com dois cliques no `index.html` e poder ser publicado de graça no **GitHub Pages**.
- Fontes podem vir do Google Fonts. Ícones, se necessários, em SVG inline.
- **Todo o conteúdo editável fica em um único arquivo**: `js/conteudo.js`. O HTML é montado a partir dele. Assim, para adicionar um projeto, uma tecnologia ou um certificado, Gustavo só mexe nesse arquivo.
- Comentários no código em português, explicando o que cada parte faz (pensando em um iniciante lendo).

Estrutura sugerida:

```
/
├── index.html
├── css/
│   └── style.css
├── js/
│   ├── conteudo.js   ← TODO o conteúdo editável (textos, links, listas)
│   └── main.js       ← monta as seções, menu mobile, animações
├── assets/
│   ├── foto/         ← foto real será colocada aqui depois
│   └── curriculo/    ← PDF do currículo será colocado aqui depois
└── README.md         ← como editar e como publicar no GitHub Pages
```

---

## 4. Identidade visual

- Minimalista, elegante, jovem, moderno, organizado.
- Fundo **off-white / bege quente levemente escuro** (não branco puro).
- Texto principal preto ou neutro muito escuro; elementos secundários em cinza, bege e tons neutros.
- O destaque vem de **tipografia, espaçamento, hierarquia e consistência** — não de efeitos.
- Defina as cores como variáveis CSS em `:root` para facilitar ajustes.

**Evitar:** cores fortes, neon, estética cyberpunk, excesso de gradiente, glassmorphism, terminal falso, efeito Matrix, partículas, 3D/WebGL, blocos de código decorativos, visual corporativo genérico.

O site deve parecer feito por um jovem estudante brasileiro de tecnologia — não por um sênior tentando impressionar com efeitos.

---

## 5. Animações

Só animações sutis e rápidas: fade-in/slide-in leve ao entrar na tela (Intersection Observer), hover discreto em botões e cards, rolagem suave na navegação.

Respeitar `prefers-reduced-motion`: se o usuário pedir menos movimento, desligar as animações.

---

## 6. Seções (nesta ordem)

Menu fixo no topo com links para cada seção. No celular, vira um menu hambúrguer acessível.

### 6.1 Início (hero)

- Nome: **Gustavo Fernandes Rabelo**
- Título: **Estudante de Engenharia de Software**
- Frase: **"Construindo minha carreira em tecnologia, um projeto de cada vez."**
- Indicador discreto de disponibilidade (pontinho + texto): **"Disponível para oportunidades de estágio em tecnologia"**
- Botões: **"Conheça minha trajetória"** (leva à seção Trajetória) e **"Veja meus projetos"** (leva à seção Projetos)
- Espaço elegante para foto. **Não gerar nem usar foto de banco de imagens.** Enquanto não houver foto, mostrar um placeholder neutro com as iniciais **"GR"**. O caminho da foto fica em `conteudo.js` (ex.: `fotoUrl: ""`); se estiver vazio, aparece o placeholder.

### 6.2 Sobre mim

Texto curto e natural, em primeira pessoa, com base nestes fatos:

- 19 anos, cursa Engenharia de Software na UniEVANGÉLICA, em Anápolis (GO).
- Está no 2º período, faz o curso presencial no período noturno.
- Busca estágio ou primeira oportunidade em tecnologia para ganhar experiência prática, aprender com profissionais experientes e continuar se desenvolvendo.
- Ainda está construindo a base técnica em programação.
- Antes da tecnologia, desenvolveu comunicação, atendimento ao cliente e organização em trabalhos com redes sociais, edição de vídeo e área comercial.

Destacar: vontade de aprender, comunicação, responsabilidade, curiosidade, adaptabilidade e comprometimento. Não afirmar conhecimento avançado em programação.

### 6.3 Minha trajetória (linha do tempo)

Linha do tempo visual simples, do mais recente para o mais antigo, mostrando a transição para a tecnologia:

- **2026 — atualmente:** Início em Engenharia de Software na UniEVANGÉLICA
- **2025 — atualmente:** Representação comercial
- **2020 — 2025:** BR Soluções LTDA

Cada item: período, título, uma frase de resumo. Os dados vêm de `conteudo.js`.

### 6.4 Experiência profissional

As experiências **não são de programação** e não devem ser apresentadas como tal. O foco são as habilidades transferíveis.

**BR Soluções LTDA** — 2020 a 2025

Atividades:
- Gestão do Instagram: criação e publicação de posts e legendas
- Edição de vídeos curtos e de vídeos para o YouTube
- Criação de thumbnails e otimização de SEO no YouTube
- Atendimento e comunicação com clientes que compravam os produtos da empresa
- Apoio em atividades financeiras e operacionais

Habilidades desenvolvidas: comunicação, responsabilidade, organização, criatividade, atendimento ao cliente, autonomia, adaptabilidade, lidar com várias demandas ao mesmo tempo, entendimento de como um negócio funciona.

**Representação comercial (linha Döhler)** — 2025 a atualmente

Atividades:
- Atendimento e relacionamento com uma carteira de aproximadamente 400 clientes
- Comunicação profissional e entendimento das necessidades de cada cliente
- Organização do acompanhamento dos clientes

Habilidades desenvolvidas: comunicação, relacionamento com clientes, responsabilidade, organização.

Esta experiência fica visualmente secundária em relação à narrativa de tecnologia. Não mencionar vínculos familiares em nenhuma das experiências.

### 6.5 Formação

**Engenharia de Software** — UniEVANGÉLICA
2º período · Anápolis - GO · 2026 — atualmente

Estrutura em lista no `conteudo.js`, pronta para receber outras formações e cursos depois.

### 6.6 Projetos

Gustavo tem **um único projeto real**. Não inventar outros. A seção precisa ficar bonita com apenas um card (card em destaque, largura confortável — não um grid com espaços vazios).

**Uplay** (antes chamado NOCTRA)

- Descrição curta: **"Plataforma que conecta microinfluenciadores e empresas."**
- Status (selo): **"Em desenvolvimento"**
- Contexto: projeto integrador do curso de Engenharia de Software, desenvolvido em equipe. A proposta é uma rede social profissional em que empresas encontram microinfluenciadores por nicho e métricas e negociam parcerias diretamente na plataforma.
- Papel do Gustavo: **Back-end**
- Equipe: Gustavo Fernandes Rabelo, Gabriel Oliveira Santos, Yuri Oliveira
- Etapa atual: especificação e levantamento de requisitos. **Não apresentar como aplicativo pronto.**
- Já feito: definição do produto e do nome, visão geral do negócio, problema central, equipe e responsabilidades, 7 regras de negócio, 10 requisitos funcionais, 7 requisitos não funcionais, Business Model Canvas, análise inicial de soluções concorrentes.
- Próximas etapas: aprofundar pesquisa de mercado e concorrentes, primeiros wireframes, casos de uso detalhados, jornadas de usuário, validação com usuários reais.
- Tecnologias: **ainda não definidas** — mostrar exatamente esse texto.
- Botão **"Ver no GitHub"** usando `githubProjetoUrl` do `conteudo.js`. Se a URL estiver vazia, o botão aparece desabilitado com o texto **"Repositório em breve"**.

O card deve ser gerado a partir de uma lista de projetos no `conteudo.js`, para que adicionar um novo projeto seja só acrescentar um objeto na lista.

### 6.7 Habilidades e tecnologias

Não listar tecnologias que Gustavo não confirmou.

Enquanto a lista estiver vazia, mostrar:

> **"Minha jornada técnica está apenas começando. Estou construindo minha base em programação e adicionando novas tecnologias conforme avanço nos estudos e projetos."**

Abaixo, pode mostrar as **habilidades comportamentais** que já são reais (comunicação, atendimento ao cliente, organização, criatividade, adaptabilidade, trabalho em equipe), separadas visualmente das técnicas.

Em `conteudo.js`, deixar a estrutura pronta e vazia, por categorias: `linguagens`, `frameworks`, `bancosDeDados`, `ferramentas`, `praticas`. Categoria vazia não aparece na tela.

### 6.8 Certificações

Enquanto não houver certificados, mostrar um estado vazio discreto:

> **"Em constante aprendizado."**
> **"Novos cursos e certificações serão adicionados conforme minha jornada de aprendizado evolui."**

Em `conteudo.js`, lista vazia `certificacoes: []` com um exemplo **comentado** mostrando os campos: nome do curso, instituição, data de conclusão, carga horária, link do certificado, link de verificação.

### 6.9 Contato

- Título: **"Vamos conversar?"**
- Texto: **"Estou no início da minha jornada em tecnologia e aberto a oportunidades que me permitam aprender, contribuir e crescer profissionalmente."**
- Botões: **LinkedIn**, **GitHub**, **E-mail**, **Baixar currículo**.
- Cada botão só aparece se o respectivo valor estiver preenchido em `conteudo.js`. Se todos estiverem vazios, mostrar: **"Em breve, meus canais de contato estarão disponíveis aqui."**
- Sem formulário de contato (não há back-end).

### 6.10 Rodapé

- Gustavo Fernandes Rabelo · Estudante de Engenharia de Software
- Ano atual calculado com JavaScript (`new Date().getFullYear()`)
- Links para GitHub e LinkedIn (apenas se preenchidos)

---

## 7. Placeholders (no topo de `js/conteudo.js`)

Todos vazios por padrão, com comentário explicando o que colocar:

```js
const links = {
  githubUrl: "",          // ex.: "https://github.com/seu-usuario"
  linkedinUrl: "",        // ex.: "https://www.linkedin.com/in/seu-perfil"
  email: "",              // ex.: "seuemail@exemplo.com"
  curriculoUrl: "",       // ex.: "assets/curriculo/curriculo-gustavo.pdf"
  githubProjetoUrl: "",   // repositório do Uplay
};
const fotoUrl = "";       // ex.: "assets/foto/gustavo.jpg"
```

O site precisa funcionar e ficar bonito com **todos esses campos vazios**.

---

## 8. Responsividade

- Desenhar primeiro para celular (mobile-first) e depois expandir para tablet, notebook e desktop.
- Sem rolagem horizontal, sem texto cortado, sem layout quebrado.
- Imagens escalam corretamente.
- Botões com área de toque de pelo menos 44px.
- Menu hambúrguer no celular, fecha ao clicar em um link.

---

## 9. Acessibilidade

- HTML semântico (`header`, `nav`, `main`, `section`, `footer`, títulos em ordem).
- Contraste adequado (mínimo WCAG AA).
- Estados de foco visíveis para navegação por teclado.
- `alt` e `aria-label` em português.
- `<html lang="pt-BR">`.
- Link "Pular para o conteúdo" no topo.

---

## 10. SEO básico

- `<title>`: "Gustavo Fernandes Rabelo | Estudante de Engenharia de Software"
- `meta description` em português.
- Tags Open Graph (título, descrição) para o link ficar bonito quando compartilhado no LinkedIn/WhatsApp.

---

## 11. README.md

Criar um README em português explicando, para um iniciante:

1. Como abrir o site no computador.
2. Como editar o conteúdo em `js/conteudo.js` (com exemplos: adicionar tecnologia, projeto, certificado, experiência).
3. Como colocar a foto e o PDF do currículo.
4. Como publicar no GitHub Pages, passo a passo.

---

## 12. Como trabalhar

1. Antes de escrever código, apresente um **plano curto**: estrutura de arquivos, paleta de cores, fontes escolhidas e layout de cada seção. Espere minha aprovação.
2. Depois de aprovado, construa o site completo.
3. Ao final, revise você mesmo:
   - existe algum texto em inglês visível? (não pode)
   - existe algum dado inventado? (não pode)
   - o site funciona com todos os placeholders vazios?
   - o layout funciona em 375px, 768px e 1440px de largura?
4. Me entregue um resumo do que foi feito e do que eu preciso preencher depois.
