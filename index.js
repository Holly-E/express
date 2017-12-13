const express = require('express')
const app = express()
//need to set view engine to handlebars
app.set('view engine', 'hbs')

//Using Express, if you go to localhost:3000/names/Holly you will see "Hello Holly"
// app.get('/names/:name', (request, response) => {
//   const name = request.params.name
//   response.send(`Hello ${name}`)
// })

// //Below is done with handlebars template engine - many to choose from
// app.get('/', (req, res) => {
//   //will pull/display the greeting template from the views folder
//   res.render('greeting')
// })

app.get('/', function (req, res) {
  res.render('greeting', { name: "Viking" })
})

app.get('/person/:personName', (req, res) => {
  const personName = req.params.personName
  // the second argument in render is the data that will be embedded in the template
  res.render('greeting', {name: personName})
})

//take advantage of middleware with .use
app.use((req, res, next) => {
  console.log(`${req.url} - ${new Date()}`)
  //have to call next() with middleware or will get stuck in a permanent loop!
  next()
})


app.listen(3000, () => {
  console.log('App has started!')
})
