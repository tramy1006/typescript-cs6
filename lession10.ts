let displayColorsSpead = function(message, ...Color: string[]){
    for(let i in Color){
        console.log(Color[i]);
    }
}

let messageSpead ="hello";
let Color = ['red','green','blue'];
displayColorsSpead(messageSpead,...Color)