const express = require('express');
const mongoose = require('mongoose');
const app = express();
const ejs = require('ejs');
const { kStringMaxLength } = require('buffer');


//set your view engine as ejs
app.set('view engine', 'ejs');

app.use(express.static("public"));

// making a connection to mongoDB
mongoose.connect('mongodb+srv://admin:admin@cluster0.vhgy3.mongodb.net/productsDB?retryWrites=true&w=majority');

//creating a product Model
const productsSchema = {
    type: String,
    description: String,
    image: String,
    category: String,
    price: String
}

const Product = mongoose.model('Product', productsSchema);

//getting all results in product and rendering
app.get('/', (req, res) => {
    Product.find({}, function (err, products) {
        res.render('index')
    })
})

//Getting all views routes
app.get('/index', (req, res) => {
    res.render('index');
})

app.get('/products', (req, res) => {
    Product.find({}, function (err, products) {
        res.render('products', {
            productsList: products
        })
    })
})

app.get('/about', (req, res) => {
    res.render('about');
})

app.get('/contact', (req, res) => {
    res.render('contact');
})

app.get('/faqs', (req, res) => {
    res.render('faqs');
})

app.get('/login', (req, res) => {
    res.render('login');
})


app.listen(8000, function () {
    console.log('server is running');
})
