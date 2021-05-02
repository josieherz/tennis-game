const tennisCounter = document.getElementById("tennisCounter");
const counter = document.getElementById("counter");
const clicker = document.getElementById("clicker");
let tennisCount = 0;
let score = 0;
tennisCounter.innerText = tennisCount;
counter.innerText = score;

const container = document.getElementById("container");



/*SERENA*/
const serena = document.getElementById("Serena");
const s_needed_up = document.getElementById("S_need_to_upgrade");
const s_counter = document.getElementById("Serena_counter");
let s_counter_amount = 0;
let s_needed_up_amount = 20*(s_counter_amount+1);

s_needed_up.innerText = "To Upgrade: "+ s_needed_up_amount;
s_counter.innerText = s_counter_amount;


/*NAOMI*/
const naomi = document.getElementById("Naomi");
const n_needed_up = document.getElementById("N_need_to_upgrade");
const n_counter = document.getElementById("Naomi_counter");
let n_counter_amount = 0;
let n_needed_up_amount = 100*(n_counter_amount+1);

n_needed_up.innerText = "To Upgrade: "+ n_needed_up_amount;
n_counter.innerText = n_counter_amount;

/*DJOKOVIC*/
const djokovic = document.getElementById("Djokovic");
const d_needed_up = document.getElementById("D_need_to_upgrade");
const d_counter = document.getElementById("Djokovic_counter");
let d_counter_amount = 0;
let d_needed_up_amount = 500*(d_counter_amount+1);

d_needed_up.innerText = "To Upgrade: "+ d_needed_up_amount;
d_counter.innerText = d_counter_amount;

/*NADAL*/
const rafael = document.getElementById("Rafael");
const r_needed_up = document.getElementById("R_need_to_upgrade");
const r_counter = document.getElementById("Rafael_counter");
let r_counter_amount = 0;
let r_needed_up_amount = 2000*(r_counter_amount+1);

r_needed_up.innerText = "To Upgrade: "+ r_needed_up_amount;
r_counter.innerText = r_counter_amount;

/*FEDERER*/
const federer = document.getElementById("Federer");
const f_needed_up = document.getElementById("F_need_to_upgrade");
const f_counter = document.getElementById("Federer_counter");
let f_counter_amount = 0;
let f_needed_up_amount = 25000*(f_counter_amount+1);

f_needed_up.innerText = "To Upgrade: "+ f_needed_up_amount;
f_counter.innerText = f_counter_amount;



/*THE CODE*/
clicker.addEventListener("click",()=>{
    if (tennisCount <30){
        tennisCount=tennisCount+15;
    }
    else if (tennisCount==30){
        tennisCount=tennisCount+10; 
    }
    else{
        tennisCount = 0;
        score=score+1+(s_counter_amount*1)+(n_counter_amount*5)+(d_counter_amount*50)+(r_counter_amount*100);/* SCORE*/
    }
    tennisCounter.innerText = tennisCount;
    counter.innerText = score;
    perClick.innertext = 1+(s_counter_amount*1)+(n_counter_amount*5)+(d_counter_amount*50)+(r_counter_amount*100);/* SCORE*/
});

serena.addEventListener("click",()=>{
   if (score >= s_needed_up_amount){
    s_counter_amount++;
    s_counter.innerText = s_counter_amount;
    score = score - s_needed_up_amount;
    counter.innerText = score;
    s_needed_up_amount = 20*(s_counter_amount+1);
    s_needed_up.innerText = "To Upgrade: "+ s_needed_up_amount;
   createNotification("serena");
   }
   else{
       
       alert("not enough")
   }
});

