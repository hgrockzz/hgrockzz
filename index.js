
    var userLang = navigator.language || navigator.userLanguage; 
    switch (userLang) {
        case 'hi': //hindi
            document.getElementById('greet').innerText = "नमस्ते"
            break;
        case 'fr':
        case 'fr-FR': //french 
            document.getElementById('greet').innerText = "Bonjour"
            break;
        case 'ur': //urdu
            document.getElementById('greet').innerText = "ہیلو"
            break;
        case 'ru': //russian
            document.getElementById('greet').innerText = "привет"
            break;
        case 'zh': //chinese
            document.getElementById('greet').innerText = "你好"
            break;   
        case 'ja': //japanese
            document.getElementById('greet').innerText = "こんにちは"
            break;
        case 'bn': //bengali
            document.getElementById('greet').innerText = "হ্যালো"
            break;
        case 'es': //spanish
            document.getElementById('greet').innerText = "Hola"
            break;                     

        default:
            document.getElementById('greet').innerText = "Hi"
            break;
    }

//move to top on scroll section
let scrollTop = document.getElementById('topBtn');
window.onscroll = function() { scrollFunc() }

function scrollFunc() {
    if(document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000)
        scrollTop.style.display = 'block';
    else
        scrollTop.style.display = 'none';
}

function moveToTop(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

// Responsive NavBar
function expandMenu(){
    document.getElementById('links').classList.remove('links');
    document.getElementById('links').classList.add('links-mobile');
    document.getElementById('logo').style.display = 'none';
    document.getElementById('menu').style.display = 'none';
    document.getElementById('navBack').classList.remove('navBack');
    document.getElementById('navBack').classList.add('menu');
}

function collapseMenu(){
    document.getElementById('navBack').classList.remove('menu');
    document.getElementById('navBack').classList.add('navBack');
    document.getElementById('menu').style.display = 'block';
    document.getElementById('logo').style.display = 'flex';
    document.getElementById('links').classList.remove('links-mobile');
    document.getElementById('links').classList.add('links');
}