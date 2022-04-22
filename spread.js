//spread operator
//...var
//el spread crea copias del valor, no pasa el valor por referencia

//case 1
const fn = (a, b, c) => console.log(a + b + c)
const arr = [1, 2, 3]
fn(...arr)

const arr1=[4,5]
const arr2= [0,...arr, ...arr1]
console.log(arr2)

//spread para objetos
const obj1 = {a:1, b:2}
const obj2 = { b: 3, c:"string"}
const obj3= {...obj1, ...obj2, extraProp:true}// se sobreescribe B dependiendo el orden en que se insertan

console.log(obj3)
