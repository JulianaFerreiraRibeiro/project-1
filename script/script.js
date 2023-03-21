let projects = [
    {
        id: 1,
        name: 'Projeto The Office - Semana do 0 ao Programador',
        languages: ['CSS', 'JavaScript', 'HTML'],
        description: 'O projeto foi realizado durante a Semana do 0 ao Programador no canal DevEmDobro, o evento foi 100% gratuito e proporcionou uma base sobre HTML, CSS e Javascript por meio deste projeto, além de falar sobre a área de programação em geral',
        image: './images/Projeto_1.png',
        link: 'https://julianaferreiraribeiro.github.io/project-the-office/'
    }
];

function createProject(){
    const listProject = document.querySelector('.projects_list')
    for(let i = 0; i < projects.length; i++){
    const itemProject = document.createElement('li')

    itemProject.classList.add('projects_items')
    itemProject.innerText = projects[i].name
    listProject.appendChild(itemProject)
    
    const linkProject = document.createElement('a')
    linkProject.setAttribute('href', projects[i].link)
    linkProject.setAttribute('target', '_blank')
    itemProject.appendChild(linkProject)
    
    const imageProject = document.createElement('img')
    imageProject.setAttribute('src', projects[i].image)
    linkProject.appendChild(imageProject)


    const descriptionProject = document.createElement('p')
    descriptionProject.innerText = projects[i].description
    itemProject.appendChild(descriptionProject)

    }
}

createProject()

function buttonBackground(){
const backgroundButton = document.querySelector('.button')
const body = document.querySelector('body')
const footer = document.querySelector('footer')
const footerTitle = document.querySelector('h5')
const footerImages = document.querySelector('.media')
const navLink1 = document.querySelector('.link_nav_1')
const navLink3 = document.querySelector('.link_nav_3')
const navLink2 = document.querySelector('.link_nav_2')
const navTitle = document.querySelector('.title_nav')


backgroundButton.addEventListener('click', function(){
    body.classList.toggle('dark_mode')
    footer.classList.toggle('dark_mode_footer')
    footerTitle.classList.toggle('dark_mode_footer_title')
    footerImages.classList.toggle('dark_mode_footer_images')
    navLink1.classList.toggle('dark_mode_nav_link')
    navLink2.classList.toggle('dark_mode_nav_link')
    navLink3.classList.toggle('dark_mode_nav_link')
    navTitle.classList.toggle('dark_mode_nav_title')
    

    if(body.classList.contains('dark_mode')){
        backgroundButton.innerText = 'Modo Claro'
    } else {
         backgroundButton.innerText = 'Modo Escuro'
    }


})
}

buttonBackground()