
//funciones nombradas
function name(){

}

// Arrow function <==> Ptyhon / Lambda param: body Java/ ->{} Javascript/ =>{}
// funciones flecha
// setInterval: Cada intervalo que yo defina va a ejecutar una funcion
//setInterval(() => {
//}, interval);

// EJEMPLO DE CONTADOR SOBRE HTML
let contador = 0;
setInterval(() => {
    const spanNumero = document.getElementById("numero");
    console.log(spanNumero.innerHTML);
    spanNumero.innerHTML = contador++;
}, 100);


// CREANDO APP DESDE VUE JS
// Vue.createApp (config).mount(element)
const Counter = {
    data() {
        return {
            counter: 0,
            message: "Hola Mundo", 
            maria: 10
        }
    }, mounted(){
        setInterval(() => {
           this.counter++; 
        }, 1000);
    }
}
Vue.createApp (Counter).mount("#contador2")
// para modificar todos elementos de una clase ".contador"
// aun asi lo normal es que una funcion gestion un bloque apenas.

Vue.createApp({
    data(){
        return{
            mensaje: "hello from Vue"
        }
    },
    beforeCreate(){
        console.log("Pase por beforeCreate")
    },
    methods:{
        reverseMessage(){
           this.mensaje =  this.mensaje.split("").reverse().join("-");
        }
    }

}).mount("#evento");

Vue.createApp({
    data(){
        return{
            message: "holaaaaaaa"
        }
    }

}).mount("#enlace")

Vue.createApp({
    data(){
        return{
            esVisible: true
        }
    },
    methods:{
        cambio(){
            this.esVisible = !this.esVisible;
        }
    }

}).mount("#condicional")

Vue.createApp({
    data(){
        return{
            pendientes:["hola","como","estas","hoy"]
        }
    }

}).mount("#ciclos")

Vue.createApp({
    data(){
        return{
            contador: 1,
            tarea: "",
            tareas: [
                //{id:1,mensaje:"hola a todos"}
                //{id:2,mensaje:"Como ven Vue"}
            ]
        }
    },
    methods:{
        agregarTarea(){
            this.tareas.push({
                id: this.contador++,
                mensaje: this.tarea
            })
        }
    }

}).mount("#tareas")

