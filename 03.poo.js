function Personne(nom, prenom, pseudo){
    this.nom = nom;
    this.prenom = prenom;
    this.pseudo = pseudo;
    this.getNomComplet = function() { return this.nom+this.prenom+this.pseudo};
    this.getInitial = function() {return this.prenom.charAt(0)+this.nom.charAt(0)};
}

var jules = new Personne("LEMAIRE", "Jules", "jules77");
var paul = new Personne("LEMAIRE", "Paul", "paul44");

console.log(jules.nom, jules.prenom, jules.pseudo, jules.getNomComplet());

function afficherPersonne(p){
    console.log(p.nom, p.prenom, p.pseudo, p.getNomComplet());
}
afficherPersonne(paul);

//Modifier un objet
jules.pseudo = "jules44"
console.log(jules.getNomComplet());

//ajouter propriété à Personne
Personne.prototype.age = "NON RENSEIGNE";
jules.age = 30;
console.log(jules.age);

//ajouter methode a personne
console.log(jules.getInitial());

//Objet sans constructeur
var Robert = {
    nom : "LEPREFET",
    prenom : "Robert",
    pseudo : "robert77",
    getNomComplet : function(){return this.nom+this.prenom+this.pseudo }
}
afficherPersonne(Robert);

//Heritage via une fonction constructeur
function Client(nom, prenom, pseudo, numeroClient){
    Personne.call(this, nom, prenom, pseudo)
    this.numeroClient = numeroClient;
    this.getInfos = function(){return this.numeroClient+this.nom+this.prenom }
}

var steve = new Client("LUCAS","Steve","steve44","A01");
afficherPersonne(steve)
console.log(steve.nom);
console.log(steve.numeroClient);
console.log(steve.getInfos());