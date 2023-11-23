const mail = document.getElementById("email")
const nom = document.getElementById("nom")
const message = document.getElementById("message")

mail.addEventListener("change", (event) =>{
    const valeurMail = mail.value;
    if(valeurMail){
        console.log(valeurMail);
    }else{
        console.log("le champ est vide")
    }
})

nom.addEventListener("change", (event) =>{
    const valeurNom = nom.value;
    if(valeurNom){
        console.log(valeurNom);
    }else{
        console.log("le champ est vide")
    }
})

await document.getElementById("envoie").addEventListener("submit", (event) =>{
    event.preventDefault();
    console.log(mail.value)
})
