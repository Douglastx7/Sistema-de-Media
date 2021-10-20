// ========================================================  ARMAZENAMENTOS DE DADOS
let peso = [];
let nota = [];
let soma = [];
let media = 0;
let totalPeso = 0;
let totalSoma = 0;
let mediaColor;
let resultadoColor;
let verificandoTodos;
let verificandoPeso;
let verificandoNota;

// ======================================================== FUNÇÃO CHAMAR OS INPUTs E GERAR MÉDIA
function GerarMedia() {
    for (let i = 0; i < 5; i++) {
        peso.push(document.getElementById("peso" + i).value);
        nota.push(document.getElementById("nota" + i).value);
    }
    CorInputs();
    VerificacoesDeInputs();
}

// ======================================================== FUNÇÃO DE VERIFICAÇOES

function VerificacoesDeInputs() {
    // se os 15 inputs estão vazio
    for (let i = 0; i < 5; i++) {
        if (
            document.getElementById("peso" + i).value == "" ||
            document.getElementById("nota" + i).value == "" ||
            document.getElementById("ATV" + i).value == ""
        ) {
            verificandoTodos = document.getElementById("verificar");
            verificandoTodos.innerHTML = "Preencha todos os campos!";

            LimparCaches();
            limparInputsResultado();
            return;
        }
    }

    for (let i = 0; i < 5; i++) {
        // inputs pesos
        if (peso[i] < 1 || peso[i] > 5) {
            verificandoPeso = document.getElementById("verificar");
            verificandoPeso.innerHTML = "Os pesos só podem receber valor de 1 a 5 !";

            LimparCaches();
            limparInputsResultado();
            RemoverCorMediaAprovado();
            RemoverCorMediaReprovado();
            RemoverCorMediaRecuperacao();
            return;
        } else {
            verificandoPeso = document.getElementById("verificar");
            verificandoPeso.innerHTML = "";
        }
    }


    for (let i = 0; i < 5; i++) {
        // inputs notas
        if (nota[i] < 0 || nota[i] > 10) {
            verificandoNota = document.getElementById("verificar");
            verificandoNota.innerHTML = "As notas só pedem receber valor de 0 a 10 !";

            LimparCaches();
            limparInputsResultado();
            RemoverCorMediaAprovado();
            RemoverCorMediaReprovado();
            RemoverCorMediaRecuperacao();
            return;
        } else {
            verificandoNota = document.getElementById("verificar");
            verificandoNota.innerHTML = "";
        }
    }



    Calculos();

    // Resultado
    if (media >= 7) {
        CorMediaAprovado();
        document.getElementById("resultado").value = "Aprovado!";
    } else if (media < 5) {
        CorMediaReprovado();
        document.getElementById("resultado").value = "Reprovado";
    } else if (media >= 5 && media < 7) {
        CorMediaRecuperacao();
        document.getElementById("resultado").value = "Recuperação";
    }

    LimparCaches();
}

// =================================================================== FUNÇÃO CALCULAR
function Calculos() {
    for (let i = 0; i < 5; i++) {
        soma.push(peso[i] * nota[i]);
        totalPeso = Number(totalPeso) + Number(peso[i]);
        totalSoma = Number(totalSoma) + Number(soma[i]);
    }
    media = totalSoma / totalPeso;

    document.getElementById("media").value = media.toFixed(2);
}

// #####################################################################  LIPAR CAMPOS e CACHE !
function LimparCampos() {
    LimparCaches();
    limparInputsResultado();

    RemoverCorMediaAprovado();
    RemoverCorMediaReprovado();
    RemoverCorMediaRecuperacao();

    for (let i = 0; i < 5; i++) {
        document.getElementById("peso" + i).value = "";
        document.getElementById("nota" + i).value = "";
        document.getElementById("ATV" + i).value = "";
    }
}

// zerar dados para fazer alterações de um unico input sem ter que limpar todo os campos.
function LimparCaches() {
    peso = [];
    nota = [];
    soma = [];
    media = 0;
    totalPeso = 0;
    totalSoma = 0;
}

// limpar Resultado
function limparInputsResultado() {
    document.getElementById("resultado").value = "";
    document.getElementById("media").value = "";
    LimparCaches();
}