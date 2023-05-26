//Script para Formatar Numero de Celular

let variable = '(21)981117731';
function run(inputPhone) {
    try {
        inputPhone = cleanInput(inputPhone)
        const regexCellphone = /^(55)?(0)?(\d{2}(9?[6-9]\d{7}))$/g
        
        return inputPhone.match(regexCellphone) ? mountFormattedPhone(inputPhone) : "error";
    
    } catch (e) {
        return "error";
    }
}

function cleanInput(input){
    input = input.replace(/\D/g, "");
    return input
}

function mountFormattedPhone(inputPhone){
    inputPhone = inputPhone.length > 11 ? cutPrefixeNumber(inputPhone) : inputPhone;
    inputPhone = inputPhone.length == 10 ? `${inputPhone.substring(0,2)}9${inputPhone.substring(2)}` : inputPhone;

    let formattedPhone = `(${inputPhone.substring(0,2)}) ${inputPhone.substring(2,7)}-${inputPhone.substring(7)}`;
    
    return {
        cellPhone: inputPhone,
        formattedPhone: formattedPhone
    }
}

function cutPrefixeNumber(inputPhone){
    const indexCut = 11 - inputPhone.length
    
    inputPhone = reverseNumber(inputPhone)
    inputPhone = inputPhone.slice(0,indexCut)

    return reverseNumber(inputPhone)
}

function reverseNumber(str){
    str = str.split('').reverse('').join('')
    return str
}

console.log(run(variable));