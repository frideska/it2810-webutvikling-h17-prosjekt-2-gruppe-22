const express = require('express')
const nunjucks = require('nunjucks')

const HOST = process.env.P2_HOST || '0.0.0.0'
const PORT = process.env.P2_PORT || 8000

let app = express()

nunjucks.configure('server/views', {
    autoescape: true,
    express: app,
    watch: true
})

const anchors = [
    {anchor_button: "footer-anchor-button", name: "Earth", link: "/"},
    {anchor_button: "pictures-anchor-button", name: "Water", link: "/water"},
    {anchor_button: "description-anchor-button", name: "Forest", link: "/forest"},
    {anchor_button: "top-anchor-button", name: "Mountain", link: "/mountain"},
    {anchor_button: "top-anchor-button", name: "City", link: "/city"}
]

app.use('/public', express.static('./public'))

app.get('/', (req, res) => {
    res.render('earth.html', {anchors: anchors, active: req.path})
})
app.get('/water', (req, res) => {
    res.render('water.html', {anchors: anchors, active: req.path})
})
app.get('/forest', (req, res) => {
    res.render('forest.html', {anchors: anchors, active: req.path})
})
app.get('/mountain', (req, res) => {
    res.render('mountain.html', {anchors: anchors, active: req.path})
})
app.get('/city', (req, res) => {
    res.render('city.html', {anchors: anchors, active: req.path})
})

let server = app.listen(PORT, HOST, () => console.log('Project server running on: ' + HOST + ':' + PORT))