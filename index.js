import React from 'react';
import ReactDOM from 'react-dom';
import { App, Titulo } from 'App'
import './index.css'

function App() {

    return (
        <div className='App' onClick={}>
            <h1>Hola soy app</h1>
            <img src="" />
            <hr />
        </div>
    )
}





App(paramat)

ReactDOM.render(
    <React.StrictMode>
        <App props=''/>
    </React.StrictMode>,
    document.getElementById('root')
);





// let result = ""

// if(condition){
//     result = "correct";
// }else{
//     result= "incorrect";
// }

// console.log(`Este es el resultado ${result}`);


// // SUGAR SYNTAX
// const condition1= false;

// console.log(`Este es el restulado ${condition ? 'correct': 'incorrect'}`);





//SPREAD OPERATOR

// let arr= ['b','c','d'];
// //let a= 'a';
// const newArray= [a, ...arr];
// console.log(newArray);

// const Fede = {
//     foo: "bar",
//     apellido: 'Osandón',
//     ['persona_'+ id]: 'asadasdad'
// }
// // console.log(Fede);

// // DESESTRUCTURING
// let {nombre, apellido, edad = 10} = Fede;
// console.log(edad);



// var { a: valor} = {a: 2}
// console.log(valor);