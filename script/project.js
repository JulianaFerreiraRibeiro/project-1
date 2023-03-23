let products = [
    {
        id: 1,
        name: 'A Garota do Lago',
        description: 'Duas semanas atrás, a estudante de direito Becca Eckersley foi brutalmente assassinada, ela era filha de um poderoso advogado e estava no auge de sua vida. Atraída instintivamente pela notícia, a repórter Kelsey Castle vai até a cidade para investigar o caso...',
        cart: 'Adicionar ao carrinho',
        image: './images/livro_horror_1.jpg',
        value: 40,
        tag: ['Horror']

    },
    {
        id: 2,
        name: 'Saboroso Cadáver',
        description: 'O livro conta a história de um vírus que se espalha entre os animais de todo o planeta e torna sua carne mortal aos humanos. Impossibilitados de utilizar os animais para a alimentação, a sociedade regulariza a criação e a reprodução de seres humanos como animais de abate...',
        cart: 'Adicionar ao carrinho',
        image: './images/livro_horror_2.jpg',
        value: 42,
        tag: ['Horror']
    },
    {
        id: 3,
        name: 'Desenhos Ocultos',
        description: 'Aos 21 anos, Mallory Quinn precisa trabalhar. Recém-saída da reabilitação, a jovem consegue um emprego na casa de Ted e Caroline Maxwell, que, aos olhos da vizinhança, levam uma vida perfeita...',
        cart: 'Adicionar ao carrinho',
        image: './images/livro_horror_3.jpg',
        value: 45,
        tag: ['Horror'],
    },
    {
        id: 4,
        name: 'O Livro Maldito',
        description: 'Mais de 70 histórias curtas de terror que vão do sobrenatural até coisas terríveis que os seres humanos podem fazer. Talvez você termine de ler essas linhas aterradoras sem confiar em mais ninguém ou quem sabe achando que está sozinho quando na verdade tem alguém invisível perto de você...',
        cart: 'Adicionar ao carrinho',
        image: './images/livro_horror_4.jpg',
        value: 48,
        tag: ['Horror'],
    },
    {
        id: 5,
        name: 'Os Sete Maridos de Evelyn Hugo',
        description: 'Lendária estrela de Hollywood, Evelyn Hugo sempre esteve sob os holofotes ― seja estrelando uma produção vencedora do Oscar, protagonizando algum escândalo ou aparecendo com um novo marido… pela sétima vez. Agora, prestes a completar oitenta anos e reclusa em s..',
        cart: 'Adicionar ao carrinho',
        image: './images/livro_drama_1.jpg',
        value: 49,
        tag: ['Drama'],
    },
    {
        id: 6,
        name: 'Para Sempre Alice',
        description: 'Alice Howland é uma mulher feliz, bem casada e com três filhos crescidos, que está no auge de sua carreira como professora universitária. De repente, ela percebe que está começando a se esquecer das coisas. Conforme a confusão nubla cada vez mais sua mente e a memória dela continua a traí-la...',
        cart: 'Adicionar ao carrinho',
        image: './images/livro_drama_2.jpg',
        value: 35,
        tag: ['Drama'],
    },
    {
        id: 7,
        name: 'Cartas de Amor aos Mortos',
        description: 'Prestes a começar o ensino médio, Laurel decide mudar de escola para não ter que encarar as pessoas comentando sobre a morte de sua irmã mais velha, May. A rotina no novo colégio não está fácil, e, para completar, a professora de inglês passa uma tarefa nada usual: escrever...',
        cart: 'Adicionar ao carrinho',
        image: './images/livro_drama_3.jpg',
        value: 49,
        tag: ['Drama'],
    },
    {
        id: 8,
        name: 'Os Dois Morrem no Final',
        description: 'No dia 5 de setembro, pouco depois da meia-noite, Mateo Torrez e Rufus Emeterio recebem uma ligação da Central da Morte. A notícia é devastadora: eles vão morrer naquele mesmo dia. Os dois não se conhecem, mas, por motivos diferentes, estão à procura de um amigo...',
        cart: 'Adicionar ao carrinho',
        image: './images/livro_drama_4.jpg',
        value: 58,
        tag: ['Drama'],
    }, 
    {
        id: 9,
        name: 'A Hipótese do Amor',
        description: 'Olive Smith, aluna de biologia na Universidade de Stanford, depois de sair algumas vezes com Jeremy, ela percebe que sua melhor amiga gosta dele e decide juntá-los. Para mostrar que está feliz com essa escolha, Olive precisa ser convincente: afinal, cientistas exigem provas. Sem muitas opções, ela resolve inventar...',
        cart: 'Adicionar ao carrinho',
        image: './images/livro_romance_1.jpg',
        value: 48,
        tag: ['Romance'],
    },
    {
        id: 10,
        name: 'Mil Beijos de Garoto',
        description: 'Quando, aos dezessete anos, Rune Kristiansen retorna da Noruega para o lugar onde passou a infância, a cidade americana de Blossom Grove, na Geórgia , ele só tem uma coisa em mente: reencontrar Poppy Litchfield, a garota que era sua cara-metade e que tinha prometido esperar fielmente...',
        cart: 'Adicionar ao carrinho',
        image: './images/livro_romance_2.jpg',
        value: 30,
        tag: ['Romance'],
    },
    {
        id: 11,
        name: 'HeartStopper (vol. 1)',
        description: 'Charlie Spring e Nick Nelson não têm quase nada em comum. Charlie é um aluno dedicado e bastante inseguro por conta do bullying que sofre no colégio desde que se assumiu homossexual. Já Nick é superpopular, especialmente querido por ser um ótimo jogador de rúgbi. Quando os dois passam a sentar um ao lado do outro toda manhã...',
        cart: 'Adicionar ao carrinho',
        image: './images/livro_romance_3.jpg',
        value: 36,
        tag: ['Romance'],
    },
    {
        id: 12,
        name: 'Orgulho e Preconceito',
        description: 'O romance conta a história de Elizabeth, uma das cinco filhas da família Bennet. Sem nenhum homem como herdeiro, a perspectiva da família é ver a propriedade herdada por um primo clérigo, o que, para os padrões da época, significava que as moças precisavam se casar. Quando dois jovens cavalheiros chegam no...',
        cart: 'Adicionar ao carrinho',
        image: './images/livro_romance_4.jpg',
        value: 35,
        tag: ['Romance'],   
    }
    

]

