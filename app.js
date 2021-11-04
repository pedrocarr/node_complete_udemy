const express = require('express');

const app = express();


app.use('/add-product', (req, res, next) => {
    res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit"')
});


app.use('/', (req, res, next) => {
    console.log("In other middleware!");
    res.send('<h1>Hello from Express!</h1>');
})

app.listen(3000, () => {
    console.log("server is now running!");
});