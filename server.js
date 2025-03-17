/*** Express setup & start ***/


//Import function fetchJson from ./helpers folder
import fetchJson from './helpers/fetch-json'

//import express from node_modules folder
import express from 'express'

// set base endpoint
const apiURL = 'https://fdnd-agency.directus.app/admin/content'
const items = apiURL + '/oba_profile'
const families = apiURL + '/oba_family'
const profiles = apiURL + '/oba_item'
const books = apiURL + '/books'
const activities = apiURL + '/activities'
const cds = apiURL + '/cds'

//create new express app
const app = express()

//set ejs as template engine
//View engine ensures that the data from the api creates html of the ejs code
app.set ('view engine', 'ejs')

//set ejs template folder

app.set ('views', './views')


// Use folder public for static resources
app.use(express.static('public'))

// ensure it's easy to work with request data
app.use(express.urlencoded({ extended: true }));

//routes
// index GET route
app.get('/', function (request, response) {
    fetchJson(items).then((items) => {
        // apiData consists of data needed
        // Option to filter, sort, etc. before passing on to view
        
        // Render index.ejs from views folder and pass along fetched data as variables.

        
        // create HTML based on JSON data
        response.render('index', {
            items: items.data})
    })
})

// Details GET route
app.get('/detail/:id', function (request, response) {
    // Use request parameter id and fetch the correct data from directus.app
    fetchJson(apiUrl + '/oba_item/' + request.params.id).then((items) => {
        // Place console.log to see items
        console.log(items);

        // Render person.ejs from views folder and pass along fetched data as variables.
        response.render('detail', {
            items: items.data
        });
    });
});

// chooseprofile GET route
// chooseProfile GET route
app.get('/chooseProfile', function (request, response) {
    // create 2 apart fetch requests for families and profiles
    Promise.all([fetchJson(families), fetchJson(profiles)])
        .then(([families, profiles]) => {
            // families and profiles consist of fetched data from API
            console.log(families);
            console.log(profiles);

            // Render chooseProfile view and pass along fetched data
            response.render('chooseProfile', {
                families: families.data,
                profiles: profiles.data
            });
        })
        .catch((error) => {
            // For errors that might occur while fetching data
            console.error('Error fetching data:', error);
            // Sent error message to user
            response.status(500).send('Error fetching data');
        });
});

// Personal GET route
app.get('/personal/:id', function (request, response) {
    // Use request parameter id and fetch the correct data from directus.app
    fetchJson(items).then((items) => {
        // Place console.log to see items

        // Render person.ejs from views folder and pass along fetched data as variables.
        response.render('personal', {
            items: items.data
        });
    });
});


//Start web server
// Set Portnumber for express to listen
app.set('port', process.env.PORT || 8080)

// Start express, get the correct set portnumber
app.listen(app.get('port'), function () {
    // show a message in console and give portnumber
    console.log(`Application started on http://localhost:${app.get('port')}`)
})