function navbarFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

function blogDropdown(){
    document.getElementById('blog-dropdown-content').
      classList.toggle('show');
}