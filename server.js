const express = require('express')
const app = express()
const port = 3000



//* Routes
app.get('/', (req, res) => {
    res.send(`<h1>99 Bottles of beer on the wall. <a href="/98">take one down</a></h1>`)
})

app.get('/:numb', (req, res) => {
    const n = req.params.numb
    const updatedNumb = n-1
    res.send(`Number of bottles is ${updatedNumb}`)
})

app.listen(port, () => {
    console.log(`App is running on port: ${port}`)
})