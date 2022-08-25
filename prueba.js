function funcion1() {
    let x = prompt("Digite numero 1");
    let y = prompt("Digite numero 2");
    let z = parseInt(x)+parseInt(y);
    document.getElementById("prueba").innerHTML = "El valor de z es:"+z;
}