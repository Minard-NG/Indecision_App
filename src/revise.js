import React from 'react';
import ReactDOM from 'react-dom';
//import App from './components/App';

let visibility = false;
const toggler = () =>{
   visibility = !visibility;
    renderer();
}

const renderer = () => {

    class Person{
        constructor(name='Anonymous', age=0){
            this.name = name;
            this.age = age;
        }

        getGreeting(){
            return `Hi I am an ${this.name}.`;
        }
        getDescription(){
            return `${this.name} is ${this.age} years(s) old.`
        }
    }

    class Traveler extends Person {
        constructor(name, age, location){
            super(name, age);
            this.location = location;
        }

        hasLocation(){
            return !!this.location;
        }

        getGreeting(){
            let greeting = super.getGreeting();

            if(this.hasLocation()){
                greeting += ` I'm visiting from ${this.location}`
            }
            return greeting;
            
        }
    }

    const me = new Traveler('Andrew Mead', 25, 'Philadephia');
    console.log(me.getGreeting());
    console.log(me.getDescription());

    const other = new Traveler();
    console.log(other.getGreeting());
    console.log(me.getDescription());
    
    const template = (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={toggler}>{visibility ? 'Hide Details' : 'Show Details'}</button>
            {visibility && <p>Hey, some details for ya</p>}
        </div>
    );

    ReactDOM.render(template, document.getElementById('app'));
}
renderer();


// JSX - Javascript
// var app = {
//     title: "Indecision App",
//     subtitle: "Put your life in the hands of a computer",
//     options: ['One' , ' Two']
// }

// const onFormSubmit = (e) => {
//     e.preventDefault();

//     const option = e.target.elements.option.value; 

//     if(option){
//         app.options.push(option);
//         e.target.elements.option.value = "";
//         renderForm();
//     }
// }

// const onMakeDecision = () => {
//     const randomNum = Math.floor(Math.random() * app.options.length);
//     const option = app.options[randomNum];
//     alert(option);
// }

// const onRemove = () => {
//     app.options.splice(0, app.options.length);
//     renderForm();
// }

// const renderForm = () => {
//     const template = (
//         <div>
//             <h1>{app.title}</h1>
//             {app.subtitle && <p>{app.subtitle}</p>}
//             <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
//             <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I Do</button>
//             <button onClick={onRemove}>Remove All</button>
            
//             <ol>
//                 {
//                     (app.options.length >0)?app.options.map(
//                         (option,i )=>{
//                         return <li key={i}>{option}</li>
//                         }
//                     ):false
//                 }
//             </ol>
//             <form action="" onSubmit={onFormSubmit}>
//                 <input type="text" name="option"/>
//                 <button>Add Option</button>
//             </form>
//         </div>
//     );
//     ReactDOM.render(template, document.getElementById("app"));
// }

// renderForm();

// var template = (
//     <div>
//         <h1>Andrew</h1>
//         <h3>Age: 26</h3>
//         <p>Location: Unknown</p>
//         <ol>
//             <li>{app.title}</li>
//             <li>{app.subtitle}</li> 
//         </ol>
//     </div>
// );

// var user = {
//     name: "Andrew",
//     age: 26,
//     location : "Philadelphia"
// }

// var userName = "Andrew";
// var userAge = 17;
//  var userLocation = "Ethopia";

// function getLocation(location){
//     if(location){
//         return <p>Location: {location}</p>;
//     }else{
//         return "Unknown";
//     }
    
// }

// // const templateTwo = (
// //     <div>
// //         <h1>Count: {count}</h1>
// //         <button id="my-id" className="">+1</button>
// //     </div>
// // );

// let count = 0;
// const addOne = ( ) =>{
//     count++;
//     renderCounterApp();
// }
// const minusOne = ()=>{
//     count--;
//     renderCounterApp();
// }

// const reset = ()=>{
//     count = 0;
//     renderCounterApp();
// }

// const renderCounterApp = ()=>{
//     const templateThree = ( 
//         <div>
//             <h1>Count: {count}</h1>
//             <button onClick={addOne}>+1</button>
//             <button onClick={minusOne}>-1</button>
//             <button onClick= {reset}>reset</button>
//         </div>
//         );
        
//         ReactDOM.render(templateThree, document.getElementById("app"));

// };

// renderCounterApp();

