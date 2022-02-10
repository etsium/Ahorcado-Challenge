function generarPersonaje(personaje, pincel){
    const nombre = personaje.obtenerNombre();
    const color = personaje.obtenerColor();
    var x = 200;
    var y = 200;

    generarNombre(x, y, nombre, pincel);

    generarCabeza(x, y, color, pincel);

    generarCuello(x, y, color, pincel);

    generarCuerpo(x, y, color, pincel);

    generarBrazosDoblados(x, y, color, pincel);

    generarPiesFirmes(x, y, color, pincel);
    
}

function generarPersonaje(personaje, pincel, color){
    const nombre = personaje.obtenerNombre();
    var x = 200;
    var y = 200;

    
    generarNombre(x, y, nombre, pincel);

    generarCabeza(x, y, color, pincel);

    generarCuello(x, y, color, pincel);

    generarCuerpo(x, y, color, pincel);

    generarBrazosDoblados(x, y, color, pincel);

    generarPiesFirmes(x, y, color, pincel);
    
}

function generarPersonajeConCuerda(personaje, pincel){
    const nombre = personaje.obtenerNombre();
    const color = personaje.obtenerColor();
    var x = 200;
    var y = 200;

    generarCuerda(x, y, pincel);

    generarNombre(x, y, nombre, pincel);

    generarCabeza(x, y, color, pincel);

    generarCuerpo(x, y, color, pincel);

    generarBrazosDoblados(x, y, color, pincel);

    generarPiesFirmes(x, y, color, pincel);
}

function generarPersonajeMuerto(x, y, personaje, pincel){  
    const nombre = personaje.obtenerNombre();
    const yfija =  200;
    const color = personaje.obtenerColor();

    generarCuerda(x, yfija, pincel);

    generarCabeza(x, y, color, pincel);

    generarCuello(x, y, "#a38c79", pincel);

    generarCuerpo(x, y, color, pincel);

    generarBrazosMuertos(x, y, color, pincel);

    generarPiesMuertos(x, y, color, pincel);   

}

function generarCabeza(x, y, color, pincel){
     //cabeza
     pincel.fillStyle = color;
     pincel.beginPath();
     pincel.arc( x + 61, y + 50 ,15 ,0 ,2*3.14);
     pincel.fill();
}

function generarBrazosDoblados(x, y, color, pincel){
    //mano izquierda
    pincel.fillStyle = color;
    pincel.beginPath();
    pincel.moveTo( x + 59, y + 72);
    pincel.lineTo( x + 42, y + 90);

    pincel.lineTo( x + 59, y + 110);
    pincel.lineTo( x + 59, y + 112);

    pincel.lineTo( x + 40, y + 90);
    pincel.lineTo( x + 59, y + 70);

    pincel.fill();


    //mano derecha
    pincel.fillStyle = color; //propiedad
    pincel.beginPath();
    pincel.moveTo( x + 63, y + 70);
    pincel.lineTo( x + 82, y + 90);

    pincel.lineTo( x + 63, y + 112);
    pincel.lineTo( x + 63, y + 110);
    
    pincel.lineTo( x + 80, y + 90);
    pincel.lineTo( x + 63, y + 72);

    pincel.fill();
}

function generarNombre(x, y, nombre, pincel){
    //nombre
    pincel.font = "1rem Comic Sans MS";
    pincel.fillStyle = "red";
    pincel.textAlign = "center"; 
    pincel.fillText(nombre, x + 60, y + 34);    
}

function generarCuello(x, y, color, pincel){
    //cuello
    pincel.fillStyle = color;
    pincel.fillRect( x + 59, y + 65, 4, 3);
}

function generarCuerda(x, y, pincel){
    //cuerda
    pincel.fillStyle = "#a38c79";
    pincel.fillRect(x + 60, y + 20,3,50);
}

function generarCuerpo(x, y, color, pincel){
    //cuerpo
    pincel.fillStyle = color;
    pincel.fillRect( x + 59, y + 68, 4, 60);
}

function generarPiesFirmes(x, y, color, pincel){
    //pie izquierdo
    pincel.fillStyle = color; //propiedad
    pincel.beginPath();
    pincel.moveTo( x + 61, y + 128);
    pincel.lineTo( x + 59, y + 128);

    pincel.lineTo( x + 50, y + 190);
    pincel.lineTo( x + 52, y + 190);
    pincel.fill();

    //pie derecho
    pincel.fillStyle = color; //propiedad
    pincel.beginPath();
    pincel.moveTo( x + 61, y + 128);
    pincel.lineTo( x + 63, y + 128);

    pincel.lineTo( x + 70, y + 190);
    pincel.lineTo( x + 68, y + 190);
    pincel.fill();
}