let quantityCart = 0
let totalValueCart = 0

function createProductsCards(products){

for(let i = 0; i < products.length; i++){
const listProducts = document.querySelector('.list_of_products')
listProducts.id = products[i].id
const itemProducts = document.createElement('li')

itemProducts.classList.add('itemCard')
listProducts.appendChild(itemProducts)

const imageProducts = document.createElement('img')
imageProducts.classList.add('imageCard')
imageProducts.setAttribute('src', products[i].image)
itemProducts.appendChild(imageProducts)

const tagProducts = document.createElement('button')
tagProducts.classList.add('tagCard')
tagProducts.innerText = products[i].tag
itemProducts.appendChild(tagProducts)

const titleProducts = document.createElement('h3')
titleProducts.innerText = products[i].name
itemProducts.appendChild(titleProducts)

const descriptionProducts = document.createElement('p')
descriptionProducts.classList.add('descriptionCard')
descriptionProducts.innerText = products[i].description
itemProducts.appendChild(descriptionProducts)

const valueProducts = document.createElement('p')
valueProducts.classList.add('valueCard')
valueProducts.innerText = `R$ ${products[i].value}`
itemProducts.appendChild(valueProducts)

const buttonProductsCart = document.createElement('button')
buttonProductsCart.classList.add('cartCard')
buttonProductsCart.innerText = products[i].cart
itemProducts.appendChild(buttonProductsCart)

buttonProductsCart.addEventListener('click', function(){
    let idElement = `${products[i].id}`
    let product = searchProducts(idElement)

    quantityCart++
    document.querySelector('.quantity').innerHTML = `${quantityCart}`
    

    let elementProduct = listCart(product)
    document.querySelector('.cart_list').appendChild(elementProduct)
    
    totalValueCart += products[i].value
    document.querySelector('.total_value_cart').innerHTML = `R$${totalValueCart},00`
    
    if(quantityCart > 0){
        document.querySelector('.empty').classList.add('none');
        document.querySelector('.empty').classList.remove('block');
      } else if(quantityCart == 0) {
        document.querySelector('.empty').classList.add('block');
        document.querySelector('.empty').classList.remove('none');
      }
    
    
})
}
}
function searchProducts(id){
for(let i = 0; i < products.length; i++){
    if(products[i].id == id){
        return products[i]
    }
}
}

