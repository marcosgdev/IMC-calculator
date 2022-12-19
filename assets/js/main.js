//Captura do formulário
const form = document.querySelector('#form');

//previniu o comportamento default do formulário
form.addEventListener('submit', function(e) {
    e.preventDefault();

//capturou os dados do input e converteu para numbers
    const inputPeso = e.target.querySelector('#peso');
    const inputAltura = e.target.querySelector('#altura');
    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

//condicionais de validade de valor
    if (!peso) {
        setResultado('Peso inválido!', false);
        return
    }

    if (!altura) {
        setResultado('Altura inválida!', false);
        return
    }

// imc e set de resultado

    const imc = getImc (peso, altura);
    const nivelImc = getNivelImc(imc);
    const msg =`Seu IMC é ${imc} (${nivelImc}).`;
    setResultado(msg, true);
});


//lista de valores referéncia para o imc
function getNivelImc (imc) {
    const nivel = ['Abaixo do peso', 'Peso Normal', 'Sobrepeso',
    'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3']

    if (imc >= 39.9) return nivel [5];
    if (imc >= 34.9) return nivel [4];
    if (imc >= 29.9) return nivel [3];
    if (imc >= 24.9) return nivel [2];
    if (imc >= 18.5) return nivel [1];
    if (imc < 18.5) return nivel [0];
    
}

// cálculo do imc e parágrafo no html
function getImc (peso, altura) {
    const imc = peso / altura ** 2;
    return imc.toFixed(2);
}

function criaP (){
    const p = document.createElement('p');
    return p;
}

//função para setar resultado
function setResultado (msg, isValid) {
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML ='';
    
    const p = criaP();
    
    if (isValid) { 
        p.classList.add('paragrafo-resultado');
    } else {
        p.classList.add('bad');
    }


    p.innerHTML = msg;
    resultado.appendChild(p);
}

