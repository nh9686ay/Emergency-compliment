const express = require("express")
const app = express()
require(`hbs`)
app.set('view engine', 'hbs')

app.get(`/`, (req, res) => {
    const compliments = [
        "Your instructors love you",
        "High five = ^5",
        "Is it Ruby Tuesday yet?",
        "It's almost beer o'clock",
        "The Force is strong with you"
    ]

    const colors = ["#FFBF00", "#0080FF", "#01DF3A", "#FF0080"]
    let random = (myVar) => Math.floor(Math.random() * myVar.length)
    hello = `hello`

    console.log(random)
    res.render('index', {
        randomComp: compliments[random(compliments)],
        randomColor: colors[random(colors)]
    })

})

app.get(`/:name`, (req, res) => {
    name = (req.params.name) + ' ,'
    const compliments = [
        "Your instructors love you",
        "High five = ^5",
        "Is it Ruby Tuesday yet?",
        "It's almost beer o'clock",
        "The Force is strong with you"
    ]

    const colors = ["#FFBF00", "#0080FF", "#01DF3A", "#FF0080"]
    let random = (myVar) => Math.floor(Math.random() * myVar.length)
    hello = `hello`

    console.log(random)
    res.render('index', {
        name,
        randomComp: compliments[random(compliments)],
        randomColor: colors[random(colors)]
    })

})

app.listen(4000, () => {
    console.log("app listening on port 4000")
})