//class es azucar sintaxico, crea una funcion como new
//todas las funciones que se declaran con function pueden ser funciones o clases basadas en prototipos
function Fn(){
    this.prop='prop Item'
    return 'stringToReturn'
}
Fn.prototype.lala=function ProtoFunct(){}

// const r = Fn()

//crea una instancia, como si fuera una clase
//toma todas las propiedades this como sus elementos
//ignora el return
const r = new Fn() 

console.log(r.__proto__)
console.log(r)
//----------------------------------------------------------------------------------------
//fat Arrow function no pueden ser llamadas con la palabra new
//no tienen contexto de THIS
const fatFn = () =>{
    this.prop='propiedad'
    console.log(this)
    return 'string de fatArrow'
}
const r1 = fatFn()

console.log(r1)

//return implicito cuando no hay llaves
const fatFn2 = () => 2
console.log(fatFn2())

