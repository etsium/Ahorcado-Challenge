class Palabra{
    palabra;
    tipo;

    constructor(palabra, tipo = "RANDOM"){
        this.palabra = palabra;
        this.tipo = tipo;      
    }

    obtenerPalabra(){
        return this.palabra;
    }
}