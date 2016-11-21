var pro1;
var pro2;
var pro3;
var pro4;


function nam(){
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

function choix(){
  var qu1= prompt("Faites-vous confiance à John ? Répondre par oui ou non");
  var qu2= prompt("Eliminez-vous Elisabeth et son ami avant de partir ? Répondre par oui ou non");
    if((qu1=="oui") && (qu2 =="oui")){
      alert("Félicitation, vous avez réussit à vous échapper d'Utopia, malheureusement, John vous attaque par surprise pendant votre sommeil. C'est un psychopathe.");
    }
    else if((qu1 == "oui") && (qu2 == "non")){
      alert("Dommage, Elisabeth et son ami vous ont retrouvé, ligottés et tués sans remords.");
    }
    else if( (qu1 == "non")&&(qu2=="oui")){
      alert("Bravo ! Vous êtes trés perspicace et avez compris qu'on ne peut compter que sur soi-même ! Bonne route !");
    }
    else {
      alert("John, Elisabeth et son ami vous ont laissé prendre de l'avance... Pour mieux vous rattraper et ne plus jamais vous laisser repartir...");
    }
    }
