var pro1;
var pro2;
var pro3;
var pro4;


function name(){
  pro1 = prompt("Quel est votre nom ?");
  var objet = document.getElementById("objet");
  objet.style.display="block";
  document.getElementById("answers1").innerHTML=pro1;
}

function objet(){
  pro2 = prompt("Quel est cet objet ?");
  var talent = document.getElementById("bestFriend");
  talent.style.display="block";
  talent.scrollTop = talent.scrollHeight;
  window.scrollTo(0,document.body.scrollHeight);
  // document.getElementById("").innerHTML=pro2;
}

function bestFriend(){
  pro3 = prompt("A votre avis ?");
  var tal = document.getElementById("talent");
  tal.style.display="block";
  window.scrollTo(0,document.body.scrollHeight);

  // document.getElementById("").innerHTML=pro3;
}

function suite(){
  var suite = document.getElementById("debut");
  suite.style.display="block";
  document.getElementById("answers2").innerHTML= pro3;
  document.getElementById("answers3").innerHTML= pro2;
  window.scrollTo(0,document.body.scrollHeight);
}



function begin2(){
  var arm = document.getElementById("arme");
  arm.style.display="block";
  window.scrollTo(0,document.body.scrollHeight);
}

function armed(){
  pro4 = prompt("Quelle arme prenez-vous ?");
  var comb = document.getElementById("combat");
  comb.style.display="block";
  document.getElementById("answers4").innerHTML= pro4;
  window.scrollTo(0,document.body.scrollHeight);
}
function stor(){
  var storr = document.getElementById("story");
  storr.style.display="block";
  document.getElementById("answers5").innerHTML= pro3;
  document.getElementById("answers6").innerHTML= pro2;
  window.scrollTo(0,document.body.scrollHeight);
}
