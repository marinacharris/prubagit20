const user = "MarinaCh"
const pw = 1234
function verificar(){
    let usuario = document.getElementById("nombre").value
    let clave = document.getElementById("clave").value
    if (user == usuario && pw == clave){
        alert("Login exitoso")
    }else{
        alert("Verifique los datos ingresados")
    }

}