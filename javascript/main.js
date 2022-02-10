let personaje = new Personaje(localStorage.getItem("nombre") || 'Sir Francis Drake',localStorage.getItem("color") || '#ff8c00',localStorage.getItem("historia") || "Sir Francis Drake es un navegante y explorador inglés que hostigó las colonias y los buques españoles como corsario al servicio de la reina Isabel I. Ingresó muy joven en la marina y se adiestró con el capitán John Hawkins. En 1572 dirigió una expedición contra los puertos españoles del Caribe; en este viaje, durante el cual divisó por primera vez el océano Pacífico, saqueó el puerto de Nombre de Dios, en Panamá, y la ciudad de Cartagena de Indias, en Colombia, y regresó a su patria con un cargamento de plata española. El boludo fue atrapado en un prostíbulo y solo una palabra lo puede salvar. ¿Cual será ?",0);
let palabras = [];
var botonPlay = document.querySelector("#botonPlay");
var color = document.querySelector("#colorPicker");
var inputAgregrar = document.querySelector("#input-palabra");


cargarPalabras();


color.onchange = function(){
    var pantalla = document.querySelector("#canvasPer");
    var pincel = pantalla.getContext("2d");
    var botonColor = document.querySelector("#colorPicker");

    limpiarPantalla(pincel);
    generarPersonaje(personaje, pincel, color.value);
    botonColor.style.backgroundColor = color.value;

}

inputAgregrar.onkeyup = function(){
    inputAgregrar.value = normalize(inputAgregrar.value).toUpperCase();

    if(!/^[a-zA-Z]+$/.test(inputAgregrar.value)){
        inputAgregrar.value = inputAgregrar.value.substr(0, inputAgregrar.value.length - 1);
    }
}

const botonAgregar = document.querySelector("#boton-agregar");
botonAgregar.addEventListener('click', () =>{
    var palabra = document.querySelector("#input-palabra").value;
    if(palabra === ""){
        mostrarMensaje("La Palabra esta vacia");
    }else{
        palabras.push(new Palabra(palabra));
        inputAgregrar.value = "";
    }    
});

const botonPersonalizar = document.querySelector("#boton-personalizar");
botonPersonalizar.addEventListener('click', () => {
    var pantalla = document.querySelector("#canvasPer");
    var pincel = pantalla.getContext("2d");

    mostrarPersonalizacion();
    generarPersonaje(personaje, pincel, personaje.obtenerColor());

});

var botonGuardar = document.querySelector("#boton-guardar");

var botonAtras = document.querySelector("#boton-atras");
botonAtras.onclick = function(){
    mostrarInicio();
}

var botonJugar = document.querySelector("#botonPlay");
botonJugar.onclick = function(){
    mostrarJuego();    
    crearTablero(personaje);
}

function mostrarInicio(){
    var inicio = document.querySelector("#inicio");
    var personalizacion = document.querySelector("#personalizacion");

    inicio.classList.remove("oculto");
    inicio.classList.add("activo");
    personalizacion.classList.remove("activo");
    personalizacion.classList.add("oculto");
}

function mostrarJuego(){
    var inicio = document.querySelector("#inicio");
    var juego = document.querySelector("#juego");

    juego.classList.remove("oculto");
    juego.classList.add("activo");
    inicio.classList.remove("activo");
    inicio.classList.add("oculto");
}

function mostrarPersonalizacion(){
    var inicio = document.querySelector("#inicio");
    var personalizacion = document.querySelector("#personalizacion");
    var botonColor = document.querySelector("#colorPicker");

    personalizacion.classList.remove("oculto");
    personalizacion.classList.add("activo");
    inicio.classList.remove("activo");
    inicio.classList.add("oculto");
    color.value = personaje.obtenerColor();
    botonColor.style.backgroundColor = personaje.obtenerColor();

}

