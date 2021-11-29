//user logic
$(document).ready(function(){
    $("#pigLatin").submit(function(event){
        event.preventDefault();

        //user input value
    let userInput =$("#word").val();
    userInput= userInput.toLowerCase()

// first character, removing of the firstletter and concating them
    let firstLetter= userInput.substring(0,1)
    let remove  = userInput.slice(1)+firstLetter;

// first two  character, removing of the first two letter and concating them
    let twoLetter = userInput.substring(0,2)
    let remove2  = userInput.slice(2)+twoLetter;
    


    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let newStr = "";
    if (vowels.indexOf(userInput[0]) > -1) {
        newStr = userInput + "acedu";
        $("#output").text(newStr);
    }
    else if (twoLetter==="qu") {
        $("#output").text(remove2 + "ayac");
            
    }else {
        $("#output").text(remove + "ayac");
    }

   
});
});