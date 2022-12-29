const express = require('express');
const app = express();
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'root', 
    database: 'dojjan'
})

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));

app.post("/api/post", (req, res) => {

    const title = req.body.title;
    const description = req.body.description;
    const price = req.body.price;
    const image = req.body.image;

    const sqlInsert = "INSERT INTO products (title, description, price, image) VALUES (?, ?, ?, ?)";
    db.query(sqlInsert, [title, description, price, image], (err, result) => {
        console.log(result);

    })
})

app.post("/admin/register", (req, res) => {

    const username = req.body.username;
    const password = req.body.password;

    const sqlInsert = "INSERT INTO admins (username, password) VALUES (?, ?)";
    db.query(sqlInsert, [username, password], (err, result) => {
        console.log(err);

    })
})

app.post("/admin/login", (req, res) => {

    const username = req.body.username;
    const password = req.body.password;

    const sqlInsert = "SELECT * FROM admins WHERE username = ? AND password = ?";
    db.query(sqlInsert, [username, password], (err, result) => {
        console.log(result);

    })
})

app.get('/api/get', (req, res) => {
    const sqlGet = "SELECT * FROM products";
    db.query(sqlGet, (err, result) => {
        res.send(result);

    })
})

app.get('/', (req, res) => {
    // const sqlInsert = "INSERT INTO products (title, description, price) VALUES ('adidas', 'black', '220');"
    // db.query(sqlInsert, (err, result) => {
    //     res.send("hello world!!");
    // })
});

app.listen(3001, () => {
    console.log("running on port 3001");
});