document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    // Récupérer les valeurs 
    var nom = document.getElementById('name').value;
    var email = document.getElementById('email').value;

    // Pour vérifier
    console.log('Nom: ' + nom);
    console.log('E-mail: ' + email);

    // Envoie des données à un serveur via fetch API
    fetch('/ ici mettre endpoint', { // [~~~~ENDPOINT ICI~~~~]
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nom: nom, email: email }),
    })
    .then(response => response.json())
    .then(data => {
        console.log('Succès:', data);
        alert('Merci pour votre message !');
    })
    .catch((error) => {
		alert("Une erreur s'est produite, réessayer ultérieurement");
        console.error('Erreur:', error);
    });
});