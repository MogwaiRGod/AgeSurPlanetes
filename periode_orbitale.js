//  VARIABLES
let age;
let planete_id=1;
const tab_planetes=[
    ['Mercure', 87.9090455], //id=0         // tableau sous la forme (nom planète, temps de révolution en jours)
    ['Vénus', 224.5469999], //id=1
    ['Mars', 686.497767], //id=2
    ['Jupiter', 4329.854475], //id=3
    ['Saturne', 3923142.92105], //id=4
    ['Uranus', 30666.14879], //id=5
    ['Neptune', 60148.8318] //id=6
]

// FONCTIONS
const convertirAgeEnJours = (age) => { return age*=365; }

// calcule l'âge équivalent selon l'ID de la planète entrée et l'arrondit à l'entier le plus proche
const convertirAgePlanete = (age, planete_id) => { return Math.round(age/tab_planetes[planete_id][1]); }
const afficherAge = (age, planete_id) => { document.write(`Votre âge sur ${tab_planetes[planete_id][0]} est : ${age} ans.<br>`); }

/////////// SCRIPT

age=25; 
console.log(tab_planetes.length);
for (i=0; i<tab_planetes.length; i++){
    age=convertirAgePlanete(convertirAgeEnJours(age), i);
    afficherAge(age, i);
}