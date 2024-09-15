const express = require('express');
const app = express();
const port = 8000;

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/login', (req, res) => {
  res.sendFile(__dirname + '/login.html');
});


app.get('/user', (req, res) => {
  res.json({
    code: 1,
    name: 'Jacob Philips',
    gender: 'male'
  });
});


app.get('/projects', function(req, res) {
  res.json([{
      projectcode: 101,
      technology: 'MEAN Full-stack',
      scope: 'development'
    },
    {
      projectcode: 101,
      technology: 'REST API Microservices',
      scope: 'support'
    }
  ]);
});


app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

