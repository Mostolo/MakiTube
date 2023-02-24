var Click = 0

function ToHome() {
    var A = document.getElementById("betch")
    var B = document.getElementById("wow")
    var C = document.getElementById("TextInutile")

    {
        A.style.display = "block"
        B.style.display = "none"
        C.style.display = "none"
    }
}

function ToVideo() {
    var A = document.getElementById("betch")
    var B = document.getElementById("wow")
    var C = document.getElementById("TextInutile")

    {
        B.style.display = "block"
        A.style.display = "none"
        C.style.display = "none"

    }
}

function ToInutile () {
    var A = document.getElementById("betch")
    var B = document.getElementById("wow")
    var C = document.getElementById("TextInutile")

    {
        C.style.display = "block"
        B.style.display = "none"
        A.style.display = "none"
        Click = Click + 1
    }
}

function aggiornapunti () {
    var A = document.getElementById("punti")

    {
        A.innerHTML = Click
    }
}

function TextInutile () {
    var T = document.getElementById("TextInutile")

    if (Click == 5) {
        T.innerHTML = "yup, sono inutile..."
    } if (Click == 10) {
        T.innerHTML = "è inutile che continui,<br>non succederà nulla"
    } if (Click == 13) {
        T.innerHTML = "Hey, smettila"
    } if (Click == 14) {
        T.innerHTML = "Basta"
    } if (Click == 15) {
        T.innerHTML = "Basta<br>Basta"
    } if (Click == 16) {
        T.innerHTML = "Basta<br>Basta<br>Basta<br>Basta"
    } if (Click == 17) {
        T.innerHTML = "Basta Basta<br>Basta Basta<br>Basta Basta<br>Basta Basta"
    } if (Click == 18) {
        T.innerHTML = "Basta Basta Basta Basta<br>Basta Basta Basta Basta<br>Basta Basta Basta Basta<br>Basta Basta Basta Basta"
    } if (Click == 19) {
        T.innerHTML = "Basta Basta Basta Basta Basta<br>Basta Basta Basta Basta Basta<br>Basta Basta Basta Basta Basta<br>Basta Basta Basta Basta Basta<br>Basta Basta Basta Basta Basta<br>Basta Basta Basta Basta Basta<br>Basta Basta Basta Basta Basta<br>"
    } if (Click == 23) {
        T.innerHTML = "OK!"
    } if (Click == 26) {
        T.innerHTML = "mi hai convinto!<br>Vediamo se riesco..."
    } if (Click == 30) {
        T.innerHTML = "vai, divertiti<br><a href='//www.youtube.com/watch?v=dQw4w9WgXcQ'><3</a>"
    }

}
