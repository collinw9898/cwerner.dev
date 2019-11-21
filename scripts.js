function toggleAbout() {
    let home = document.getElementById("home");
    let about = document.getElementById("about");

    if (about.style.display="none") {
        about.style.display = "block";
        home.style.display = "none";
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