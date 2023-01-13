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

/* POST */

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

/* REGISTER */

app.post("/admin/register", (req, res) => {

    const username = req.body.username;
    const password = req.body.password;

    const sqlInsert = "INSERT INTO admins (username, password) VALUES (?, ?)";
    db.query(sqlInsert, [username, password], (err, result) => {
        console.log(err);

    })
})

/* LOGIN */

app.post("/admin/login", (req, res) => {

    const username = req.body.username;
    const password = req.body.password;

    const sqlInsert = "SELECT * FROM admins WHERE username = ? AND password = ?";
    db.query(sqlInsert, [username, password], (err, result) => {
        if (err) {
            res.send({err: err})
        }
        if (result.length > 0) {
            res.send(result);
        } else {
            res.send({ message: "fel användarnamn/lösenord!"})
        }

    })
})

/* GET */

app.get('/api/get', (req, res) => {
    const sqlGet = "SELECT * FROM products";
    db.query(sqlGet, (err, result) => {
        res.send(result);

    })
})

/* SINGLE GET */

app.get('/api/get/:id', (req, res) => {
    const { id } = req.params;
    const sqlGet = "SELECT * FROM products WHERE id = ?";
    db.query(sqlGet, [id], (err, result) => {
        res.send(result);

    })
})

app.get('/api/getId3', (req, res) => {
    const sqlGet = "SELECT * FROM products WHERE id = 3";
    db.query(sqlGet, (err, result) => {
        res.send(result);

    })
})

app.get('/api/getId7', (req, res) => {
    const sqlGet = "SELECT * FROM products WHERE id = 7";
    db.query(sqlGet, (err, result) => {
        res.send(result);

    })
})

/* DELETE */

app.delete('/api/delete', (req, res) => {
    const title = req.body.title
    const sqlDelete = "DELETE FROM products where title = ?";
    db.query(sqlDelete, title, (err, result) => {
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