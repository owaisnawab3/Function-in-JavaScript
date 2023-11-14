//============//Displays-current-date-&-time//============//
document.write("<h3>Displays current date & time:</h3>")
console.log("Displays current date & time:")
function newDate(){
    let date = new Date()
    document.write(date)
    console.log(date)
}
newDate()

//=============//Greeting-the-user-using-full-name://============//
document.write("<h3>Greeting the user using full name:</h3>")
console.log("Greeting the user using full name:")
function greeting(){
    var userInput = prompt("Enter your first Name:")
    var lastName = prompt("Enter your last Name:")
    let greeting = "Greeting!"
    document.write(userInput+" "+lastName+" "+greeting)
    console.log(userInput+" "+lastName +" "+greeting)
}
greeting()

//==========//(Input by User) and sum of two numbers.//==========//
document.write("<h3>(Input by User) and sum of two numbers.</h3>")
console.log("(Input by User) and sum of two numbers.")
function sum(){
let user = Number(prompt("Enter first number for addition:"))
let user2 = Number(prompt("Enter second number for addition:"))
var addition = user + user2
document.write(user + " + " + user2 + " = "+addition)
console.log(user + " + " + user2 + " = "+addition)
alert(user + " + " + user2 + " = "+addition)
}
sum()

//function that takes three arguments
document.write("<h3>function that takes three arguments:</h3>")
console.log("function that takes three arguments:")
function calculator(num1,num2,operator){
let result;
if(operator === "+"){
result = num1 + num2
}else if(operator === "-"){
    result =  num1 - num2
}else if(operator === "*"){
    result = num1 * num2
}else if(operator === "/"){
    result = num1 / num2
}else{
    result = "Invalid Operation"
}
document.write("Result = "+result)
console.log("Result = "+result)
}
calculator(5,3,"+")

//========//function-that-squares-its-argument.//=========//
document.write("<h3>function that squares its argument:</h3>")
console.log("function that squares its argument:")
function squares(x){
let sqrt = Math.sqrt(x)
document.write("64 Squares is : "+sqrt)
console.log("64 Squares is : "+sqrt)
}
squares(64)

//=========//factorial-of-a-7-number.//=========//
document.write("<h3>Factorial of a 7 number:</h3>")
console.log("Factorial of a 7 number:")
function factorial(){
    let number = Number(prompt("Enter a Number for Factorial:"))
    if(number === 0){
        alert("Number 0 Factorial is : 1")
        console.log("Number 0 Factorial is : 1")
        document.write("Number 0 Factorial is : 1")
    }
    else if(number <0){
        alert("Factorial of Negative number is not exist")
        console.log("Factorial of Negative number is not exist")
        document.write("Factorial of Negative number is not exist")
    }
    else{
        let fact = 1;
        for(let i = 1; i<=number; i++){
            fact = fact * i
        }
        document.write("Factorial "+number+" is: "+fact)
        console.log("Factorial "+number+" is: "+fact)
    }
}
factorial()

//That take start and end number Display Counting//
document.write("<h3>That take start and end number Display Counting:</h3>")
console.log("That take start and end number Display Counting:")
function counting(){
var startNumber = Number(prompt("Enter starting number for Counting:"))
var endingNumber = Number(prompt("Enter ending number for Counting:"))
for(i=startNumber; i<=endingNumber; i++){
    document.write(i+"<br/>")
    console.log(i)
}
}
counting()

//===//Nested-function-that-computes-hypotenuse-of-a-right-angle-triangle.//===//
document.write("<h3>Nested function that computes hypotenuse of a right angle triangle.</h3>")
console.log("Nested function that computes hypotenuse of a right angle triangle.")
function calculateTraingle(){
let base = Number(prompt("Enter the Base Value"))
let heigth = Number(prompt("Enter the Heigth Value"))
var area = (base * heigth)/2
document.write(" Base:"+base+"  Height:"+heigth+"  Area:"+area)
console.log(" Base:"+base+" Height:"+heigth+" Area:"+area)
}
calculateTraingle()

