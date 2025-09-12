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


function applyFilter() {
    const q = search.value.trim().toLowerCase();
    const filtered = q ? Livros.filter(g => g.titulo.toLowerCase().includes(q)) : Livros;
    render(filtered);
}
