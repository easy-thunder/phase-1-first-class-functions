'use strict'
/*
function runFiveMiles(){
    console.log("Go for a five-mile run");
}

function liftWeights(){
    console.log("Pump iron");

}
function swimFortyLaps(){
    console.log("Swim 40 laps");
}

//function exerciseRoutine(postRunActivity){
    // runFiveMiles();
    // postRunActivity();
// }


function Monday(){
    exerciseRoutine(liftWeights);
}



exerciseRoutine(() => console.log("stretch! Work that core!"));


Monday*/

function receivesAFunction(callback){
    callback()
}

function returnsANamedFunction(){
    return function named(){
        console.log("jake")
    }
}

function returnsAnAnonymousFunction(){
    return (function (){
        console.log("jake")
    })
}