naomi.addEventListener("click",()=>{
    if (score >= n_needed_up_amount){
     n_counter_amount++;
     n_counter.innerText = n_counter_amount;
     score = score - n_needed_up_amount;
     counter.innerText = score;
     n_needed_up_amount = 100*(n_counter_amount+1);
     n_needed_up.innerText = "To Upgrade: "+ n_needed_up_amount;
     createNotification("naomi");
    }
    else{
        alert("not enough")
    }
 });

 djokovic.addEventListener("click",()=>{
    if (score >= d_needed_up_amount){
     d_counter_amount++;
     d_counter.innerText = d_counter_amount;
     score = score - d_needed_up_amount;
     counter.innerText = score;
     d_needed_up_amount = 1000*(d_counter_amount+1);
     d_needed_up.innerText = "To Upgrade: "+ d_needed_up_amount;
     createNotification("djokovic");
    }
    else{
        alert("not enough")
    }
 });

 rafael.addEventListener("click",()=>{
    if (score >= r_needed_up_amount){
     r_counter_amount++;
     r_counter.innerText = r_counter_amount;
     score = score - r_needed_up_amount;
     counter.innerText = score;
     r_needed_up_amount = 5000*(r_counter_amount+1);
     r_needed_up.innerText = "To Upgrade: "+ r_needed_up_amount;
     createNotification("nadal");
    }
    else{
        alert("not enough")
    }
 });

 federer.addEventListener("click",()=>{
    if (score >= f_needed_up_amount){
     f_counter_amount++;
     f_counter.innerText = f_counter_amount;
     score = score - f_needed_up_amount;
     counter.innerText = score;
     f_needed_up_amount = 50000*(f_counter_amount+1);
     f_needed_up.innerText = "To Upgrade: "+ f_needed_up_amount;
     createNotification("federer");
    }
    else{
        alert("not enough")
    }
 });

 function federerAutoCounter(){
     score = score + f_counter_amount;
     counter.innerText = score;

 }

setInterval(federerAutoCounter,1000)
 
function turnDark(){
    perClick.innerText = "Point per set: " +(1+(s_counter_amount*1)+(n_counter_amount*5)+(d_counter_amount*50)+(r_counter_amount*100));/* SCORE*/
    if(score<s_needed_up_amount){
        serena.classList.add("dark");
    }
    else{
        serena.classList.remove("dark");
    }

    if(score<n_needed_up_amount){
        naomi.classList.add("dark");
        }
    else{
        naomi.classList.remove("dark");
        }

    if(score<d_needed_up_amount){
        djokovic.classList.add("dark");
    }
    else{
        djokovic.classList.remove("dark");
    }

    if(score<r_needed_up_amount){
        rafael.classList.add("dark");
        }
    else{
        rafael.classList.remove("dark");
        }

    if(score<f_needed_up_amount){
        federer.classList.add("dark");
        }
    else{
        federer.classList.remove("dark");
        }
}

setInterval(turnDark,100);

const perClick = document.getElementById("perClick");

perClick.innerText = "Point per set: " +(1+(s_counter_amount*1)+(n_counter_amount*5)+(d_counter_amount*50)+(r_counter_amount*100));/* SCORE*/
    

function createNotification(arg){
    /* give a element i.e serea and then use if statements
    for example if user imput is serea
    createNotif(argument)
    if argument -- serea 
    notif.innerHTML = serea image
    */ 
    const notif = document.createElement("div");
    notif.classList.add("toast");

    if (arg=="serena"){
        notif.innerHTML="<img src=\"https://fivethirtyeight.com/wp-content/uploads/2020/01/GettyImages-1198962563-e1579241681488.jpg\" height = \"150\">"
    }
   
    if (arg=="naomi"){
        notif.innerHTML="<img src=\" https://sportsgrindentertainment.com/wp-content/uploads/2021/04/Good-Energy-to-Have-For-Me-Naomi-Osaka-Hopes-to.jpg \" height = \"150\">"
    }
    if (arg=="djokovic"){
        notif.innerHTML="<img src=\" https://static01.nyt.com/images/2020/08/20/sports/20tennis-djokovic01/20tennis-djokovic01-mediumSquareAt3X.jpg \" height = \"150\">"
    }
    if (arg=="nadal"){
        notif.innerHTML="<img src=\" https://img6.custompublish.com/getfile.php/4838335.1046.pttikiqwsnipnj/174494543_3971831832892421_5523605335224088017_n.jpg?return=www.ski-nordique.net \" height = \"150\">"
    }
    if (arg=="federer"){
        notif.innerHTML="<img src=\" https://www.atptour.com/en/news/www.atptour.com/-/media/images/news/2021/04/18/15/44/federer-clay-announcement-2021.jpg \" height = \"150\">"
    }
    /* instead of appending to body appeand somewhere else, z-index 2 as well*/ 
  container.appendChild(notif);
    setTimeout(() => {
        notif.remove();
    }, 3000);
}