function cargarPalabras(){
    let agregar =   [ "AZAFRAN", "ANIS", "AJO", "CANELA", "CURRY", "VAINILLA", "MENTA", "NUEZ", "MOSCADA", "LAUREL", "CILANTRO", "CURCUMA", "COMINO", "PIMENTON", "JENGIBRE",
                      "EL PADRINO", "EL MAGO DE OZ", "CADENA PERPETUA", "UNA ODISEA DEL ESPACIO", "STAR WARS", "FORREST GUMP", "BACK TO THE FUTURE", "TIBURON", "BLADE RUNNER", "AMERICAN PIE", "FAST AND FURIOUS", "MATRIX", "TOY STORY", "TITANIC",
                      "HAMBURGUESA", "PIZZA", "SUSHI", "PAELLA", "FONDUE", "BURRITO", "CEVICHE", "ASADO", "LOCRO", "SORRENTINOS", "MATAMBRE", "EMPANADAS", "MILANESA A LA NAPOLITANA",
                      "ITALIA", "NUEVA ZELANDA", "ISLANDIA", "ARGENTINA", "ESPANA", "BRAZIL", "SUIZA", "ESTADOS UNIDOS", "MEXICO", "GRECIA", "INDONESIA", "SUDAFRICA", "FRANCIA", "CHINA",
                      "ROMA", "KIOTO", "PARIS", "PRAGA", "SEVILLA", "LONDRES", "PETRA", "OIA", "NUEVA YORK", "SIDNEY", "VENECIA", "BARCELONA", "CIUDAD DEL CABO", "SAN FRANCISCO", "ESTAMBUL",
                      "JAVASCRIPT", "JAVA", "PHYTON", "RUBY", "PHP", "CSS", "C", "FORTRAN", "COBOL", "SQL", "VISUAL BASIC", "ASSEMBLER",
                      "TETRIS", "HALF LIFE", "COUNTER STRIKE", "GRAND THEFT AUTO", "BULLY", "SUPER MARIO", "THE LEGEND OF ZELDA", "THE LAST OF US", "PORTAL", "GOD OF WAR", "BIOSHOCK", "AGE OF EMPIRES", "LEAGUE OF LEGENDS"
                    ];

    agregar.forEach(elemento => {
        palabras.push(new Palabra(elemento));
    });
}

var normalize = (function normalize() {
    var from = "ÃÀÁÄÂÈÉËÊÌÍÏÎÒÓÖÔÙÚÜÛãàáäâèéëêìíïîòóöôùúüûÑñÇç", 
        to   = "AAAAAEEEEIIIIOOOOUUUUaaaaaeeeeiiiioooouuuunncc",
        mapping = {};
   
    for(var i = 0, j = from.length; i < j; i++ )
        mapping[ from.charAt( i ) ] = to.charAt( i );
   
    return function( str ) {
        var ret = [];
        for( var i = 0, j = str.length; i < j; i++ ) {
            var c = str.charAt( i );
            if( mapping.hasOwnProperty( str.charAt( i ) ) )
                ret.push( mapping[ c ] );
            else
                ret.push( c );
        }      
        return ret.join( '' );
    }
   
  })();

function mostrarMensaje(mensaje){      
    if(document.querySelector("#pantalla-mensaje") === null ){

        var body = document.querySelector("body");
        var pantalleNegro = document.createElement("div");
        var divMensaje = document.createElement("div");
        var labelMensaje = document.createElement("label");
        var botonMensaje = document.createElement("button");
        var linea = document.createElement("hr");

        body.appendChild(pantalleNegro);
        pantalleNegro.appendChild(divMensaje);
        divMensaje.appendChild(labelMensaje);
        divMensaje.appendChild(linea);
        divMensaje.appendChild(botonMensaje);

        botonMensaje.textContent = "OK";
        labelMensaje.textContent = mensaje;
        
        pantalleNegro.setAttribute("id","pantalla-mensaje");
        divMensaje.classList.add("contenedor-mensaje");
        botonMensaje.classList.add("boton");
        botonMensaje.setAttribute("id", "boton-mensaje");
        linea.classList.add("linea");

        
        botonMensaje.addEventListener('click', () => {
            pantalleNegro.remove();
        });

    }
}