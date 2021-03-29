var i = 0;
var greetings = [ '¡Hola!', 'Salut!',  'Ciao!','Hallo!','안녕하세요!','こんにちは！','嗨！','Sveiki!','Сәлам!','हाय!','Chào!','Cześć!','Hui!','היי!','ਹਾਇ!','ታዲያስ!','Kaixo!','ওহে!','Salve!','नमस्ते!','سلام!', 'Γεια!', 'مرحبا!','Hello!'];
var element = document.getElementById("greeting");
var defaultFontSize = document.getElementById('welcome_statement').style.fontSize;
window.onload = async function(){
    console.log("h");
    if(true){
        for(; i < greetings.length; i++){
            console.log(i);
            await printGreeting(i);
        }
    }
}

function printGreeting(i){
    return new Promise( (resolve) =>{
        setTimeout(function() {
            element.innerHTML = greetings[i];
            if(i == 4 ||  i == 5){
                element.style.fontSize = "2.5vw";
                if(window.innerWidth <= 600){
                    element.style.fontSize = "5.5vw";
                }else if(window.innerWidth <= 1400){
                    element.style.fontSize = "4.5vw";
                }
            }else{
                element.style.fontSize = defaultFontSize;
            }
        }, 2000/((i+1)*1.75));
        setTimeout(resolve, 2000/((i+1)*2));
    });
}

