var moduleDevFest = require('./data/devfest-2015');

function listerTousLesPresentateurs(){
    return moduleDevFest.speakers;
}

function listerToutesLesSessions(){
    return moduleDevFest.sessions;
}

function trouverUneSession(idSession){
    return listerToutesLesSessions().filter(function(e){
        return e.id === idSession;
    })
}

function listerTopPresentateur(){
    return listerTousLesPresentateurs().filter(function(e){
        return e.topspeaker === true;
    })
}

exports.afficherPresentateur = listerTousLesPresentateurs;
exports.afficherTopPresentateur = listerTopPresentateur;
exports.afficherSessions = listerToutesLesSessions;
exports.afficherDetailSession = trouverUneSession;