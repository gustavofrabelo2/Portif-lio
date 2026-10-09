# Portfólio — Gustavo Fernandes Rabelo

Site pessoal de currículo e portfólio, feito com **HTML, CSS e JavaScript puros**.
Não precisa instalar nada, não tem etapa de build e pode ser publicado de graça no GitHub Pages.

## Estrutura

```
/
├── index.html          ← esqueleto da página (você quase nunca precisa mexer)
├── css/style.css       ← cores, fontes e layout
├── js/conteudo.js      ← TODO o conteúdo do site (textos, links, listas)
├── js/main.js          ← código que monta a página a partir do conteudo.js
├── assets/foto/        ← coloque sua foto aqui
├── assets/curriculo/   ← coloque o PDF do currículo aqui
└── README.md           ← este arquivo
```

---

## 1. Como abrir o site no computador

Dê dois cliques no arquivo `index.html`. Ele abre no navegador.

Depois de editar algum arquivo, salve e aperte **F5** no navegador para ver a mudança.

> Dica: se você usa o VS Code, a extensão **Live Server** recarrega a página sozinha sempre que você salva.

---

## 2. Como editar o conteúdo

Tudo o que aparece no site está em **`js/conteudo.js`**. Algumas regras para não quebrar nada:

- Textos ficam entre aspas: `"assim"`.
- Itens de uma lista ficam entre colchetes e separados por vírgula: `["Item 1", "Item 2"]`.
- Cada bloco `{ ... }` termina com vírgula quando vem outro depois.
- Se a página ficar em branco depois de uma edição, quase sempre faltou uma aspa, vírgula ou chave. Aperte **F12** no navegador e abra a aba **Console** para ver em qual linha está o erro.

### Preencher os links (LinkedIn, GitHub, e-mail, currículo)

No topo do `conteudo.js`:

```js
const links = {
  githubUrl: "https://github.com/seu-usuario",
  linkedinUrl: "https://www.linkedin.com/in/seu-perfil",
  email: "seuemail@exemplo.com",
  curriculoUrl: "assets/curriculo/curriculo-gustavo.pdf",
  githubProjetoUrl: "https://github.com/seu-usuario/uplay",
};
```

Cada botão de contato só aparece quando o link correspondente estiver preenchido.

### Adicionar uma tecnologia

Procure por `tecnicas:` e coloque o nome dentro da categoria certa:

```js
tecnicas: {
  linguagens: ["JavaScript", "Python"],
  frameworks: [],
  bancosDeDados: ["MySQL"],
  ferramentas: ["Git", "VS Code"],
  praticas: [],
},
```

Categorias vazias não aparecem no site. Quando pelo menos uma tiver itens, a mensagem "Minha jornada técnica está apenas começando…" some sozinha.

### Adicionar um projeto

Em `projetos: [ ... ]`, copie o bloco `{ ... }` do Uplay inteiro, cole logo depois (com uma vírgula separando) e troque os dados:

```js
projetos: [
  {
    nome: "Uplay",
    // ...
  },
  {
    nome: "Nome do novo projeto",
    nomeAnterior: "",
    status: "Concluído",
    descricao: "Uma frase sobre o projeto.",
    contexto: "Onde e por que ele foi feito.",
    papel: "Front-end",
    equipe: ["Gustavo Fernandes Rabelo"],
    etapaAtual: "Publicado",
    jaFeito: ["Primeira coisa feita"],
    proximasEtapas: ["Próxima melhoria"],
    tecnologias: ["HTML", "CSS"],
    githubUrl: "https://github.com/seu-usuario/novo-projeto",
  },
],
```

Com dois ou mais projetos, os cards passam a aparecer em grade automaticamente.

### Adicionar um certificado

Em `certificacoes: [ ... ]` há um exemplo comentado. Copie-o para dentro dos colchetes, apague as barras `//` do começo das linhas e preencha:

```js
certificacoes: [
  {
    nome: "Lógica de Programação",
    instituicao: "Nome da instituição",
    dataConclusao: "março/2026",
    cargaHoraria: "20 horas",
    linkCertificado: "https://...",
    linkVerificacao: "https://...",
  },
],
```

Assim que existir pelo menos um certificado, a mensagem "Em constante aprendizado." deixa de aparecer.

### Adicionar uma experiência

Em `experiencias: [ ... ]`, copie um bloco e preencha. Coloque `secundaria: true` se quiser que o card fique mais discreto:

```js
{
  empresa: "Nome da empresa",
  subtitulo: "",
  periodo: "2026 — atualmente",
  atividades: ["O que você faz"],
  habilidades: ["O que você desenvolveu"],
  secundaria: false,
},
```

Se quiser que ela também apareça na linha do tempo, adicione um item em `trajetoria`.

### Adicionar um curso na formação

Em `formacao: [ ... ]`:

```js
{
  curso: "Nome do curso",
  instituicao: "Instituição",
  detalhes: ["Concluído", "On-line", "2026"],
},
```

---

## 3. Como colocar a foto e o currículo

**Foto**
1. Coloque a imagem na pasta `assets/foto/` (por exemplo, `gustavo.jpg`). Uma foto vertical funciona melhor.
2. No `conteudo.js`, preencha: `const fotoUrl = "assets/foto/gustavo.jpg";`

Enquanto `fotoUrl` estiver vazio, aparecem as iniciais "GR" no lugar da foto.

**Currículo**
1. Coloque o PDF na pasta `assets/curriculo/` (por exemplo, `curriculo-gustavo.pdf`).
2. No `conteudo.js`, preencha: `curriculoUrl: "assets/curriculo/curriculo-gustavo.pdf",`

O botão "Baixar currículo" aparece sozinho na seção de contato.

> Atenção: no GitHub Pages, maiúsculas e minúsculas fazem diferença. `Gustavo.JPG` e `gustavo.jpg` são arquivos diferentes.

---

## 4. Como publicar no GitHub Pages

1. Crie uma conta em [github.com](https://github.com), se ainda não tiver.
2. Clique em **New repository** (botão verde "New").
3. Dê um nome ao repositório. Se ele se chamar `seu-usuario.github.io`, o site fica em `https://seu-usuario.github.io`. Com outro nome (ex.: `portfolio`), fica em `https://seu-usuario.github.io/portfolio`.
4. Deixe o repositório como **Public** e clique em **Create repository**.
5. Na página do repositório, clique em **uploading an existing file** e arraste **todos** os arquivos e pastas do projeto (`index.html`, `css`, `js`, `assets`, `README.md`).
6. Clique em **Commit changes**.
7. Vá em **Settings → Pages**.
8. Em **Source**, escolha **Deploy from a branch**. Em **Branch**, escolha `main` e a pasta `/ (root)`. Clique em **Save**.
9. Aguarde de 1 a 2 minutos e recarregue a página de configurações. O endereço do site vai aparecer no topo.

**Para atualizar o site depois:** edite os arquivos direto no GitHub (ícone de lápis) ou envie os arquivos novos de novo pelo **Add file → Upload files**. Em 1 ou 2 minutos a mudança aparece no ar.

> Se você usa Git no computador, o fluxo é: `git add .`, `git commit -m "mensagem"` e `git push`.
