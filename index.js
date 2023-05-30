
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