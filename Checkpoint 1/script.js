var containerElemento = document.querySelector('.container')
var novaPostagemElemento = document.querySelector('#novaPostagem')

var elementoInputTitulo = document.querySelector('#titulo')
var elementoInputURL = document.querySelector('#url')
var elementoInputIngredientes = document.querySelector('#ingredientes')
var elementoInputModo = document.querySelector('#modo')

var posts = [
    {
        foto: 'https://s3.static.brasilescola.uol.com.br/be/2022/01/tigre.jpg',
        titulo: 'O tigre',
        ingredientes: 'O tigre (Panthera tigris) é uma das espécies da subfamília Pantherinae (família Felidae) pertencente ao gênero Panthera. É encontrado de forma nativa apenas no continente asiático; é um predador carnívoro e é a maior espécie de felino do mundo junto com o leão.',
        modo: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
    },
    {
        foto: 'https://vejasp.abril.com.br/wp-content/uploads/2021/12/20211202-Tigre-de-bengala9-foto-Paulo-Gil-2.jpg-1.jpg',
        titulo: 'O tigre versão Shine',
        texto: 'O tigre (Panthera tigris) é uma das espécies da subfamília Pantherinae (família Felidae) pertencente ao gênero Panthera. É encontrado de forma nativa apenas no continente asiático; é um predador carnívoro e é a maior espécie de felino do mundo junto com o leão.',
        modo: 'aaaaaaaaaaaaaaaaaaaaaaaaa'
    },
    {
        foto: 'https://img.r7.com/images/leao-branco-juba-moya-19012022005116744',
        titulo: 'O leão',
        ingredientes: 'O leão (Panthera leo) é um mamífero carnívoro da família dos felinos é uma das cinco espécies do gênero gênero Panthera. Os leões selvagens vivem em populações cada vez mais dispersas e fragmentadas na África subsahariana (com exceção das regiões florestais e das regiões de selva da Bacia do Congo) e uma pequena área do noroeste da Índia.',
        modo: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
    }
]


for (let post of posts) {

    containerElemento.innerHTML += `
        <div class="item" id="img">
        <img src="${post.foto}">
        <h2>${post.titulo}</h2>
        <p>${post.ingredientes}</p>
        <p>${post.modo}</p>
        </div>
`
}

/*function start(){
    let postagem = {
    titulo: document.querySelector("#titulo"),
    ingredientes: document.querySelector("#ingredientes"),
    modo: document.querySelector("#modo"),
    imagem: document.querySelector("#url")
    }
        for (let i = 0; i < 1; i++) {
        containerElemento.innerHTML += `
        <div class="item" id="img">
        <img src="${postagem.imagem.value}">
        <h2>${postagem.titulo.value}</h2>
        <p>${postagem.ingredientes.value}</p>
        <p>${postagem.modo.value}</p>
        </div>`

        console.log (postagem)
    }     
        postagem.value = ""
    
}

*/
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
        <img src="${postagem.imagem.value}">
        <h2>${postagem.titulo.value}</h2>
        <p>${postagem.ingredientes.value}</p>
        <p>${postagem.modo.value}</p>
        </div>`

        posts.push(postagem)

        elementoInputIngredientes.value=" "
        elementoInputModo.value=" "
        elementoInputTitulo.value=" "
        elementoInputURL=" "
    
    console.log(posts)

})