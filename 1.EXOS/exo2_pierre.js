/* ENONCE 
CalculTransformer un tableau de chaines en concaténant tous les elements du tableau, avec un séparateur passé en argument :
ex :  transfo(["Red", "Green", "White", "Black"], "+") -> "Red+Green+White+Black"*/

////////////////////////////////// DECLARATION
////// VARIABLES
const montab = ["Red", "Green", "White", "Black"];
let separateur = " /// ";
let chaine;

////// FONCTIONS
function transformStr($tab, $sep) {
    let $chaine_transfo = "";
    // on boucle sur tous les éléments du tableau
    for (let i=0; i < $tab.length; i++){
        $chaine_transfo += $tab[i];
        if ( i == $tab.length-1 ) {
            return $chaine_transfo;
        }
        $chaine_transfo += $sep;
    }
    return 1;
}

/////////////////////////////////// EXECUTION
chaine=transformStr(montab, separateur);
console.log(chaine);