const express = require('express');
const db = require('./models');

const app = express();

app.use(express.urlencoded({extended: false}));

//read one record
app.get('/patterns/:id', function (req, res) {
    db.pattern.findOne({
        where: {id: parseInt(req.params.id)}
    }).then(function(data) {
        res.json(data);
    });
});

//read all records
app.get('/patterns', function (req, res) {
    db.pattern.findAll().then(function(data){
        res.json(data);
    });
});

//create one record
app.post('/patterns', function (req, res) {
    db.pattern.create({
        name: req.body.name,
        type: req.body.type,
        difficulty: req.body.difficulty,
        weight: req.body.weight,
        yardage: req.body.yardage
    }).then(function(data) {
        res.json(data);
    });
});

//update one record
app.put('/patterns/:id', function (req, res) {
    db.pattern.update({
        name: req.body.name,
        type: req.body.type,
        difficulty: req.body.difficulty,
        weight: req.body.weight,
        yardage: req.body.yardage
    }, {
        where: {id: parseInt(req.params.id)}
    }).then(function(data){
        res.json(data);
    });
});

//delete one record
app.delete('/patterns/:id', function (req, res) {
    db.pattern.destroy({
        where: {id: parseInt(req.params.id)}
    }).then(function(data) {
        res.json(data);
    })
});

app.listen(3000, function () {
    console.log('MST 3000');
});