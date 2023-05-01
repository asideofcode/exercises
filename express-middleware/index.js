const express = require('express');
const app = express();



app.get('/public', (req, res) => {
  res.send('This is definitely not secret!');
});

app.get('/protected', (req, res) => {
  res.send('This is top secret!');
});

// Start the server
if (require.main === module) {
  app.listen(3000, () => {
    console.log('Server started on port 3000');
  });
}

module.exports = app;
