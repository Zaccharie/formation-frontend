var service = require("./service");
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var recursiveAsyncReadLine = function () {
    
    console.log("*** Application Conference ***");
    console.log("1. Liste de tous les présentateurs");
    console.log("2. Top présentateurs");
    console.log("3. Liste des sessions");
    console.log("4. Détail d'une session");

    rl.question('', (answer) => {
        if (answer == 1) {
            service.afficherPresentateur().forEach(function (e) {
                console.log("NOM", e.lastname, "PRENOM", e.firstname);
            });
            recursiveAsyncReadLine();
        }
        if (answer == 2) {
            service.afficherTopPresentateur().forEach(function (e) {
                console.log("NOM", e.lastname, "PRENOM", e.firstname);
            });
            recursiveAsyncReadLine();
        }
        if (answer == 3) {
            service.afficherSessions().forEach(function (e) {
                console.log("TITRE SESSION", e.title);
            })
            recursiveAsyncReadLine();
        }
        if (answer == 4) {
            rl.question('session id:', (answer) => {
                service.afficherDetailSession(answer).forEach(function (e) {
                    console.log("DESC:", e.desc);
                    e.speakers.forEach(function (pres) {
                        console.log("SPEAKER:", pres);
                    })
                })
                recursiveAsyncReadLine();
            })
        }
        if (answer == 'q') {
            rl.close();
        }
    });
}
recursiveAsyncReadLine();
