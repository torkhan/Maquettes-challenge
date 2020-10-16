function updateTransition() {
    let e = document.querySelector(".iron1");

    if (e) {
        e.className = "iron";
    } else {
        e = document.querySelector(".iron");
        e.className = "iron1";
    }

    return e;
}

let intervalID = window.setInterval(updateTransition, 4000);