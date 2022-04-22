const arr = [0, 1, 2, 3, 4, 5]

//filter, regresa valores que evaluen en true
const f = arr.filter((element, index, array) => {
    // console.log(index)
    // console.log(array)
    return element > 2
})
console.log(f)

//map, modifica los elementos
//tambien tiene value, index y array
const users = [
    { id: 1, name: 'user1' },
    { id: 2, name: 'user2' },
    { id: 3, name: 'user3' },
    { id: 4, name: 'user4' },
    { id: 5, name: 'user5' },
]
const m = users.map((element) => `<h1>${element.name}</h1>`)
console.log(m)


//reduce
//todos los valores acumulados, elemento, index, array
// const r = arr.reduce((accum, element) => accum + element, 0)//sumar todos los elementos

// const getMax = (a, b) => Math.max(a, b)
// const r = arr.reduce(getMax)//se le pasa la arrowfunct, no usar valor inicial en ciertos casos

// const r= users.reduce((acc,element)=> `${acc==='' ? '' : `${acc}, `} ${element.name}`,'')

const r = users.reduce((acc,element) =>{
    if (element.id<3)
    {
        return acc
    }
    return acc.concat(element) 
},[])

console.log(r)