let box = document.querySelector("#box");
let btn = document.querySelector(".btn")
let main = document.querySelector("main")
let text = document.querySelector("#box h3")







btn.addEventListener("click",function(){


let arr = [{
        team: "RCB",
        primary: "red",
        secondary: "black"
    },
    {
        team: "MI",
        primary: "blue",
        secondary: "gold"
    },
    {
        team: "CSK",
        primary: "yellow",
        secondary: "blue"
    },
    {
        team: "KKR",
        primary: "purple",
        secondary: "gold"
    },
    {
        team: "SRH",
        primary: "orange",
        secondary: "black"
    },
    {
        team: "GT",
        primary: "navy",
        secondary: "gold"
    },
    {
        team: "DC",
        primary: "blue",
        secondary: "red"
    },
    {
        team: "PBKS",
        primary: "red",
        secondary: "silver"
    },
    {
        team: "RR",
        primary: "pink",
        secondary: "blue"
    },
    {
        team: "LSG",
        primary: "skyblue",
        secondary: "orange"
    }
]

let team = Math.floor(Math.random()*arr.length);


    // let c1 = Math.floor(Math.random()*256);
    // let c2 = Math.floor(Math.random()*256);
    // let c3 = Math.floor(Math.random()*256);
    // let c4 = Math.floor(Math.random()*256);
    // let c5 = Math.floor(Math.random()*256);
    // let c6 = Math.floor(Math.random()*256);
    
     main.style.backgroundColor = `rgb(${c1},${c2},${c3})`;
    box.style.backgroundColor = `rgb(${c4},${c5},${c6})`;

     
   text.innerText = arr[team].team;
})