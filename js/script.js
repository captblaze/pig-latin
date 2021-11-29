
function translatePigLatin(str) {
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let newStr = "";

    if (vowels.indexOf(str[0]) > -1) {
        newStr = str + "acedu";
        return newStr;
    } else {
        let firstMatch = str.match(/[aeiou]/g) || 0;
        let vowel = str.indexOf(firstMatch[0]);
        newStr = str.substring(vowel) + str.substring(0, vowel) + "ayac";
        return newStr;
    }
} 




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
        console.log(newStr);
    }
    else if (twoLetter==="qu") {
        console.log(remove2 + "ayac");
            
    }else {
      console.log(remove + "ayac");
    }

   
});
});