function listCart(products){

    let itemCart = document.createElement('li')
    itemCart.classList.add('item_cart')
    
    let imageCart = document.createElement('img')
    imageCart.classList.add('image_cart')
    imageCart.setAttribute('src', `${products.image}`)
    itemCart.appendChild(imageCart)

    let div = document.createElement('div')
    itemCart.appendChild(div)

    let titleCart = document.createElement('h3')
    titleCart.classList.add('title_cart')
    titleCart.innerText = products.name
    div.appendChild(titleCart)

    let valueCart = document.createElement('p')
    valueCart.classList.add('value_cart')
    valueCart.innerText = products.value
    div.appendChild(valueCart)

    let buttonCart = document.createElement('button')
    buttonCart.classList.add('button_cart_remove')
    buttonCart.innerText = 'Remover Produto'
    div.appendChild(buttonCart)

    

    buttonCart.addEventListener('click', function(event){
        quantityCart--
        document.querySelector('.quantity').innerHTML = `${quantityCart}`

        
        let listPath = event.composedPath()
        listPath[2].remove()

        let idElement = `${products.id}`
        let product = searchProducts(idElement)
        
        totalValueCart -= product.value
        document.querySelector('.total_value_cart').innerHTML = `R$${totalValueCart},00`
    })

    return itemCart
}



function removeProductsCards(){
    const productsCard = document.querySelectorAll(`.itemCard`)
    productsCard.forEach(cardProduct => cardProduct.remove())
}

const buttonFilter = document.querySelectorAll('.button')

function filterProducts(tagName){
    if(tagName == 'Todos'){
        return products
    }

    let filteredProducts = []

    for(let i = 0; i < products.length; i++){
        if(products[i].tag == tagName){
            filteredProducts.push(products[i])
        }
    }

    return filteredProducts
}

function filterButtons(){
for(let i = 0; i < buttonFilter.length; i++){
    buttonFilter[i].addEventListener('click', function(){
        const tag = buttonFilter[i].innerText
        const filteredProducts = filterProducts(tag)
        removeProductsCards()
        createProductsCards(filteredProducts)
    })
}
}

function searchingForProducts(searchProduct){
    const filteredProducts = products.filter(products => {
        return products.name.toLowerCase().includes(searchProduct.toLowerCase())
    })
    return filteredProducts
}

const inputSearch = document.querySelector('.input-search')

function searchBar(){
    
    inputSearch.addEventListener('input', function(){
        
        const search = inputSearch.value
        filteredProducts = searchingForProducts(search)
        removeProductsCards()
        createProductsCards(filteredProducts)
        darkMode(filteredProducts)
    })
}

function darkMode(p){
const buttonDark = document.querySelector('.dark_button')
const body = document.querySelector('body')
const buttonSearch = document.querySelector('.search-button')
const tagProduct = document.querySelectorAll('.tagCard')
const buttonAdd = document.querySelectorAll('.cartCard')
const input = document.querySelector('.input-search')





buttonDark.addEventListener('click', function(){
    body.classList.toggle('body_black_mode')
    buttonSearch.classList.toggle('elements_black_mode')
    tagProduct.forEach(product => product.classList.toggle('elements_black_mode'))
    buttonAdd.forEach(button => button.classList.toggle('elements_black_mode'))
    input.classList.toggle('elements_black_mode')

    if(body.classList.contains('body_black_mode')){
        buttonDark.innerText = 'Modo Claro'
    } else {
        buttonDark.innerText = 'Modo Escuro'
    }
    

})
}

searchBar()
filterButtons()
createProductsCards(products)
darkMode()
