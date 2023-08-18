
function verNum() {
    let num = document.getElementById('fnum').value;

    if (num%2 == 0) {
        document.getElementById('result').innerHTML = "Resultado: " + num +" É par"

    } else {
        document.getElementById('result').innerHTML = "Resultado: " + num +" Não é par"

    }
}

function alerta() {
    alert(document.getElementById("meu-input").value);

}

function dataHora() {
    const data = new Date()
    
    const dia = data.getDate()
    const mes = data.getMonth()
    const ano = data.getFullYear()

    document.getElementById('demo').innerHTML = `Hoje é ${dia} / ${mes} / ${ano}`
}