//Algoritmo para pegar os dois menores numeros de uma lista

//MINHA SOLUÇÃO

const numeros = [5, 7, 2, 4, 6, 9,]

const doisMenores = listaNum => {
    let menor = listaNum[0]
    for(let i = 1; i < listaNum.length; i++){
        if(listaNum[i] < menor) menor = listaNum[i] 
    }

    let menor2 = listaNum[0]
    for(let i = 1; i < listaNum.length; i++){
        if(listaNum[i] === menor) continue
        if(listaNum[i] < menor2) menor2 = listaNum[i] 
    }

    const novaLista = [menor, menor2]
    return novaLista
}
console.log(doisMenores(numeros));

// SOLUÇÃO DO CHAT GPT

const numeros2 = [7, 5, 3, 1, 12, 9,]

const doisMenores2 = listaNum => {
    if(listaNum.length < 2 ) return 'A lista deve conter pelo menos 2 numeros'

    listaNum.sort((a, b) => a - b)
    
    const menores = listaNum.slice(0, 2)
    return menores
}

console.log(doisMenores2(numeros2));
