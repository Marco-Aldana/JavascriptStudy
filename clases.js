// expresion de clase, pueden tener nombre o ser anonimas
// const Rectangulo=class {}
// const Rectangulo=class R{}
// const r = new Rectangulo()

//declaracion de clase
//las clase no tienen hoisting
//class Rectangulo{}

//Hoisting:
//Esto es cuando tomamos variables definidas con var
//Y funciones definidas con function
//Y las lleva al comienzo del archivo
//function Cuadrado(){}


class Clase{
    prop ='MyProp'
    #privateprop = 'Numeral para declarar variables privadas'//no se puede ver la propiedad privada, solo dentro de la clase
    static staticProp="Propiedad estatica, me puedes usar sin instanciar y desde metodos estaticos"
    constructor(variable='valorpordefault', privateprop='valorpordefault'){
        this.laVariable=variable
        this.#privateprop=privateprop
    }

    hablar (){
        console.log(`soy un constructor ${this.laVariable} - ${this.#privateprop}`)
    }

    static staticprop(){
        console.log(this, this.prop, this.privateprop,"me puedes usar sin instanciar la clase", this.staticProp)
    }
}

Clase.staticprop()

const testingClass = new Clase('y soy el primero')
const testingClass2 = new Clase('y soy el segundo')
const testingClass3 = new Clase()

testingClass.hablar()
console.log(testingClass)
// console.log(testingClass.__proto__)// en explorador si se muestran todos los metodos y funciones
console.log(testingClass.__proto__.hablar)// para mostrar ciertos metodos en node por desicion de los creadores
testingClass2.hablar()
testingClass3.hablar()
