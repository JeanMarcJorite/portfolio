const express = require('express');
const app = express();
const fs = require('fs');

// Rend les fichiers dans le répertoire 'css' accessibles
app.use(express.static('css'));

app.get('/', (req, res) => {
  fs.readFile('index.html', function(err, data) {
    if (err) {
      res.status(500).send('Erreur lors de la lecture du fichier index.html');
    } else {
      res.setHeader('Content-Type', 'text/html');
      res.send(data);
    }
  });
});

app.listen(8080, 'localhost', () => {
  console.log('Le serveur est en cours d\'exécution sur http://localhost:8080/');
});
