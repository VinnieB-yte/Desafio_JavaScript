
//car
let carArr = [];

class Car {

    constructor(nome, preco, alturaCacamba, alturaVeiculo, alturaSolo, capacidadeCarga, motor, potencia, volumeCacamba, roda, image){

    this.image = image;
    this.nome = nome;
    this.alturaCacamba = alturaCacamba;
    this.alturaVeiculo = alturaVeiculo;
    this.alturaSolo = alturaSolo;
    this.capacidadeCarga = capacidadeCarga;
    this.motor = motor;
    this.potencia = potencia;
    this.volumeCacamba = volumeCacamba;
    this.roda = roda;
    this.preco = preco;
    }
} 


// search on array if exist carClass returning 1 if not return -1
function GetCarArrPosition(arr, carClass) {
    for(let i = 0; i < arr.length; i++){
        if(arr[i].nome  === carClass.nome)
            return i;
    }
    return -1;
}

function SetCarToCompare(el, carClass) {
    if(carClass instanceof Car){       
        if(el.checked){
                
            if (carArr.length < 2){
                carArr.push (carClass);
        } else {     
            alert("Você já selecionou 2 veículos. Desmarque uma das opções antes de escolher outra.");
            el.checked = false;
        }
        }  else {
            let posicao = GetCarArrPosition(carArr, carClass);
            if(posicao!== -1){
              carArr.splice(posicao,1);
            }
        }
        } else {
        throw "You need set a Car Class";
    }
} 


function ShowCompare() {

    if(carArr.length < 2) {
        alert("Precisa marcar 2 carros para apresentar a comparação.");
        return;
    }
    UpdateCompareTable();
    document.getElementById("compare").style.display = "block";
}

function HideCompare(){
    document.getElementById("compare").style.display = "none"; 
}

function UpdateCompareTable() {
    carArr.forEach(function(carro, index){
        document.getElementById(`compare_image_${index}`).innerHTML = `<img src="${carro.image}" width="80">`;
        document.getElementById(`compare_modelo_${index}`).innerHTML = carro.nome;
        document.getElementById(`compare_alturacacamba_${index}`).innerHTML = carro.alturaCacamba;
        document.getElementById(`compare_alturaveiculo_${index}`).innerHTML = carro.alturaVeiculo;
        document.getElementById(`compare_alturasolo_${index}`).innerHTML = carro.alturaSolo;
        document.getElementById(`compare_capacidadecarga_${index}`).innerHTML = carro.capacidadeCarga;
        document.getElementById(`compare_motor_${index}`).innerHTML = carro.motor;
        document.getElementById(`compare_potencia_${index}`).innerHTML = carro.potencia;
        document.getElementById(`compare_volumecacamba_${index}`).innerHTML = carro.volumeCacamba;
        document.getElementById(`compare_roda_${index}`).innerHTML = carro.roda;
        document.getElementById(`compare_preco_${index}`).innerHTML = `R$ ${carro.preco.toLocaleString('pt-BR')}`;
    });
}