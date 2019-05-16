  // Buttons-numbers-inputs

  function fun0() {
    fromId = document.getElementById('id0').innerHTML
    fromResult = document.getElementById('result').innerHTML;
    if(fromResult === '0'){document.getElementById('result').innerHTML = '';}
    fromLength = fromResult.length;
    if(fromLength > 15) {fail};
    document.getElementById('result').innerHTML += fromId;
}

function fun1() {
    fromId = document.getElementById('id1').innerHTML
    fromResult = document.getElementById('result').innerHTML;
    if(fromResult === '0'){document.getElementById('result').innerHTML = '';}
    fromLength = fromResult.length;
    if(fromLength > 15) {fail};
    document.getElementById('result').innerHTML += fromId;
}

function fun2() {
    fromId = document.getElementById('id2').innerHTML
    fromResult = document.getElementById('result').innerHTML;
    if(fromResult === '0'){document.getElementById('result').innerHTML = '';}
    fromLength = fromResult.length;
    if(fromLength > 15) {fail};
    document.getElementById('result').innerHTML += fromId;
}

function fun3() {
    fromId = document.getElementById('id3').innerHTML
    fromResult = document.getElementById('result').innerHTML;
    if(fromResult === '0'){document.getElementById('result').innerHTML = '';}
    fromLength = fromResult.length;
    if(fromLength > 15) {fail};
    document.getElementById('result').innerHTML += fromId;
}

function fun4() {
    fromId = document.getElementById('id4').innerHTML
    fromResult = document.getElementById('result').innerHTML;
    if(fromResult === '0'){document.getElementById('result').innerHTML = '';}
    fromLength = fromResult.length;
    if(fromLength > 15) {fail};
    document.getElementById('result').innerHTML += fromId;
}

function fun5() {
    fromId = document.getElementById('id5').innerHTML
    fromResult = document.getElementById('result').innerHTML;
    if(fromResult === '0'){document.getElementById('result').innerHTML = '';}
    fromLength = fromResult.length;
    if(fromLength > 15) {fail};
    document.getElementById('result').innerHTML += fromId;
}

function fun6() {
    fromId = document.getElementById('id6').innerHTML
    fromResult = document.getElementById('result').innerHTML;
    if(fromResult === '0'){document.getElementById('result').innerHTML = '';}
    fromLength = fromResult.length;
    if(fromLength > 15) {fail};
    document.getElementById('result').innerHTML += fromId;
}

function fun7() {
    fromId = document.getElementById('id7').innerHTML
    fromResult = document.getElementById('result').innerHTML;
    if(fromResult === '0'){document.getElementById('result').innerHTML = '';}
    fromLength = fromResult.length;
    if(fromLength > 15) {fail};
    document.getElementById('result').innerHTML += fromId;
}

function fun8() {
    fromId = document.getElementById('id8').innerHTML
    fromResult = document.getElementById('result').innerHTML;
    if(fromResult === '0'){document.getElementById('result').innerHTML = '';}
    fromLength = fromResult.length;
    if(fromLength > 15) {fail};
    document.getElementById('result').innerHTML += fromId;
}

function fun9() {
    fromId = document.getElementById('id9').innerHTML
    fromResult = document.getElementById('result').innerHTML;
    if(fromResult === '0'){document.getElementById('result').innerHTML = '';}
    fromLength = fromResult.length;
    if(fromLength > 15) {fail};
    document.getElementById('result').innerHTML += fromId;
}


// Buttons-acts-inputs

function funPlus() {
    var chislo1 = document.getElementById('result').innerHTML;
    var otstup = document.getElementById('result').innerHTML.length*10+60;
    document.getElementById('znak').setAttribute('style','margin-left:'+ otstup + 'px');
    document.getElementById('cell').innerHTML = chislo1;
    document.getElementById('znak').innerHTML = '+';
    document.getElementById('result').innerHTML = '0';

}

function funMinus() {
    var chislo1 = document.getElementById('result').innerHTML;
    var otstup = document.getElementById('result').innerHTML.length*10+60;
    document.getElementById('znak').setAttribute('style','margin-left:'+ otstup + 'px');
    document.getElementById('cell').innerHTML = chislo1;
    document.getElementById('znak').innerHTML = '-';
    document.getElementById('result').innerHTML = '0';
}

function funMulty() {
    var chislo1 = document.getElementById('result').innerHTML;
    var otstup = document.getElementById('result').innerHTML.length*10+60;
    document.getElementById('znak').setAttribute('style','margin-left:'+ otstup + 'px');
    document.getElementById('cell').innerHTML = chislo1;
    document.getElementById('znak').innerHTML = '*';
    document.getElementById('result').innerHTML = '0';
}

function funDivide() {
    var chislo1 = document.getElementById('result').innerHTML;
    var otstup = document.getElementById('result').innerHTML.length*10+60;
    document.getElementById('znak').setAttribute('style','margin-left:'+ otstup + 'px');
    document.getElementById('cell').innerHTML = chislo1;
    document.getElementById('znak').innerHTML = '/';
    document.getElementById('result').innerHTML = '0';
}

 // Arithmetic functions

var add = function(a, b) {return a + b;}
var subtract = function(a, b) {return a - b;}
var multiply = function(a, b) {return a * b;}
var divide = function(a, b) {return a / b;}

function funEqually() {
    var chislo1 = document.getElementById('cell').innerHTML;
    var fromResult = document.getElementById('result').innerHTML;
    var znak = document.getElementById('znak').innerHTML;
    var inputs = [parseFloat(chislo1), znak, fromResult];
      
    
    if (inputs[1] === "+") {
        var sum = add(parseFloat(inputs[0]), parseFloat(inputs[2]));
        clearDisplay ()
        document.getElementById('result').innerHTML = sum;	
    }
    else if (inputs[1] === "-") {
        var difference = subtract(parseFloat(inputs[0]), parseFloat(inputs[2]));
        clearDisplay ()
        document.getElementById('result').innerHTML = difference;
    }
    else if (inputs[1] === "*") {
        var product = multiply(parseFloat(inputs[0]), parseFloat(inputs[2]));
        clearDisplay ()
        document.getElementById('result').innerHTML = product;	
    }
    else if (inputs[1] === "/") {
        var quotient = divide(parseFloat(inputs[0]), parseFloat(inputs[2]));
        clearDisplay ()
        document.getElementById('result').innerHTML = quotient;
    }
      
    var solution = document.getElementById('result').innerHTML;
    if (solution.length >'16') {
        document.getElementById ('result').setAttribute('style', 'font-size: 20px; padding: 20px;');
    }
}

function clearDisplay () {
    inputs = ['','','']
    document.getElementById('cell').innerHTML = '';
    document.getElementById('znak').innerHTML = '';
    document.getElementById('result').innerHTML = '0';
    document.getElementById ('result').setAttribute('style', 'font-size: 30px;');
    
} 