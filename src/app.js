const express = require('express')
const app = express()
const bodyparser = require('body-parser')
const port = process.env.PORT || 3000

//create an array to store Flight Detail in Json Object
var FlightDetails = [
    {
        flightName: "indigo",
        price: "2000",
        Source: "Delhi",
        Destination: "Jaipur",
    },
    {
        flightName: "airAsia",
        price: "2500",
        Source: "Delhi",
        Destination: "Jaipur",
    },
    {
        flightName: "vistra",
        price: "3000",
        Source: "Delhi",
        Destination: "Jaipur",
    }

]

app.post("/flightsByLocation", (req, res) => {
    console.log(req.query.Source)
    var price = {};
    FlightDetails.forEach(element => {
        if (element.Source == req.query.Source && element.Destination == req.query.Destination) {
            price[element.flightName] = element.price;
        }
    })
    res.status(200).json(price)
})



app.listen(port, () => {
    console.log('server is running on port' + port)
})