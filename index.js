const express = require('express')
const path = require('path')
const exphbs = require('express-handlebars')
const app = express()
const port = 3000

app.use(express.static(path.join(__dirname, 'public')))


const hbs = exphbs.create({
    defaultLayout: 'main',
    extname: 'hbs'
})

// Routes
const homeRouter = require('./routes/home')
const addRouter = require('./routes/add')

app.use(express.urlencoded({ extended: true }))

app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')
app.set('views', 'views')

app.use('/', homeRouter)
app.use('/add', addRouter)

app.listen(port, () => {
    console.log(`Express working on ${port} port`);
})