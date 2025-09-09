class livros{
    constructor(id, titulo, autor, editora, numeroPaginas, genero, sinopse, capa){
        this.id = id;
        this.titulo = titulo;
        this.autor = autor;
        this.editora = editora;
        this.numeroPaginas = numeroPaginas;
        this.genero = genero;
        this.sinopse = sinopse;
        this.capa = capa;
    }
}

const Livros = [
    new Livro (
        1,
        "48 Leis do Poder",
        "Robert Greene",
        "Rocco",
        544,
        "Auto Ajuda",
        "O livro é um manual sobre como conquistar, manter e expandir poder em diferentes áreas da vida. Greene reúne exemplos históricos de líderes, generais, reis, rainhas e figuras influentes que aplicaram (ou ignoraram) certas estratégias de poder, mostrando as consequências. Cada uma das 48 leis é apresentada com explicações, histórias de sucesso e fracasso, além de dicas de como usá-las ou se proteger delas. A obra é considerada polêmica porque trata o poder de forma prática, sem julgamento moral — ou seja, mostra tanto o lado estratégico quanto o lado manipulador. Por isso, muitos veem o livro como uma “bíblia” de influência, enquanto outros o encaram como perigoso.",
        "Imagens/D_NQ_NP_733862-MLU75134612213_032024-O.webp"
    ),

    new Livros (
        2,
        "Diário de Um Banana",
        "Jeff Kinney",
        "New York Times",
        224,
        "Ficção",
        "Greg Heffley é um garoto comum tentando sobreviver ao ensino fundamental, mas a vida escolar não é nada fácil. Entre amigos atrapalhados, família complicada e situações engraçadas, ele registra tudo em seu diário ilustrado, cheio de comentários sarcásticos e desenhos hilários. Diário de um Banana mostra, de forma leve e bem-humorada, os desafios de crescer e lidar com as confusões do dia a dia.",
        "Imagens/71MuD6Hn8OL.jpg"
    )
]

const $ = (s) => document.querySelector(s);
const grid = $('#grid');
const search = $('#search');

function render(livros) {
    grid.innerHTML = FileList.map(g => `
        <div class="card">${g.capa}</div>
        <div class="text">${g.titulo}</div>
        `
    )
}

function applyFilter() {
    const q = search.value.trim().toLowerCase();
    const filtered = q ? Livros.filter(g => g.titulo.toLowerCase().includes(q)) : Livros;
    render(filtered);
}
