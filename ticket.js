//navbar js

function mysignin(){
    location.href="http://127.0.0.1:5500/signin.html"
}

function mysignup(){
    location.href="http://127.0.0.1:5500/signup.html"
}


// ticket js
var tbox1=document.getElementById("tbox1id");
    function ticketsboxmap1(){
        var x=[{key:1},{key:2},{key:3},{key:4},{key:5},{key:6},{key:7},{key:8},{key:9},{key:10}];
        x.forEach(el => {
            var tb11=document.createElement("div");
            tb11.textContent=el.key;
            tb11.setAttribute("class","tb11");
            tbox1.append(tb11)
        });
    }
ticketsboxmap1();
var tbox2=document.getElementById("tbox2id");
    function ticketsboxmap2(){
        var x=[{key:1},{key:2},{key:3},{key:4},{key:5},{key:6},{key:7},{key:8},{key:9},{key:10},{key:11}];
        x.forEach(el => {
            var tb11=document.createElement("div");
            tb11.textContent=el.key;
            tb11.setAttribute("class","tb11");
            tbox2.append(tb11)
        });
    }
ticketsboxmap2();
var tbox3=document.getElementById("tbox2id1");
    function ticketsboxmap3(){
        var x=[{key:1},{key:2},{key:3},{key:4},{key:5},{key:6},{key:7},{key:8},{key:9},{key:10},{key:11}];
        x.forEach(el => {
            var tb11=document.createElement("div");
            tb11.textContent=el.key;
            tb11.setAttribute("class","tb11");
            tbox3.append(tb11)
        });
    }
ticketsboxmap3();



//more tags

var moretags =document.getElementById("moretags");
function displaybox(){
    if(moretags.innerHTML=="MORE TAGS +"){
    document.getElementById("ticketsbox").style.display="block";
    moretags.innerHTML="LESS TAGS -"
    }else{
        document.getElementById("ticketsbox").style.display="none";
    moretags.innerHTML="MORE TAGS +"
    }
}

moretags.addEventListener("click",displaybox)