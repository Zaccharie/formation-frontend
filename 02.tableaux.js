var villes = ["Nantes","Paris","St-Nazaire","Angers","Le Mans"];

//foreach
villes.forEach(function(v){
    console.log(v)}
)

//every
villes.every(function(v){
    console.log("lettreADansToutesVilles ==", (v.indexOf('a') > -1)) 
});

//some
var resTiret = villes.some(function(v){
    return v.indexOf('-') > -1;
});
console.log("auMoinsUneVilleAvec- == ", resTiret );

//filter
var villesSansTiretSansEspace = villes.filter(function(v){
    if(!(v.indexOf('-') > -1) && !(v.indexOf(' ') > -1)){
        return v
    }
});
console.log("villesSansTiretSansEspace ==",villesSansTiretSansEspace);

//chainer fonctions
var villesMajusculeSeTerminantParS = villes.filter(function(v){
    if(v.slice(-1) === 's'){
        return v;
    }
})
.map(function(v){
    return v.toUpperCase();
});
console.log("villesMajusculeSeTerminantParS ==",villesMajusculeSeTerminantParS);