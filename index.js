const express = require('express');
const app = express();

const users = [
  { id: 0, name: 'Pepe' }, 
  { id: 1, name: 'Juan' }
];

app.get('/users', (req, res) => {
  res.json(users);
});

app.get('/users/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  const user = users.find(user => user.id === userId);
  if(user) res.json(user); else res.send('Usuario no encontrado');
});

app.get('/users/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  const user = users.find(user => user.id === userId);
  if(user) res.json(user); else res.send('Usuario no encontrado');
});


app.listen(3000, () => console.log('Ready on port 3000!'));
