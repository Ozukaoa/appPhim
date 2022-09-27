
const Course = require('./app/model/Course')
const path =require('path')
const express = require('express')
const morgan = require('morgan')
var cors = require('cors')
const handlebars = require('express-handlebars')
const db = require('./config/db')
const app = express()
var methodOverride = require('method-override')
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const port = 3000

const routes = require('./routes')
app.use(cors())

app.use(methodOverride('_method'))
db.connect();
app.use(morgan('combined'))

app.engine('hbs', handlebars.engine(
  {extname:".hbs"}
));

app.set('view engine', 'hbs');
app.set('views',path.join(__dirname, 'resources', 'views'))

routes(app);





 









app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})