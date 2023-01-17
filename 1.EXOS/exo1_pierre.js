/* ENONCE 
Calculer la somme et le produit d'un tableau d'entiers et affichez les deux résultats
ex : montab=[1,2,3,4,5]
retour :
-> masomme = 15
-> monproduit = 120 */

// VARIABLES
let montab=[1, 2, 3, 4, 5, 6, 7, 8];
masomme=0;
monproduit=1;

// SCRIPT
montab.forEach(val => {
    masomme+=val;
    monproduit*=val;
});

console.log(`Somme = ${masomme}\nProduit = ${monproduit}`);