const livros = document.querySelectorAll('.livro') //buscando todos os livros da lista
let livroAtual = 0 //iniciando pelo índice 0

function mostrarLivro(indiceLivro){
    livros[indiceLivro].classList.add('selecionado') //colocando 'selecionado' para exibir o livro na tela
}

function esconderLivroselecionado(){
    const livroSelecionado = document.querySelector('.selecionado') //buscando o livro que está em exposição na tela
    livroSelecionado.classList.remove('selecionado') //removendo 'selecionado' para esconder o livro a mostra
}



//botao avancar
const btnAvancar = document.getElementById('btnAvancar')

//identificando o click do usuário
btnAvancar.addEventListener('click', function(){ //disparar um evento click e executar
    if (livroAtual === livros.length - 1 )return

    livroAtual++
    mostrarLivro(livroAtual)

    esconderLivroselecionado()

    
    
})

//botao voltar
const btnVoltar = document.getElementById('btnVoltar')

btnVoltar.addEventListener('click', function(){
    if (livroAtual === 0) return

    esconderLivroselecionado()

    livroAtual--
    mostrarLivro(livroAtual)
})
