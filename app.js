let boxes = document.querySelectorAll(".box");
let restbtn =document.querySelector("#rest");
let newgamebtn = document.querySelector("#newgame");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#winner");
let removerest = document.querySelector(".removerest");


let xxcolor= document.querySelector(".xcolor");
let yycolor =document.querySelector(".ycolor");

let turn0 =true;  //playerX player 0


removerest.classList.remove("hider");//restart button ko hatane k liye



const winpattern =[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

const Xcolor =(box)=>{
   
}


const Ycolor =(box)=>{
   
}

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("-- box has been clicked");
        if(turn0==true){   //player X
            box.innerText="X";
             turn0=false;


            //  xxcolor.classList.add("xcolor");
            // yycolor.classList.remove("ycolor");
            
            //Xcolor(box);
        }
        else{ //player0
           
            box.innerText="0";
            turn0=true;

            // xxcolor.classList.remove("xcolor");
            // yycolor.classList.add("ycolor");
        
            //Ycolor(box);
        }
        box.disabled=true;  // box ko fir se click karne se change naa ho kar k

        checkwinner();
    });
});



const restgame =()=>{
    turn0=true;
    enableBoxes();
    msgcontainer.classList.add('hide');

    removerest.classList.remove("hider");
};

const showwinner=(winner)=>{
    msg.innerText=` WINNER IS ${winner}`;
    msgcontainer.classList.remove("hide");
   // restbtn.classList.add("hider");
   removerest.classList.add("hider");
    disableBoxes();
};

const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
};

const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText =" ";

    }
};

const checkwinner =()=>{
    for(let pattern of winpattern){
        
        // console.log(pattern[0],pattern[1],pattern[2]);

         console.log(boxes[pattern[0]],boxes[pattern[1]],boxes[pattern[2]]);


        let pos1Val = boxes[pattern[0]].innerText;   //innerText check karne k liye h ki pattern[0] k andar konsi value hai
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val =boxes[pattern[2]].innerText;
 
        if(pos1Val != " " && pos2Val !=""&& pos3Val!=" "){
            if(pos1Val==pos2Val && pos2Val==pos3Val){
                console.log("winner",pos1Val);
                showwinner(pos1Val);
            }
            
        }
        


    }
};

newgamebtn.addEventListener("click",restgame);
restbtn.addEventListener("click",restgame);