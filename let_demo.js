//JavaScript let: Declaring Block-Scoped Variables


//Introduction to the JavaScript let keyword


let x = 10;

if(x==10){
let x=20
console.log(x);
}

console.log(x);


// JavaScript let and global object


var a = 10;

console.log(window.a);

let b = 20;

console.log(window.b);


// JavaScript let and callback function in a for loop

for(var i =0; i<5;i++){
    
    setTimeout(function(){
        console.log(i);    
    },1000);
}

for(var i=0;i<5;i++){
(function(j){
setTimeout(
    function(){
        console.log(j);  
    },1000
)
})(i);
}


for(let i=0;i<5;i++){
setTimeout(
    function(){
        console.log(i);
    },1000
)
}

for (let i=0;i<5;i++){
setTimeout(()=>console.log("Es6 style" + " "+ i),1000);
}



