/* ENONCE 
écrire une fonction JS pour additionner tous les chiffres présents dans une chaine mixte (type 'kjhd2hjh4jh98' ) -> 2+4+9+8*/

////////////////////////////////// DECLARATION
////// VARIABLES
const chaine_mixte = "1GHJ2FGHJK3";

////// FONCTIONS
function sommeNbs(chaine) {
    let total=0;
    // on boucle dans la chaîne comme dans un tableau
    for ( i=0; i<chaine.length; i++){
        // on vérifie pour chaque si l'item est un nombre
        // si oui : on le convertit en nombre (car extrait, il formera une chaîne) et on l'ajoute au total
        if (! isNaN(chaine[i])){
            total+=parseInt(chaine[i]);
        }
    }
    return total;
}

/////////////////////////////////// EXECUTION
console.log(sommeNbs(chaine_mixte));
