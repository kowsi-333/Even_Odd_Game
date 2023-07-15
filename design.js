var player1={
    name:"Player1",
    p1_count:0,
    p1_val:[]

};

var player2={
   name:"player2",
   p2_count:0,
   p2_val:[]
};
var count=0;
function playEvenOdd() 
{
    var p1=Math.floor(Math.random()*25+1);
    var p2=Math.floor(Math.random()*25+1);
    player1.p1_val.push(p1);
    player2.p2_val.push(p2);
    
    console.log(p1,p2);
    if(count==5)
    {
        if(player1.p1_count==player2.p2_count){
            document.getElementById("result").textContent="MATCH DRAW!!!";
        }
        else if(player1.p1_count>player2.p2_count)
        {
                    document.getElementById("result").textContent=player1.name+" WINS!!!";

        }
        else{
            document.getElementById("result").textContent=player2.name+" WINS!!!";

        }

        console.log(p1,p2);
    }
    else{
        count++;
        if(p1%2==0)
        {
            player1.p1_count++;
            document.getElementById("player1_score").textContent=player1.p1_count;
        }
        if(p2%2==0)
        {
          player2.p2_count++;
          document.getElementById("player2_score").textContent=player2.p2_count;

        }
        updateCircle();
    }
}
    function updateCircle(){
        var p1_circle=document.getElementById("player_1").children;
        player1.p1_val.forEach((run,value)=>{
            if(run%2==0){
                p1_circle[value].style.backgroundColor="green";
            }
            else
            {
                p1_circle[value].style.backgroundColor="red";
            }
        
    });
    var p2_circle=document.getElementById("player_2").children;
        player2.p2_val.forEach((run,value)=>{
            if(run%2==0){
                p2_circle[value].style.backgroundColor="green";
            }
            else
            {
                p2_circle[value].style.backgroundColor="red";
 
            }
        
    });
}