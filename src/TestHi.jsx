import './App.css';

let lastName = "Oeffling";
let names = ["Sam", "Casey", "Noah"];

function TestHi(params){

    return (
        <div>
            <h1>Hello {names[0] + " " + lastName}</h1>
            <p>{params.description}</p>
        </div>
    );
}

export default TestHi;