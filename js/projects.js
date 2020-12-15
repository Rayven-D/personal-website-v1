window.onload = function(){
    document.getElementById('chk').setAttribute('onclick', 'menuChecked()');
}

function menuChecked(){
    var isChecked = document.getElementById('chk').checked;
    var divs = document.getElementsByClassName('container');
    var d;
    if(window.innerWidth <= 600){
        if(isChecked == true){
            for( d of divs){
                d.style.display = 'none';
            }
        }
        else{

            for( d of divs){
                d.style.display = 'block';
            }
        }
    }else if( window.innerWidth <= 1400){
        var overlay = document.getElementsByClassName("overlay_text");
        if(isChecked == true){
            for( d of divs){
                d.style.zIndex = '-1';
            }
            for( d of overlay){
                d.style.zIndex = '-1';
                
            }
        }
        else{

            for( d of divs){
                d.style.zIndex = '0';    
            }
            for(d of overlay){
                d.style.zIndex = '0';

            }
        }
    }
}