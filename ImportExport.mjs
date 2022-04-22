// si se trabaja sin package.json, para importar y exportar necesitamos nombrar a nuestros archivos *.mjs

const arrayToExport=['Element1-1','Element2-1','Element3-1' ]
const arrayToExport2=['Element1-2','Element2-2','Element3-2' ]
const arrayToExport3=['ElementDummy' ]
// export const arrayToExport2=['Element1-2','Element2-2','Element3-2' ]
// export const arrayToExport3=['ElementDummy' ]

// //export de modo antiguo
// module.exports = arrayToExport//modo antiguo
// module.exports={
//     arrayToExport,
//     arrayToExport2
// }

const fn1=()=>{
    console.log('soy funcion')
}

export {arrayToExport2, arrayToExport3, fn1}// se puede declarar aqui en vez de en su instanciacion
export default arrayToExport