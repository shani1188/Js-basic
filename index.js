console.log('Hello World');
let isApproved=false
let firstName = undefined;
//let lastName = null;

const interestRate = 0.3;

// object working

let person =    {
    name: 'Shahrukh',
    age:30
}
console.log(person)
let selectColors = ['red', 'blue']
selectColors[3]='green'
selectColors[2]=5
console.log(selectColors)


// functions
function greet(name, lastName){
console.log('Hello ' + name +' ' + lastName)
}
greet('Shahrukh','Asghar')

const app = require('express')();
const PORT = 8080;
app.get('/tshirt',( req , res)=>{
    res.status(200).send({
        tshirt: ':D',
        size: 'large'
    })
    
});

app.listen(
    PORT,
    ()=> console.log('its alive on http://localhost:${PORT}')
)