//////  VARIABLES
/// tableau associatif sous forme planète->révolution en jours
const tab_planetes={
    'Mercure':87.9090455,
    'Vénus':224.5469999,
    'Mars':686.497767,
    'Jupiter':4329.854475,
    'Saturne':3923142.92105,
    'Uranus':30666.14879,
    'Neptune':60148.8318
};
let resultat = document.getElementById("resultat");
let planete;
let button=document.querySelector('button');

/// inputs
let age=parseInt(window.prompt("Entrer votre âge :")); // conversion en entier de l'entrée utilisateur




/////// FONCTIONS
const verifInput = (age) => { return age != null && !isNaN(age); }; // vérifie que l'entrée n'est ni vide, ni indéfinie
/// calculs
const convertirAgeEnJours = (age) => { return age*=365; };
// calcule l'âge équivalent selon la planète entrée et l'arrondit à l'entier le plus proche
const convertirAgePlanete = (age, planete) => { return Math.round(age/tab_planetes[planete]);}; // planete = clef
const afficherAge = (age, planete) => { resultat=(`Votre âge sur ${planete} est : ${age} ans.<br>`); return resultat;};



/////////// SCRIPT
if (verifInput(age)) {
    age=convertirAgeEnJours(age);
} else {
    window.alert("Valeur incorrecte");
}


button.addEventListener('click', e => {
    planete=document.getElementsByName('planetes-planete').value;
  });

console.log(planete.id);
