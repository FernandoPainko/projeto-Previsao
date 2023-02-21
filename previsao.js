// VARIÁVEIS => Um espaço da memória do computador que guardamos algo (um numero, uma letra, um texto, uma imagem)
// FUNÇÃO => Um trecho de código que só é executado quando é chamado


let chave = "cebcd482eda57fa9a6714c1c2ba91885"


function pesquisa() {
    let cidade = document.querySelector(".digitarcidade").value;

    buscarcidade(cidade)
}

async function buscarcidade(cidade) {
    let dados = await fetch("https://api.openweathermap.org/data/2.5/weather?q="
        + cidade + "&appid=" + chave + "&lang=pt_br" + "&units=metric")

        .then(resposta => resposta.json())   

    poenatela(dados)
    console.log(dados)
}
function poenatela(dados) {
    document.querySelector(".cidade").innerHTML = "Tempo em " + dados.name
    document.querySelector(".temp").innerHTML = "temperatura " + Math.floor(dados.main.temp) + "ºC"
    document.querySelector(".umid").innerHTML = "Umidade " + dados.main.humidity + "%"
    document.querySelector(".maxmin").innerHTML = "Temp Max.  " + Math.floor(dados.main.temp_max) + "  Temp Min.  " + Math.floor(dados.main.temp_min)
    document.querySelector(".cond").innerHTML = dados.weather[0].description
    document.querySelector(".icone").src = "https://openweathermap.org/img/wn/" + dados.weather[0].icon + ".png"

    
}


