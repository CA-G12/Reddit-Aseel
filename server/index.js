const { join } = require('path');
const compression = require('compression');
const express= require('express');
const app= express();
const port = process.env.PORT||5000;

app.listen(port, () => {
  console.log(`server in running now in  http://localhost:${port}/`);
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(compression());

app.use(express.static(join(__dirname, '..', 'public')));
