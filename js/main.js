window.onchange = function somar(){
    var x = parseFloat(document.getElementById('n1').value);
    var y = parseFloat(document.getElementById('n2').value);
    result = document.getElementById('resultado-soma').innerHTML = x + y;

    if (this.isNaN(result)) {
        return document.getElementById('resultado-soma').innerHTML = "Falta digitar outro número!";
    } else {
        return result;
    }
}