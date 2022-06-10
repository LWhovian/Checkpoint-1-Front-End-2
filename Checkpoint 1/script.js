var containerElemento = document.querySelector('.container')
var novaPostagemElemento = document.querySelector('#novaPostagem')

var elementoInputTitulo = document.querySelector('#titulo')
var elementoInputURL = document.querySelector('#url')
var elementoInputIngredientes = document.querySelector('#ingredientes')
var elementoInputModo = document.querySelector('#modo')


var posts = []


novaPostagemElemento.addEventListener ('click', (event)=> {
    
    event.preventDefault();

    let postagem = {
        titulo: elementoInputTitulo.value,
        ingredientes: elementoInputIngredientes.value,
        modo: elementoInputModo.value,
        imagem: elementoInputURL.value
        }

        containerElemento.innerHTML += `
        <div class="item" id="img">
        <img src="${postagem.imagem}">
        <h2>${postagem.titulo}</h2>
        <p>${postagem.ingredientes}</p>
        <p>${postagem.modo}</p>
        </div>`

        posts.push(postagem)

        elementoInputIngredientes.value=" "
        elementoInputModo.value=" "
        elementoInputTitulo.value=" "
        elementoInputURL.value=" "
    
    console.log(posts)

})