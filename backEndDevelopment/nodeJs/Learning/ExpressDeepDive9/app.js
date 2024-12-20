// External Module
const express = require('express');
const bodyParser = require('body-parser');      //*

const app = express();

app.use((req, res, next) => {
    console.log(`First dummy middleware`, req.url, req.method);
    next();
});
app.use((req, res, next) => {
    console.log(`Second dummy middleware`, req.url, req.method);
    next();
});

// app.use((req, res, next) => {
//     console.log(`Third dummy middleware`, req.url, req.method);
//     res.send("<h1> Welocome to Third Middleware</h1>");
// });

app.get("/",(req, res, next) => {
    console.log(`Handling / for GET `, req.url, req.method);
    res.send("<h1> Welocome to Fourth Middleware</h1>");
});

app.get("/contact_us",(req, res, next) => {
    console.log(`Handling CONTACT_US for GET`, req.url, req.method);
    res.send(`
        <h1>Please give your details here</h1>
        <form action="/contact_us" method="POST">
            <input type="text" name="name" placeholder="Enter your name" />
            <input type="email" name="email" placeholder="Enter your email" />
            <input type="submit" />
            
    `);
});

app.post("/contact_us",(req, res, next) => {
    console.log(`First Handling for /contact_us POST `, req.url, req.method, req.body);
    next();
});

app.use(bodyParser.urlencoded());

app.post("/contact_us",(req, res, next) => {
    console.log(`Handling /constact_us for POST `, req.url, req.method, req.body);
    res.send(`<h1> We will contact you shortly....!`);
});

const PORT = 3002;
app.listen(PORT, () => {
    console.log(`Server running on address http://localhost:${PORT}`);
})
