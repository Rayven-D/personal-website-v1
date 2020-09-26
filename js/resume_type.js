function browser_function(){
    var y = document.getElementById("resume_browser");
    if(y.style.display === "none"){
        document.getElementById("resume_pdf").style.display = "none";
        y.style.display = "block";
        document.getElementById("browser").style.color = "purple";
        change_text_color();
    }
}
function change_text_color(){
    var browser = document.getElementById("resume_browser");
    var pdf = document.getElementById("resume_pdf");
    if(browser.style.display === "block"){
        document.getElementById("browser").style.color = "purple";
        document.getElementById("pdf").style.color = "black";
    }else{
        document.getElementById("pdf").style.color = "purple";
        document.getElementById("browser").style.color = "black";
    }
}
function pdf_function(){
    var x = document.getElementById("resume_pdf");

    if(x.style.display === "none"){
        document.getElementById("resume_browser").style.display = "none";
        x.style.display = "block";
        change_text_color();
    }
}