function createHtmlTag()
{
    userInput = document.getElementById("inputText").value;//stores the user input

    pElem = document.createElement("p");//created a <P></P> element

    data = document.createTextNode(userInput);//created a text node and stored it to a var

    pElem.appendChild(data);//added the data to p element

    mydiv = document.getElementById("div1");//created a variable and assigned it with the empty div

    mydiv.appendChild(pElem);//now appended the pElem to mydiv
}






