//function for displaying values
function dis(val){
    document.getElementById("edu").value+=val
}
//function for evaluation
function solve(){
    
    let x = document.getElementById("edu").value
    console.log(x,typeof(x));
    let temp = x;
    console.log(temp);
    let alphabates = "ABCDEFGHIJKLMNOPQRSTUVWYZabcdefghijklmnopqrstuvwyz";
    for(let i = 0; i < alphabates.length; i++){
        for(let j = 0; j < temp.length; j++){
            if(alphabates[i] === temp[j]){
                return alert("Only Numbers are allowed. ");
            }
        }
    }
    let y = eval(x)
    document.getElementById("edu").value = y
}
//function for clearing the display
function clr(){
    document.getElementById("edu").value = ""
}

// Giving heading to the calculator
var heading = document.createElement('div');
heading.setAttribute('class', 'title');
heading.innerHTML = 'Calculator using DOM Manipulation';

// Creating table for calculator.
var calcTable = document.createElement('table');
calcTable.setAttribute('border', '1');

// Creating row 1 and column 1
var rowOne = document.createElement('tr');
var rowOneColOne = document.createElement('td');
var cButton = document.createElement('input');
cButton.setAttribute('type', 'button');
cButton.setAttribute('value', 'c');
cButton.setAttribute('onclick', 'clr()');
rowOneColOne.appendChild(cButton);
// Creating row 1 and column 2.
var rowOneColTwo = document.createElement('td');
rowOneColTwo.setAttribute('colspan', '3');
var textArea = document.createElement('input');
textArea.setAttribute('type', 'text');
textArea.setAttribute('id', 'edu');
rowOneColTwo.appendChild(textArea);
// Inserting the columns in row 1.
rowOne.append(rowOneColOne, rowOneColTwo);

//Creating row 2
var rowTwo = document.createElement('tr');
// Creating row 2 col 1.
var rowTwoColOne = document.createElement('td');
var plusButton = document.createElement('input');
plusButton.setAttribute('type', 'button');
plusButton.setAttribute('value', '+');
plusButton.setAttribute('onclick','dis("+")');
rowTwoColOne.appendChild(plusButton);
// Creating row 2 col 2.
var rowTwoColTwo = document.createElement('td');
var oneButton = document.createElement('input');
oneButton.setAttribute('type', 'button');
oneButton.setAttribute('value', '1');
oneButton.setAttribute('onclick','dis("1")');
rowTwoColTwo.appendChild(oneButton);
// Creating row 2 col 3.
var rowTwoColThree = document.createElement('td');
var twoButton = document.createElement('input');
twoButton.setAttribute('type', 'button');
twoButton.setAttribute('value', '2');
twoButton.setAttribute('onclick','dis("2")');
rowTwoColThree.appendChild(twoButton);
// Creating row 2 col 4.
var rowTwoColFour = document.createElement('td');
var threeButton = document.createElement('input');
threeButton.setAttribute('type', 'button');
threeButton.setAttribute('value', '3');
threeButton.setAttribute('onclick','dis("3")');
rowTwoColFour.appendChild(threeButton);
// Inserting columns in row 2.
rowTwo.append(rowTwoColOne, rowTwoColTwo, rowTwoColThree, rowTwoColFour);

//Creating row 3
var rowThree = document.createElement('tr');
// Creating row 3 col 1.
var rowThreeColOne = document.createElement('td');
var minusButton = document.createElement('input');
minusButton.setAttribute('type', 'button');
minusButton.setAttribute('value', '-');
minusButton.setAttribute('onclick','dis("-")');
rowThreeColOne.appendChild(minusButton);
// Creating row 3 col 2.
var rowThreeColTwo = document.createElement('td');
var fourButton = document.createElement('input');
fourButton.setAttribute('type', 'button');
fourButton.setAttribute('value', '4');
fourButton.setAttribute('onclick','dis("4")');
rowThreeColTwo.appendChild(fourButton);
// Creating row 3 col 3.
var rowThreeColThree = document.createElement('td');
var fiveButton = document.createElement('input');
fiveButton.setAttribute('type', 'button');
fiveButton.setAttribute('value', '5');
fiveButton.setAttribute('onclick','dis("5")');
rowThreeColThree.appendChild(fiveButton);
// Creating row 3 col 4.
var rowThreeColFour = document.createElement('td');
var sixButton = document.createElement('input');
sixButton.setAttribute('type', 'button');
sixButton.setAttribute('value', '6');
sixButton.setAttribute('onclick','dis("6")');
rowThreeColFour.appendChild(sixButton);
// Inserting columns in row 3.
rowThree.append(rowThreeColOne, rowThreeColTwo, rowThreeColThree, rowThreeColFour);

