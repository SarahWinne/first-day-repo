var express = require('express');
var router = express.Router();
var app = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// GET users and their info
let users = [
  { id: 1, name: 'Alice', email: 'alice@example.com' },
  { id: 2, name: 'Bob', email: 'bob@example.com' }
];

app.get('/users', (req, res) => {
  res.json(users); // Respond with the list of users
});

// POST users and their info
app.post('/users/new', function(req, res, next) {
  var id= req.params.id;
  var name= req.body.name;
  var email= req.body.email;
  var newUser = {id:id, name:name, email:email}
  var user=readFile();
  user.push(newUser);
  writeFile(note);
  res.render('index', { title: 'Users', data: user, currentDate: Date.now()});
});

// PUT 
app.put('/users/edit/:id', function(req, res, next) {
  var id= req.params.id;
  var name= req.body.name;
  var email= req.body.email;
  var newNote = {id:id, name:name, email:email}
  var user=readFile();
  const index = note.findIndex(n => n.createdAt == id)
  if (index !== -1) {
    user[index] = newUser;
  }
  writeFile(user);
  res.render('index', { title: 'Users', data: user, currentDate: Date.now()});
});

// DELETE user
app.delete('/notes/delete/:id', function(req, res, next) {
  var id= req.params.id;
  var user=readFile();
  user = user.filter(users => users.createdAt !== id); 
  writeFile(user);
  res.render('index', { title: 'Users', data: user, currentDate: Date.now()});
});



module.exports = router;
