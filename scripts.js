function toggleAbout() {
    let home = document.getElementById("home");
    let about = document.getElementById("about");

    if (about.style.display="none") {
        about.style.display = "block";
        home.style.display = "none";
    }

    else if (home.style.display = "none") {
        about.style.display = "none";
        home.style.display = "block"; 
    }
}

function back() {
    let home = document.getElementById("home");
    let about = document.getElementById("about"); 

    if (about.style.display="none") {
        about.style.display = "none";
        home.style.display = "block";
    }
}