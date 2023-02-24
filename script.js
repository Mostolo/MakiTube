function ToHome() {
    var A = document.getElementById("betch")
    var B = document.getElementById("wow")

    {
        A.style.display = "block"
        B.style.display = "none"
    }
}

function ToVideo() {
    var A = document.getElementById("betch")
    var B = document.getElementById("wow")

    {
        B.style.display = "block"
        A.style.display = "none"
    }
}

/* vorrei fare: clicchi il tasto inutile tondo e il cubo centrale inizia a parlare,
tipo "yup, sono inutile" al secondo click "hey, smettila"
al terzo "è inutile che continui, non succederà nulla"
al quarto "..." al decimo "OK! BASTA! mi hai convinto..."
undicesimo "sono fuori allenamento ma vediamo cosa posso fare..."
e al dodicesimo ti presenta qualcosa, tipo dito medio o nyan cat, o chiude la pagina, carina questa */