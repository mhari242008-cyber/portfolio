const roles = [
  "Web Developer",
  "College Student",
];

let i = 0;

setInterval(() => {
  document.querySelector(".hero-text h2").textContent = roles[i];
  i = (i + 1) % roles.length;
}, 2000);
const counters=document.querySelectorAll(".counter");

counters.forEach(counter=>{

const update=()=>{

const target=+counter.getAttribute("data-target");

const count=+counter.innerText;

const speed=target/100;

if(count<target){

counter.innerText=
Math.ceil(count+speed);

setTimeout(update,20);

}else{
counter.innerText=target;
}

};

update();

});
const words=[
"Web Developer",
"Frontend Developer",
"UI Designer",
"Full Stack Learner"
];

let i=0;

setInterval(()=>{
document.getElementById("typing").textContent=
words[i];

i=(i+1)%words.length;
},2000);