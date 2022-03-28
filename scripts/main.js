function myfunction(){
    var x = document.getElementById('nave')
    if (x.className === "none") {
        x.className += " responsive";
        

    } else {
      x.className = "none";
     
    }
}