function generarPiesMuertos(x, y, color, pincel){
    //pie izquierdo
    pincel.fillStyle = color; //propiedad
    pincel.beginPath();
    pincel.moveTo( x + 61, y + 128);
    pincel.lineTo( x + 59, y + 128);
    pincel.lineTo( x + 55, y + 190);
    pincel.lineTo( x + 57, y + 190);
    pincel.fill();

    //pie derecha
    pincel.fillStyle = color; //propiedad
    pincel.beginPath();
    pincel.moveTo( x + 61, y + 128);
    pincel.lineTo( x + 63, y + 128);
    pincel.lineTo( x + 69, y + 190);
    pincel.lineTo( x + 67, y + 190);
    pincel.fill();
}

function generarBrazosMuertos(x, y, color, pincel){
    //mano izquierda
    pincel.fillStyle = color; //propiedad
    pincel.beginPath();
    pincel.moveTo( x + 59, y + 70);
    pincel.lineTo( x + 50, y + 125);
    pincel.lineTo( x + 52, y + 125);
    pincel.lineTo( x + 59, y + 80);
    pincel.fill();


    //mano izquierda
    pincel.fillStyle = color; //propiedad
    pincel.beginPath();
    pincel.moveTo( x + 63, y + 70);
    pincel.lineTo( x + 72, y + 125);
    pincel.lineTo( x + 70, y + 125);
    pincel.lineTo( x + 63, y + 80);

    pincel.fill();
}

/*otros*/
var caida = 0;
function animacionMuertePersonaje(pincel, personaje){
    var x = 200;
    var y = 200;

    if(caida < 20){
        limpiarPantalla(pincel);
        generarEscenario(pincel);
        generarEndiduraAbierta(pincel);
        generarPersonajeMuerto(x, caida + y, personaje, pincel);
        caida ++;    
    }
    
}

function limpiarPantalla(pincel){
    pincel.clearRect(0,0,500,500);
}

/* Escenario */

function generarEscenario(pincel){
    //cesped
    pincel.fillStyle = "#5ba283";
    pincel.fillRect(0,450,220,10);

    pincel.fillStyle = "#5ba283";
    pincel.fillRect(300,450,200,10);

    //tierra
    pincel.fillStyle = "#9b7653";
    pincel.fillRect(0,460,220,20);

    pincel.fillStyle = "#9b7653";
    pincel.fillRect(300,460,200,20);

    pincel.fillStyle = "#9b7653";
    pincel.fillRect(220,470,300,10);

    //piedra
    pincel.fillStyle = "#81878a";
    pincel.fillRect(0,480,500,20);

    //palo horizontal
    pincel.fillStyle = "#705335";
    pincel.fillRect(80,150,20,300); 

    //piedra inferior
    pincel.fillStyle = "#81878a"
    pincel.fillRect(70,420,40,30); 

    //piedra superior
    pincel.fillStyle = "#81878a";
    pincel.fillRect(75,140,30,30); 

    //palo vertical
    pincel.fillStyle = "#705335";
    pincel.fillRect(80,200,190,20);

}

function generarEndiduraCerrada(pincel){
      //endidura
      pincel.fillStyle = "#705335";
      pincel.fillRect(210,400,10,70);
  
      pincel.fillStyle = "#705335";
      pincel.fillRect(210,390,100,10);
  
      pincel.fillStyle = "#705335";
      pincel.fillRect(300,400,10,70);
  
      pincel.fillStyle = "#705335";
      pincel.fillRect(210,460,90,10);

      pincel.fillStyle = "#966F33";
      pincel.fillRect(220,400,80,60);
}

function generarEndiduraAbierta(pincel){
     //endidura
     pincel.fillStyle = "#705335";
     pincel.fillRect(210,400,10,110);
 
     pincel.fillStyle = "#705335";
     pincel.beginPath();
     pincel.moveTo(220,390);
     pincel.lineTo(210,385);
     pincel.lineTo(152,448);
     pincel.lineTo(165,450); 
     pincel.fill();
 
     pincel.fillStyle = "#705335";
     pincel.fillRect(300,400,10,110);
 
     pincel.fillStyle = "#705335";
     pincel.fillRect(210,490,90,10);

     pincel.fillStyle = "#966F33";
     pincel.fillRect(220,400,80,90);
}


/* Pantalla Ganador*/
function generarPantallaGanador(personaje, pincel){
    const color = personaje.obtenerColor();

    limpiarPantalla(pincel);
    generarPersonaje(personaje, pincel, color);
    generarEscenario(pincel);
    generarEndiduraCerrada(pincel);
    generarMensajeGanador(pincel);
}

function  generarMensajeGanador(pincel) {
    pincel.font = "5rem Rajdhani";
    pincel.fillStyle = "darkGreen";
    pincel.textAlign = "center"; 
    pincel.fillText("Felicidades!, Ganaste", 260, 100);    
}