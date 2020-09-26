$("#home_button").click(function(){
    event.preventDefault();
    

});
$("#resume_button").click( function(){
    event.preventDefault();

});

function starting(){
    if(localStorage.length === 0){
        var path = window.location.pathname;
        var page = path.split("/").pop;
        localStorage.setItem("currPage", page);
    }
}
