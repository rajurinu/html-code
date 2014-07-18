var textfield = document.getElementById('textField');//variable declaration
var submit = document.getElementById('submitButton');//variable declaration

submit.addEventListener('click', buttonClicked, false);//addEventListener is inbuilt javascript method.it waits for events like click, hover...

function buttonClicked(e){  //code for getting the text field value and then evaluate it and then show it result.
e.preventDefault();//from preventing the nuber getting erased  on clicking submit button
x = textField.value;
x = eval(x); //inbuilt javascript method which evaluates expression.
textField.value = x; //shows the result in textfield area.

}
function addToField(n){
textfield.value += n;//textfield.value means value inside ourtext field. and += means adding without erasing previous number.if we first press 2 and then 3 then it will show 23
                     // but if we omitt + then only 3 will be shown .just check this with + and without +. 
}

function power(y)           // code for calculating power
{
x = textField.value;
x = Math.pow(x,y);
textField.value = x;
}
function powten()         // code for calculating power of 10.
{
x = textField.value;
x = Math.pow(10,x);    //math.pow() is a method of math object
textField.value = x;
}
