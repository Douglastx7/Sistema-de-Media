// ========================================================== FUNÇÕES ATIVAR CORES

function CorMediaAprovado() {
    mediaColor = document.querySelector(".MEDIA");
    resultadoColor = document.querySelector(".RESULTADO");
    RemoverCorMediaAprovado();
    mediaColor.classList.add("activeMediaAprovado");
    resultadoColor.classList.add("activeResultadoAprovado");
}

function CorMediaReprovado() {
    mediaColor = document.querySelector(".MEDIA");
    resultadoColor = document.querySelector(".RESULTADO");
    RemoverCorMediaReprovado();
    mediaColor.classList.add("activeMediaReprovado");
    resultadoColor.classList.add("activeResultadoReprovado");
}

function CorMediaRecuperacao() {
    mediaColor = document.querySelector(".MEDIA");
    resultadoColor = document.querySelector(".RESULTADO");
    RemoverCorMediaRecuperacao();
    mediaColor.classList.add("activeMediaRecuperacao");
    resultadoColor.classList.add("activeResultadoRecuperacao");
}

// ======================================================== FUNÇÃO REMOVER CORES
function RemoverCorMediaAprovado() {
    mediaColor.classList.remove("activeMediaReprovado");
    mediaColor.classList.remove("activeMediaRecuperacao");
    resultadoColor.classList.remove("activeResultadoReprovado");
    resultadoColor.classList.remove("activeResultadoRecuperacao");
}

function RemoverCorMediaReprovado() {
    mediaColor.classList.remove("activeMediaAprovado");
    mediaColor.classList.remove("activeMediaRecuperacao");
    resultadoColor.classList.remove("activeResultadoAprovado");
    resultadoColor.classList.remove("activeResultadoRecuperacao");
}

function RemoverCorMediaRecuperacao() {
    mediaColor.classList.remove("activeMediaReprovado");
    mediaColor.classList.remove("activeMediaAprovado");
    resultadoColor.classList.remove("activeResultadoAprovado");
    resultadoColor.classList.remove("activeResultadoReprovado");
}

// =========================================== FUNÇÃO COR VEMELHO  NOS 15 INPUTs

let bordaVermelha;

function CorInputs() {

    for (let i = 0; i < 5; i++) {
        if (document.getElementById("peso" + i).value == "") {
            bordaVermelha = document.getElementById("peso" + i);
            bordaVermelha.classList.add("AtivarBordaVermelha");
        } else {
            bordaVermelha = document.getElementById("peso" + i);
            bordaVermelha.classList.remove("AtivarBordaVermelha");
        }

        if (document.getElementById("nota" + i).value == "") {
            bordaVermelha = document.getElementById("nota" + i);
            bordaVermelha.classList.add("AtivarBordaVermelha");
        } else {
            bordaVermelha = document.getElementById("nota" + i);
            bordaVermelha.classList.remove("AtivarBordaVermelha");
        }

        if (document.getElementById("ATV" + i).value == "") {
            bordaVermelha = document.getElementById("ATV" + i);
            bordaVermelha.classList.add("AtivarBordaVermelha");
        } else {
            bordaVermelha = document.getElementById("ATV" + i);
            bordaVermelha.classList.remove("AtivarBordaVermelha");
        }

        // ----------------------------------------------------------------

        if (nota[i] < 0 || nota[i] > 10) {
            bordaVermelha = document.getElementById("nota" + i);
            bordaVermelha.classList.add("AtivarBordaVermelha");
        }

        if (peso[i] < 1 || peso[i] > 5) {
            bordaVermelha = document.getElementById("peso" + i);
            bordaVermelha.classList.add("AtivarBordaVermelha");
        }


    }
}