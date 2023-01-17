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

/// inputs
let age=parseInt(window.prompt("Entrer votre âge :")); // conversion en entier de l'entrée utilisateur
let planete;




/////// FONCTIONS
const verifInput = (age) => { return age != null && !isNaN(age); }; // vérifie que l'entrée n'est ni vide, ni indéfinie
/// calculs
const convertirAgeEnJours = (age) => { return age*=365; };
// calcule l'âge équivalent selon la planète entrée et l'arrondit à l'entier le plus proche
const convertirAgePlanete = (age, planete) => { return Math.round(age/tab_planetes[planete]); }; // planete = clef
const afficherAge = (age, planete) => { document.write(`Votre âge sur ${planete} est : ${age} ans.<br>`); };



/////////// SCRIPT
if (verifInput(age)) {
    age=convertirAgePlanete(convertirAgeEnJours(age), clef);
    afficherAge(age, clef);
} else {
    window.alert("Valeur incorrecte");
}