//Creating row 4
var rowFour = document.createElement('tr');
// Creating row 4 col 1.
var rowFourColOne = document.createElement('td');
var multiplyButton = document.createElement('input');
multiplyButton.setAttribute('type', 'button');
multiplyButton.setAttribute('value', '*');
multiplyButton.setAttribute('onclick','dis("*")');
rowFourColOne.appendChild(multiplyButton);
// Creating row 4 col 2.
var rowFourColTwo = document.createElement('td');
var sevenButton = document.createElement('input');
sevenButton.setAttribute('type', 'button');
sevenButton.setAttribute('value', '7');
sevenButton.setAttribute('onclick','dis("7")');
rowFourColTwo.appendChild(sevenButton);
// Creating row 4 col 3.
var rowFourColThree = document.createElement('td');
var eightButton = document.createElement('input');
eightButton.setAttribute('type', 'button');
eightButton.setAttribute('value', '8');
eightButton.setAttribute('onclick','dis("8")');
rowFourColThree.appendChild(eightButton);
// Creating row 4 col 4.
var rowFourColFour = document.createElement('td');
var nineButton = document.createElement('input');
nineButton.setAttribute('type', 'button');
nineButton.setAttribute('value', '9');
nineButton.setAttribute('onclick','dis("9")');
rowFourColFour.appendChild(nineButton);
// Inserting columns in row 4.
rowFour.append(rowFourColOne, rowFourColTwo, rowFourColThree, rowFourColFour);

//Creating row 5
var rowFive = document.createElement('tr');
// Creating row 5 col 1.
var rowFiveColOne = document.createElement('td');
var divideButton = document.createElement('input');
divideButton.setAttribute('type', 'button');
divideButton.setAttribute('value', '/');
divideButton.setAttribute('onclick','dis("/")');
rowFiveColOne.appendChild(divideButton);
// Creating row 5 col 2.
var rowFiveColTwo = document.createElement('td');
var dotButton = document.createElement('input');
dotButton.setAttribute('type', 'button');
dotButton.setAttribute('value', '.');
dotButton.setAttribute('onclick','dis(".")');
rowFiveColTwo.appendChild(dotButton);
// Creating row 5 col 3.
var rowFiveColThree = document.createElement('td');
var zeroButton = document.createElement('input');
zeroButton.setAttribute('type', 'button');
zeroButton.setAttribute('value', '0');
zeroButton.setAttribute('onclick','dis("0")');
rowFiveColThree.appendChild(zeroButton);
// Creating row 5 col 4.
var rowFiveColFour = document.createElement('td');
var equalToButton = document.createElement('input');
equalToButton.setAttribute('type', 'button');
equalToButton.setAttribute('value', '=');
equalToButton.setAttribute('onclick','solve()');
rowFiveColFour.appendChild(equalToButton);
// Inserting columns in row 5.
rowFive.append(rowFiveColOne, rowFiveColTwo, rowFiveColThree, rowFiveColFour);

//Creating row 6
var rowSix = document.createElement('tr');
// Creating row 6 col 1.
var rowSixColOne = document.createElement('td');
var leftBracButton = document.createElement('input');
leftBracButton.setAttribute('type', 'button');
leftBracButton.setAttribute('value', '(');
leftBracButton.setAttribute('onclick','dis("(")');
rowSixColOne.appendChild(leftBracButton);
// Creating row 6 col 2.
var rowSixColTwo = document.createElement('td');
var powerButton = document.createElement('input');
powerButton.setAttribute('type', 'button');
powerButton.setAttribute('value', '^');
powerButton.setAttribute('onclick','dis("**")');
rowSixColTwo.appendChild(powerButton);
// Creating row 6 col 3.
var rowSixColThree = document.createElement('td');
var modButton = document.createElement('input');
modButton.setAttribute('type', 'button');
modButton.setAttribute('value', '%');
modButton.setAttribute('onclick','dis("%")');
rowSixColThree.appendChild(modButton);
// Creating row 6 col 4.
var rowSixColFour = document.createElement('td');
var rightBracButton = document.createElement('input');
rightBracButton.setAttribute('type', 'button');
rightBracButton.setAttribute('value', ')');
rightBracButton.setAttribute('onclick','dis(")")');
rowSixColFour.appendChild(rightBracButton);
// Inserting columns in row 6.
rowSix.append(rowSixColOne, rowSixColTwo, rowSixColThree, rowSixColFour);

// Inserting all the rows in table.
calcTable.append(rowOne, rowTwo, rowThree, rowFour, rowFive, rowSix);

// Inserting the table into the body.
document.body.appendChild(heading);
document.body.appendChild(calcTable);
