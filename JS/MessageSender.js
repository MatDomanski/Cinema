function send(nomeFilme) {
    sessionStorage.setItem("filme", nomeFilme);
    window.location.href = "filme.html";
 }

 function sendGenero(genero) {
    sessionStorage.setItem("genero", genero);
    window.location.href = "genero.html";
 }