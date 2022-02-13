//This page is JavaScript and can be used to create more pages with
function displayWelcome() {
    document.write("<h2>Welcome to the casino how can we help you today</h2>");
 }
 function displayInstructions() {
     document.write("<p>here you will have help with playing craps</p><br/>")
 }
 //Enhance this function and put commets above 
 // each function to explain whats going on
 function play() {
    var die1 = 5
    var die2 = 2
    
    var sum = die1+die2
    document.write("Die 1 = " + die1)
    document.write("<br/>")
    document.write("Die 2 = " + die2)
    document.write("<br/>")
    document.write("Sum = " + sum)
    document.write("<br/>")
    if (sum == 7 || sum == 11)
    { document.write("CRAPS - you lose")
    document.write("<br/>")
    }
    else if (die1== die2 && die1%2 == 0)
    {
    document.write("DOUBLES - you win")
    document.write("<br/>")
    }
    
    }
   