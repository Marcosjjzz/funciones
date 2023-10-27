const turnoPantalla = document.getElementById("numeroTurno") as HTMLHeadingElement;
const siguiente = document.getElementById("siguiente") as HTMLButtonElement;
const anterior = document.getElementById("anterior") as HTMLButtonElement;
const reset = document.getElementById("reset") as HTMLButtonElement;

let turno = 0;

function actualizarTurno() {
    const turno2 = turno.toString()
    
    turnoPantalla.textContent = turno2.padStart(2, '0')
    
}

siguiente.addEventListener("click", function () {
    turno = turno + 1;
    actualizarTurno();
});

anterior.addEventListener("click", function () {
    if (turno > 0) {
         turno = turno - 1;
        actualizarTurno();
    }
});

reset.addEventListener("click", function () {
    turno = 0;
    actualizarTurno();
});


const confirmar = document.getElementById("confirmar") as HTMLButtonElement;

confirmar.addEventListener("click", function () {
    const cambio = (document.getElementById("cambio") as HTMLInputElement).valueAsNumber;
    if (cambio !== null && cambio !== undefined) {
    
        turno = cambio
        actualizarTurno();
    }
})