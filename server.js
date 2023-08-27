const express = require('express')
const app = express()
const port = 3000



//* Routes
app.get('/', (req, res) => {
    res.send(`<h1>99 Bottles of beer on the wall. <a href="/98">take one down</a></h1>`)
})

app.get('/:numb', (req, res) => {
    const n = req.params.numb
    const { numb } = req.params
    const updatedNumb = numb -1
    if (numb <= 0){
        return res.send('<h1><a href="/">Start over</a></h1>')
    }
    res.send(`<h1>Number of bottles is ${updatedNumb} <a href="/${updatedNumb}">Take one down!</a></h1>`)
})

app.listen(port, () => {
    console.log(`App is running on port: ${port}`)
})