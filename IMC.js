
const calcular = document.getElementById ('calcular');

calcular.addEventListener('click', imc);

function imc (){
    const Nome = document.getElementById ('nome').value;
    const Altura = document.getElementById ('altura').value;
    const Peso = document.getElementById ('peso').value;
    const Resultado = document.getElementById ('resultado');

    if (Nome !== '' && Altura !== '' && Peso !== '') {//OPERAÇÃO CALCULADORA IMC
    
    const valorIMC = (Peso / (Altura * Altura)).toFixed (2);

    let classificacao = "";

    if (valorIMC < 18.5) {  //IMC ABAIXO DO PESO
    classificacao = 'abaixo do Peso !!'

    }else if (valorIMC < 25)  {  //IMC PESO IDEAL
        classificacao = ' com Peso Ideal. Parabens !!'

    }else if (valorIMC < 30)  {  //IMC PESO ACIMA
        classificacao = ' levemente acima do Peso !!'

    }else if (valorIMC < 35)  {  //IMC PESO MUITO ACIMA
        classificacao = ' muito acima do Peso. Cuidado !!'
    }   
    Resultado.textContent = `${Nome} Você está ${classificacao}`; //Resultado do terminal
        
   } else {
    Resultado.textContent = 'Preencha todos os campos'
}

}










//if (Altura !== '')
//alert ('Favor digitar sua Altura no campo considerado!')

//if (Peso !== '')
//alert ('Favor digitar seu Peso no campo considerado!') 