//intakes the line array and a name in order to add them to the line
function takeANumber(katzDeliLine, cName)
{
  //pushes intaked name to the deli line array
  katzDeliLine.push(cName);
  //creates reference variable for name string to display later
  // this reference subtracts one from the length in order to account for arrays starting at 0
  var linePos = (katzDeliLine.length -1);
  //creates string where variables from method are added to diplay a specific person in line
  var returner = ("Welcome," + " " + katzDeliLine[linePos] + "." + " " + "You are number " + (katzDeliLine.length) + " " + "in line." );
  return returner;
}

function takeANumber2(katzDeliLine)
{//initiallize customerCount
 var customerCount = 0;
 //increment customer count
 customerCount++;
 //push customer number to array
  katzDeliLine.push(customerCount);
  //store current line position
  var linePos=(katzDeliLine.length -1);
  
  var returner =(`Welcome, customer ${katzDeliLine[linePos]}, you are number ${katzDeliLine.length} in line` );
 
  
}








function nowServing(katzDeliLine)
{
  //checks to see if there is anyone in the line
  if(katzDeliLine.length !== 0)
  {
    //removes the person who is currently being served
    //displays the person who is being served
    var removed = katzDeliLine.splice(0,1);
    var returner = ("Currently serving " + removed +"." );
    return returner;
  }
  //if the line array is empty inform the user
  if(katzDeliLine.length == 0)
  {
    return "There is nobody waiting to be served!";
  }
  
}
  function currentLine(katzDeliLine)
  {
    //declares a string to populate with the line for later
    var finalString = "";
    //checks to see if the line is empty
    if(katzDeliLine.length === 0)
    {
      return "The line is currently empty.";
    }
    //checks to see if the line isn't empty
    if(katzDeliLine.length !== 0)
    {   
    finalString = "The line is currently: ";
    //loops through every single filled slot in the line/array and adds their string value(their name) and line position number to the string created earlier
    for(var i = 0; i < katzDeliLine.length; i++)
    {   //checks to see if this is ISNT the last position in line to allow the placement of commas between entries
        if(i !== (katzDeliLine.length - 1))
        {
           finalString += ((i+1) +". " + katzDeliLine[i]+", ");
        }
        //if this is the last position in line, add it to the array but dont add a comma
        if(i === (katzDeliLine.length -1))
        {
            finalString += ((i+1) +". " + katzDeliLine[i]);
        }
       
    }
      return finalString;
    }
 
  }