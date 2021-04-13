const express = require('express');
const mongoose = require('mongoose');
const app = express();
const ejs = require('ejs');
const { kStringMaxLength } = require('buffer');


//set your view engine as ejs
app.set('view engine', 'ejs');

app.use(express.static("public"));

// making a connection to mongoDB
mongoose.connect('mongodb+srv://admin:admindorset@cluster0.vhgy3.mongodb.net/productsDB?retryWrites=true&w=majority');

//creating a product Model
const productsSchema = {
    name: String,
    description: String,
    image: String,
    category: String,
    price: String
}

//Get schema
const Product = mongoose.model('Product', productsSchema);

//Getting all results in product and rendering
app.get('/', (req, res) => {
    Product.find({}, function (err, products) {
        res.render('index')
    })
})

//Getting all views routes
app.get('/index', (req, res) => {
    res.render('index');
})

//Request to find the product according to the category
app.get('/products', (req, res) => {
    let category;
    Product.find({}, function (err, products) {
        res.render('products', {
            category,
            productsList: products,
            query: "Hello World"
        })
    })
})

//Whenever the Search button is pressed, find the product according to the category
app.get('/actionProduct/:category', (req, res) => {
    let category,
        product;
    Product.find({ "category": { $regex: '.*' + req.params.category + '.*' } }, function (err, products) {

        res.render('actionProduct', {
            category, product,
            productsList: products,
            query: "Hello World"
        })
    })
})

//Render each page of the application
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

app.get('/exclusive', (req, res) => {
    res.render('exclusive');
})

//Find product by id and render page
app.get('/:id', function (req, res) {
    console.log("I am rendering this page as well");
    Product.find({ _id: req.params.id }, function (err, product) {
        res.render('productView', { product: product });
    });
})

app.get('/', function (req, res) {
    res.render('actionProduct', { query: "Hello World" })
});

//Echo message so we know the server is working fine
app.listen(8000, function () {
    console.log('server is running');
})
