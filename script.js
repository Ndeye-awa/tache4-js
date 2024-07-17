//Exercice 1: 
// Faire une recherche sur les types conditions possibles en JavaScript. 
// Écrire un programme qui demande à un utilisateur d’écrire son âge, et lui retourne sa catégorie d’âge.
// NB: 0   à   14 ans  => Enfants
// 15   à   25 ans  => Adolescents
// 25   à   64 ans  => Adultes
// 65 ans et plus  => Aînés

let age = prompt("Entrez votre âge:");

// Détermine la catégorie d'âge
let categorie;

if (age >= 0 && age <= 14) {
    categorie = "Enfants";
} else if (age >= 15 && age <= 25) {
    categorie = "Adolescents";
} else if (age >= 26 && age <= 64) {
    categorie = "Adultes";
} else if (age >= 65) {
    categorie = "Aînés";
}

// Affiche la catégorie d'âge
alert("Vous êtes de la catégorie : " + categorie);