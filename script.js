//Carne - Adulto = 400g  (+6h - A=650g)
//Cerveja - 1200ml por pessoa (+6h - 2000ml)
//Refrigerante - 1000ml por pessoa (+6h - 1500ml)

//crianças = 0.5 pessoa

let inputAdults = document.getElementById("adult")
let inputKids = document.getElementById("kids")
let inputDuration = document.getElementById("duration")

let result = document.getElementById("result")

function calc() {

    console.log("calculando");

    let adults = inputAdults.value;
    let kids = inputKids.value;
    let during = inputDuration.value

    let qdtmeat = meatFP(during)*adults + (meatFP(during)/2 * kids);
    let qdtbeer = beerFP()*adults
    let qdtsoda = sodaFP()*adults + (sodaFP()/2 * kids)

    let meatV = Math.ceil(qdtmeat * 0.035);
    let beerV = Math.ceil(qdtbeer * 0.02);
    let sodaV = Math.ceil(qdtsoda * 0.0012);

    result.innerHTML = '<p class = "results">. '+ qdtmeat +'g de Carne (Em média R$'+ meatV+ ',00)</p>'
    result.innerHTML += '<p class = "results">. '+ qdtbeer +'ml de Cerveja (Em média R$'+ beerV+ ',00)</p>'
    result.innerHTML += '<p class = "results">. '+ qdtsoda +'ml de refrigerante (Em média R$'+ sodaV+ ',00)</p>'
    
}

function meatFP(during) {

    if(during >= 6){
        return 650;
    }

    else{
        return 400;
    }

}

function beerFP(during) {

    if(during >= 6){
        return 1200;
    }

    else{
        return 2000;
    }

}

function sodaFP(during) {

    if(during >= 6){
        return 1000;
    }

    else{
        return 1500;
    }

}