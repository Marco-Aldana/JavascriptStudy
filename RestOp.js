//el rest operator tiene que ser el ultimo parametro que utilicemos

const rest = (a, b, ...args) => {
    console.log(a, b, args)
}
rest(1, 2, 3, 4, 5, 6, 7)


//object destructuring
const obj = {
    a: 'a', b: 'b', c: 'c', d: 'd'
}

const { a, b, ...resto } = obj
console.log(a, b, resto)

//arr destructuring
const arr = [1, 2, 3, 4, 5]
const [uno, dos, ...r] = arr
console.log(uno, dos, r)

//cuando usemos react USESTATE
const useState = () => ['valor', () => { }]
const [valor,setValor]= useState()
console.log(valor,setValor)