//==========//Calculates-the-area-of-a-rectangle.//==========//
document.write("<h3>Calculates the area of a rectangle:</h3>")
console.log("Calculates the area of a rectangle:")
function calculateRectangle(width,heigth){
    var area =  width * heigth
    return area; 
    

}
var areaByValues =  calculateRectangle(4,5);
document.write("Rectangle Area: "+areaByValues+"*")
console.log("Rectangle Area: "+areaByValues+"*")

//Check Palidrome://
document.write("<h3>Check Palidrome:</h3>")
console.log("Check Palidrome:")
function palidromeChecker(){
    let userInput = prompt("Enter Word in Palidrome")
    let lowerCase = userInput.toLocaleLowerCase()
    let reverse = lowerCase.split("").reverse().join("")
    if(lowerCase === reverse){
        document.write(userInput+": It's a Palidrome!")
        console.log(userInput+": It's a Palidrome!")
    }
    else{
        document.write(userInput+": It's not a Palidrome!")
        console.log(userInput+": It's not a Palidrome!")
    }
    // console.log(reverse)
}
palidromeChecker()

//The first letter of String in Uppercase//
document.write("<h3>The first letter of String in Uppercase:</h3>")
console.log("The first letter of String in Uppercase:")
function stringUppercase(inputString){
  
    let expectedOutput = inputString.split(" ")
    var capitalizeWord = expectedOutput.map(function(word){
    return word.charAt(0).toUpperCase() + word.slice(1)
 });

 let resultString = capitalizeWord.join(' ')
 return resultString;

}
   

    let inputString = "' the quick brown fox '"
    var outPutString = stringUppercase(inputString)

     document.write("EXAMPLE STRING: "+inputString)
    console.log("EXAMPLE STRING: "+inputString)
    document.write("<br/>EXPECTED OUTPUT: "+outPutString)
    console.log("EXPECTED OUTPUT: "+outPutString)

//========//Find-the-longest-word-within-the-string.//========//
document.write("<h3>Find the longest word within the string:</h3>")
console.log("Find the longest word within the string:")
function largestWord(str){
var array = str.split(" ")
var largest = '';

for(var i = 0; i<array.length; i++){

if(array[i].length > largest.length){
   
    largest = array[i];
}
}
return largest;
}
var exampleString = "'Web Development Tutorial'"
var outPut = largestWord(exampleString)
document.write("EXAMPLE STRING : "+exampleString)
document.write("<br/>EXPECTED OUTPUT : "+outPut)
console.log("EXAMPLE STRING : "+exampleString)
console.log("EXPECTED OUTPUT : "+outPut)

//=======//Count-the-number-of-Letter-within-the-string//=======//
document.write("<h3>Count the number of Letter within the string:</h3>")
console.log("Count the number of Letter within the string:")
function countnumberofSrting(word,letter){

    let array = sampleArgments.split("")

    var number = 0

    for(var i=0; i<array.length; i++)
    {
     if(array[i] === letter){
        number++;
     }

    }
 return number;   
}
var sampleArgments = 'JSResourceS.com'
var exampleArgment = 'o'
var count = countnumberofSrting(sampleArgments,exampleArgment)
document.write("The Number of Letter: ",count)
console.log("The Number of Letter: ",count)

//============//The-Geometrizer//=============//
document.write("<h3>The Geometrizer!</h3>")
console.log("The Geometrizer!")

//Create a function called calcCircumference:

function calcCircumference(radius){

let circleRadius = 2 * Math.PI * radius
document.write("Circumference of Circle = " , circleRadius)
console.log("Circumference of Circle = " , circleRadius)
}
var radiusOfCircumference = 5
calcCircumference(radiusOfCircumference)

//Create a function called calcArea:

function calcArea(area){

let  areaRadius = Math.PI * Math.pow(area, 2)
document.write("Area of Circle = " , areaRadius)
console.log("Area of Circle = " , areaRadius)

}
var areaOfCircumference = 5
calcArea(areaOfCircumference)


//==========================//-- END --//========================// 