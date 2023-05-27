function myFunction() {
    let myLinks = document.getElementById("myLinks");
    let closedNav = document.getElementById("closed-nav");

    if (myLinks.style.display === "block") {
        myLinks.style.display = "none";
        closedNav.style.display = "flex";
    }
    else {
        myLinks.style.display = "block";
        closedNav.style.display = "none";
    }

}