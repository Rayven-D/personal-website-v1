function scrollFunction(elem){
    var element = document.getElementById(elem);
    element.scrollIntoView({behavior: 'smooth'});
}

function scrollToTopFunc(top_elem){
    var element = document.getElementById(top_elem);
    element.scrollIntoView({behavior: 'smooth', block: 'end'});
}