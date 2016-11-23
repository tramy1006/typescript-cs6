let displayColors = function(...Color){
    for(let i in Color){
        console.log(Color[i]);
    }
}

displayColors('Res');
displayColors('Res','Green');
displayColors('Res','Green','yellow');