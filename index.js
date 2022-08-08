class Tarjeta {
    constructor(id, marcaDeTarjeta, interes) {
        this.id = id;
        this.marcaDeTarjeta = marcaDeTarjeta;
        this.interes = interes;
    }
}

let tarjetas = [];
let tarjetaVisa = new Tarjeta(1, "Visa", 1.34);
let tarjetaMaster = new Tarjeta(2, "Master", 1.45);
let tarjetaAmex = new Tarjeta(3, "AmericanExpress", 2.45);

tarjetas.push(tarjetaVisa);
tarjetas.push(tarjetaMaster);
tarjetas.push(tarjetaAmex);

// let continuar = false;

function generarOptionsForTarjeta() {
    tarjetas.forEach(tarjeta => {
        let tarjetaSelect = document.getElementById("tarjeta"); 
        let optionTarjetas = `<option value=${tarjeta.id}>${tarjeta.marcaDeTarjeta}</option>`
        tarjetaSelect.innerHTML += optionTarjetas;
    });
}

generarOptionsForTarjeta();


// Al dar click en simular, deberia mostrar un alert con el resultdado + guardar el resultado/tarjeta usada en el localStorage
let form = document.getElementById("form");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    const montoIngresado = document.getElementById("monto").value;
    const cuotasIngresadas = document.getElementById("cuotas").value;
    const tarjetaIngresada = document.getElementById("tarjeta").value;
    let tarjetaSeleccionada = tarjetas.find(tarjeta => tarjeta.id == tarjetaIngresada);
    let resultado = montoIngresado / cuotasIngresadas * tarjetaSeleccionada.interes;
    alert("El valor de la cuota es: " + resultado)
    let history = document.getElementById("lastSimulation");
    localStorage.setItem("ultimoResultado", resultado);
    localStorage.setItem("tarjetaSeleccionada", JSON.parse(tarjetaSeleccionada));
    // Al dar click en 'Ver Ultima Simulacion', deberia mostrar un alert con el ultimo resultado generado
    history.addEventListener("click", () =>{
        if ("ultimoResultado"){
            alert("El ultimo resultado generado fue: " + localStorage.getItem("ultimoResultado"))
        }else{
            alert("No hay ningun resultado generado") // Error: Al borrar la data guardada en el localStorage (con localStorage.clear o .removeitem), no bota este alert como debería.
        }
    });
});


