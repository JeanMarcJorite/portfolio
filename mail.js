const password = "A4ACF0DBCF3FAF567B2E702157ECDD352E44"
const username = "t12150724@gmail.com"
const server = "smtp.elasticemail.com"
const port = "2525"


const emailUserValide =  new RegExp("^[a-zA-Z0-9.-]*[a-zA-Z0-9]@[a-zA-Z0-9.-]+\.(org|fr|gouv|net|info|arpa|com|edu)$");
/// Faire les conditions de comment le mail doit être écrit new RegExp("[a-zA-Z0-9.-]+[a-zA-Z0-9]$+@[a-zA-Z0-9.-]+\.(org|fr|gouv|net|info|arpa|com|edu)$") 
                        
document.getElementById("myForm").addEventListener("submit", (event) => {
    event.preventDefault();
    if(emailUserValide.test(document.getElementById("email").value))
        ContactContent();
    else{
        alert("le mail n'est pas valide");
    }
})

function ContactContent() {
    let nomClient = document.getElementById('nom').value;
    console.log(nomClient);

    let mailClient = document.getElementById('email').value;
    console.log(mailClient);

    let messageClient = document.getElementById('message').value;
    console.log(messageClient);

    sendEmail(mailClient, nomClient, messageClient);
}


function sendEmail(senderEmail, name, message){
    Email.send({
        Host : server,
        Username : username,
        Password : password,
        To : 'jeanmarcjorite38@gmail.com',
        From : senderEmail,
        Subject : "Contact pour taff",
        Body : `Nom : ${name} 
                <br> Email : ${message}
                `
    }).then(
        message => alert("sent success ")
      );
}
