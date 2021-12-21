const express = require('express');
const cors = require('cors');
const dayjs = require('dayjs');

const app = express();
const port = 5000;

const users = [];

app.use(cors());
app.use(express.json());

app.post('/login', (req, res) => {
  const { username, password } = req.body;

  const user = users.find((user) => user.username === username && user.password === password);
  if (user) {

    console.log(`Login succeed: `, username);

    res.send({
      token: 'jdsfjw3fjwfj',
      id: user.id
    });
  } else {
    res.status(400).send({
      error: 'Invalid username or password!'
    });
  }
});

app.post('/signup', (req, res) => {
  const { firstName, lastName, username, password, gender } = req.body;

  if (!firstName || !lastName || !username || !password) {
    res.status(400).send({
      error: 'Invalid parameters: firstName, lastName, username, password can not be empty!'
    });
    return;
  }

  if (users.some(user => user.username === username)) {
    res.status(400).send({
      error: 'Username already exists!'
    });
    return;
  }

  console.log(`Signup succeed with name: `, username);

  users.push({
    id: users.length + 1,
    firstName,
    lastName,
    username,
    password,
    gender,
    createdAt: new Date()
  })

  res.status(201).send();
});

app.get('/user/:id/profile', (req, res) => {
  const id = req.params.id;
  const user = users.find(user => `${user.id}` === `${id}`);

  if (user) {
    const { password, ...rest } = user;
    res.send(rest);
  } else {
    res.status(404).send({
      error: `Can not find user with ID: ${id}`
    });
  }
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});