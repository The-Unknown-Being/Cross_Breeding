var activeButtonStyle = "background-color:rgba(128, 255, 0, 0.61);transition:0.4s;";
var passiveButtonStyle = "font-size:20px;font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;color:white;background-color:green;border-radius: 10px;margin:5px;border-color: green;transition: all 0.4s;";
var Choice = 1;

function setThingsUp(){
    document.getElementById("selectBut0").style =  activeButtonStyle;
    document.getElementById("selectBut1").style = passiveButtonStyle;
}
function BreedingSelector(x){ 
    document.getElementById("selectBut"+x).style =  activeButtonStyle;
    document.getElementById("selectBut"+(1-x)).style = passiveButtonStyle;
    if(x == 0){
        document.getElementById("MonoHybrid").style.display =  "block";
        document.getElementById("DiHybrid").style.display =  "none";
    }
    else{
        document.getElementById("MonoHybrid").style.display =  "none";
        document.getElementById("DiHybrid").style.display =  "block";
    }
    Choice = x+1;   
}
function Breed(){
    let maleo = document.getElementById("ftraits").value;
    let femaleo = document.getElementById("mtraits").value;
    
    let male = maleo;
    let female = femaleo;
    let maleT = [];
    let femaleT = [];
    for(let i=0; i < Choice*2;i++){
        maleT.push(male[i]);
        femaleT.push(female[i]);
    }
    let answers = [];
    if(Choice == 1){
        monoBreed(maleT,femaleT,answers);
    }else if(Choice == 2){
        diBreed(maleT,femaleT,answers);
    }
    updateResults(answers);
}
function monoBreed(maleParent,femaleParent,outcome){
    for(let i=0; i < 2;i++){
        for(let j=0; j < 2;j++){
            tmp = maleParent[i]+femaleParent[j];
            outcome.push(tmp);
        }
    }
    for(let i = 0; i < outcome.length; i++){
        let tmp = outcome[i];
        for(let j=0; j <= tmp.length-2;j += 2){
            if(tmp.charCodeAt(j) > tmp.charCodeAt(j+1)){
                outcome[i] = tmp[j+1]+tmp[j];
            }
        }
    }
}
function diBreed(maleParent,femaleParent,outcome){
    let tmp=[];
    let tmp1=[];
    for(let i=0; i < Choice*2;i++){
        for(let j=0; j < Choice*2;j++){
            tmp = maleParent[i]+femaleParent[j];
            outcome.push(tmp);
        }
    }
    
}
function updateResults(answer){
    makeTableHead(answer,Choice);
    /*for(let i = 0; i < amount;i++){
        console.log("Amount: "+ amount);
        document.getElementById("Outcomes").innerHTML += "<li>"+answer[i] + " </li>";
    }*/
}
function makeTableHead(result,x){
    if(x == 1){
        document.getElementById("MonoHybrid").style.display = "block";
        document.getElementById("monoTable").style.display = "block";
        for(let i=1; i < 3;i++){
            document.getElementById("th"+i+"0").innerHTML = maleo[i-1];            
        }
        for(let i=1; i < 3;i++){
            document.getElementById("th"+"0"+i).innerHTML = femaleo[i-1];            
        }
        let count = 0;
        for(let i=1; i < 3;i++){
            for(let j=1; j < 3;j++){
                document.getElementById("th"+i+""+j).innerHTML = result[count];
                count++;
            }
        }
    }
    else{
        console.log("here");
        document.getElementById("DiHybrid").style.display = "block";
        document.getElementById("diTable").style.display = "block";
    }
}