const maxIntentos = 6;
let intento = 0;
var botonMensaje = document.querySelector("#boton-mensaje");
let estadoJuego = "iniciado";

function crearTablero(personaje){
    var pantalla = document.querySelector("#canvasGame");
    var pincel = pantalla.getContext("2d");
    let palabraSecreta = crearPalabraSecreta();
    
    mostrarhistoria();
    generarEscenario(pincel);
    generarEndiduraCerrada(pincel);
    crearTableroPalabra(palabraSecreta);
    iniciarJuego(palabraSecreta, personaje, pincel); 
    
}

function crearPalabraSecreta(){
    var palabraSecreta = [];
    var palabraRandom = palabras[generarNumeroRandomInt()].obtenerPalabra();
    palabraRandom = palabraRandom.replace(/ /g, "");

    for (let i = 0; i < palabraRandom.length; i++) {
        palabraSecreta.push(palabraRandom[i]);        
    }

    return palabraSecreta;
}

function generarNumeroRandomInt(){
    return Math.floor(Math.random() * (palabras.length - 0)) + 0;
}

function crearTableroPalabra(palabraSecreta){
    var tablero = document.querySelector("#tablero");
    var contenedorPalabra = document.createElement("div");

    tablero.appendChild(contenedorPalabra);
    contenedorPalabra.classList.add("contenedor-letra");

    for (let i = 0; i < palabraSecreta.length; i++) {
        var labelLetra = document.createElement("label");

        labelLetra.classList.add("label-letra");
        labelLetra.setAttribute("id", "letra" + i);
        contenedorPalabra.appendChild(labelLetra);
    }

}

let letrasPersionadas = [];
let letrasEncontradas = [];


function iniciarJuego(palabraSecreta, personaje, pincel){  

    addEventListener('keypress', (e) =>{
            
            if(!existeUnMensaje()){
                let letra = e.key.toUpperCase();
                let letraPosiciones = [];
                console.log(palabraSecreta);
                if (/^[A-Z]+$/.test(letra) && letraNoEsta(letrasPersionadas, letra) && letra != "ENTER"){ 
                    letrasPersionadas.push(letra);              
                    if(!letraNoEsta(palabraSecreta, letra) ){ 

                        letraPosiciones = buscarPosicionesLetra(palabraSecreta, letra); 

                        agregarLetrasEncontradas(buscarPosicionesLetra(palabraSecreta, letra).length, letra);
                        mostrarLetra(letra, letraPosiciones);                   

                        if(palabraSecreta.length === letrasEncontradas.length){
                            setTimeout(generarPantallaGanador, 1, personaje, pincel);
                            setTimeout(recargarPagina, 4000); 
                        }
                                    
                    }else{
                        intento++;
                        graficar(personaje, pincel, palabraSecreta);
                        mostrarLetraErronea(letra);
                    }
                    
                }else{
                    mostrarMensaje("Ya has provado la letra " + letra + " intenta con otra");
                }
            }              
                             
    });
}


function letraNoEsta(array, letra){
    let noEsta = true;

    array.forEach(elemento => {
        if( elemento === letra){
            noEsta = false;
        }
    });

    return noEsta;
}

function agregarLetrasEncontradas(cantidad, letra){

    for (let i = 0; i < cantidad; i++) {
        letrasEncontradas.push(letra);        
    }    
}

function mostrarLetraErronea(letra){
    var contenedorLetrasErroneas = document.querySelector("#contenedor-letras-erroneas");
    var labelLetraErronea = document.createElement("label");
    contenedorLetrasErroneas.setAttribute("id", "contenedor-letras-erroneas");
    labelLetraErronea.setAttribute("id", "label-letra-erronea");

    contenedorLetrasErroneas.appendChild(labelLetraErronea);
    labelLetraErronea.textContent = letra;
}

function mostrarLetra(letra, posiciones){

    for (let i = 0; i < posiciones.length; i++) {
        let labelLetra = document.querySelector("#letra"+ posiciones[i]);
        
        labelLetra.textContent = letra;
    }
}

function buscarPosicionesLetra(palabraSecreta, letra){
    var posiciones = [];

    for (let i = 0; i < palabraSecreta.length; i++) {
        if(palabraSecreta[i] === letra){
            posiciones.push(i);
        }        
    }

    return posiciones;
}

function recargarPaginaBotonMensaje(){
    var botonmensaje = document.querySelector("#boton-mensaje");
    botonmensaje.addEventListener('click', () => {
        window.location.reload();
    })
}

function recargarPagina(){
    window.location.reload();
}

function graficar(personaje, pincel, palabraSecreta) {
    let color = personaje.obtenerColor();
    let x = 200;
    let y = 200;

    switch (intento) {

        case 1:
        generarCuerda(x, y, pincel); 
        generarPiesFirmes(x, y, color, pincel);   
        break;

        case 2:
        generarCuerpo(x, y, color, pincel);
        break;

        case 3:
        generarBrazosDoblados(x, y, color, pincel);
        break;

        case 4:
        generarCabeza(x, y, color, pincel);
        break;

        case 5:            
        mostrarPalabra(palabraSecreta);          
        generarCuello(x, y, "#a38c79", pincel);
        setInterval(animacionMuertePersonaje, 40, pincel, personaje);
        setTimeout(mostrarMensaje, 2000, "Fin del juego");
        setTimeout(recargarPaginaBotonMensaje, 2000);  
        break;

        default:
        break;
    }    
}

function mostrarPalabra(palabraSecreta){
    for (let i = 0; i < palabraSecreta.length; i++) {
        if(document.querySelector("#letra" + i).textContent === ""){
            document.querySelector("#letra" + i).textContent = palabraSecreta[i];
            document.querySelector("#letra"+ i).style.color= "darkred";
        }
    }
     
}

function mostrarhistoria(){
    if(document.querySelector("#pantalla-mensaje") === null ){

        var body = document.querySelector("body");
        var pantalleNegro = document.createElement("div");
        var divConenedorHisotria = document.createElement("div");
        var labelHistoria = document.createElement("label");

        body.appendChild(pantalleNegro);
        pantalleNegro.appendChild(divConenedorHisotria);
        divConenedorHisotria.appendChild(labelHistoria);
        labelHistoria.textContent = personaje.obtenerHistoria();    
        
        pantalleNegro.setAttribute("id","pantalla-mensaje");
        divConenedorHisotria.classList.add("contenedor-historia");

        setTimeout(cerrarHisotria, 10000, pantalleNegro);
    }
}

function cerrarHisotria(pantalleNegro) {
    pantalleNegro.remove();
}

function existeUnMensaje(){
    let existe = false;

    if(document.querySelector("#pantalla-mensaje") != null){
        existe = true;
    }

    return existe;
}