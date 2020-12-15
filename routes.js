const express = require('express')
const routes = express.Router()

routes.get('/', function(req, res) {
    return res.redirect("/home")
})

routes.get('/home', function(req, res) {
    return res.render("files/home")
})

routes.get('/plans', function(req, res) {
    return res.render("files/plans")
})

routes.get('/members', function(req, res) {
    return res.render("files/members")
})

routes.get('/units', function(req, res) {
    return res.render("files/units")
})

routes.get('/instructors', function(req, res) {
    return res.render("files/instructors")
})

module.exports = routes