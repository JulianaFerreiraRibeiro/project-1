function darkScreenButton(){
const button_background = document.querySelector(".button") 
const body = document.querySelector("body")
const link_nav = document.querySelector(".link_nav_1")
const link_nav_3 = document.querySelector(".link_nav_3")
const title_nav = document.querySelector(".title_nav")
const form = document.querySelector("form")
const contact = document.querySelector(".contact_forms")
const image1 = document.getElementById("1")
const image2 = document.getElementById("2")
const image3 = document.getElementById("3")
const button_send = document.querySelector(".button_send")
 
button_background.addEventListener('click', () => {
    body.classList.toggle("dark_screen")
    link_nav.classList.toggle("dark_screen_link")
    link_nav_3.classList.toggle("dark_screen_link")
    title_nav.classList.toggle("dark_screen_title")
    form.classList.toggle("dark_screen_form")
    contact.classList.toggle("dark_screen_form")
    image1.classList.toggle("dark_screen_image")
    image2.classList.toggle("dark_screen_image")
    image3.classList.toggle("dark_screen_image")
    button_send.classList.toggle("dark_screen_button_send")
    
    if(body.classList.contains("dark_screen")){
        button_background.innerText = 'Modo claro'
    } else {
         button_background.innerText = 'Modo Escuro'
    }

})
}

darkScreenButton()