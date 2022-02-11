class Personaje{
    #nombre;
    #color;
    #historia;
    #score;

    constructor(nombre, color, historia, score){
        this.#nombre = nombre;
        this.#color = color;
        this.#historia = historia;
        this.#score = score;

        const botoGuardar = document.querySelector("#boton-guardar");
        const botonPersonalizar = document.querySelector("#boton-personalizar");

        botoGuardar.addEventListener('click', () => {
            console.log(this.camposValidos());
            if(this.camposValidos()){
                this.#guardarValores();            
                mostrarInicio();
            }
        });

        botonPersonalizar.addEventListener('click', () => {
            this.#mostrarValores();
        })
        
    }
    
    #guardarValores(){
        this.#nombre = document.querySelector("#nombre").value;
        localStorage.setItem("nombre", this.#nombre);

        this.#color = document.querySelector("#colorPicker").value;
        localStorage.setItem("color", this.#color);
        
        this.#historia = document.querySelector("#historia").value; 
        localStorage.setItem("historia", this.#historia);  
    }

    #mostrarValores(){
        document.querySelector("#nombre").value = this.#nombre;
        document.querySelector("#colorPicker").value = this.#color;
        document.querySelector("#historia").value = this.#historia;
    }

    obtenerNombre(){
        return this.#nombre;
    }

    obtenerColor(){
        return this.#color;
    }

    obtenerHistoria(){
        return this.#historia;
    }

    camposValidos(){
        let camposValidos = false;
        if(document.querySelector("#nombre").value === ""){
            camposValidos = false;
            mostrarMensaje("El campo nombre no puede estar vacio");
        }else{
            camposValidos = true;
        }

        if(document.querySelector("#historia").value.length < 20){
            camposValidos = false;
            mostrarMensaje("La historia debe contener al menos 20 caracateres");
        }else{
            camposValidos = true;
        }

        return camposValidos;
    }
    
}