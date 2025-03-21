// Importeer het npm package Express (uit de door npm aangemaakte node_modules map)
// Deze package is geïnstalleerd via `npm install`, en staat als 'dependency' in package.json
import express from 'express'

// Importeer de Liquid package (ook als dependency via npm geïnstalleerd)
import { Liquid } from 'liquidjs';


console.log('Hieronder moet je waarschijnlijk nog wat veranderen')
// Doe een fetch naar de data die je nodig hebt
// const apiResponse = await fetch('...')

// Lees van de response van die fetch het JSON object in, waar we iets mee kunnen doen
// const apiResponseJSON = await apiResponse.json()

// Controleer eventueel de data in je console
// (Let op: dit is _niet_ de console van je browser, maar van NodeJS, in je terminal)
// console.log(apiResponseJSON)


// Maak een nieuwe Express applicatie aan, waarin we de server configureren
const app = express()

// Gebruik de map 'public' voor statische bestanden (resources zoals CSS, JavaScript, afbeeldingen en fonts)
// Bestanden in deze map kunnen dus door de browser gebruikt worden
app.use(express.static('public'))

// Stel Liquid in als 'view engine'
const engine = new Liquid();
app.engine('liquid', engine.express()); 

// Stel de map met Liquid templates in
// Let op: de browser kan deze bestanden niet rechtstreeks laden (zoals voorheen met HTML bestanden)
app.set('views', './views')

// Maak een GET route voor de index (meestal doe je dit in de root, als /)


//get all the data from the api

app.get('/', async function (request, response){

  response.render('index.liquid', {
  });


})


// GET artObjectDetail
app.get('/art/:id/', async function (request, response){

  const artId = request.params.id;

  const apiResponse = await fetch(`https://fdnd-agency.directus.app/items/fabrique_art_objects/${artId}`);
  const apiResponseJSON = await apiResponse.json();

  response.render('artObjectDetail.liquid', {
    art: apiResponseJSON.data  
  });

})


//Ticketing
app.get('/tickets', async function (request, response){

  response.render ('ticketing.liquid')
})





// Maak een POST route voor de index; hiermee kun je bijvoorbeeld formulieren afvangen
// Hier doen we nu nog niets mee, maar je kunt er mee spelen als je wilt
app.post('/like/:id', async function (request, response) {
  // Je zou hier data kunnen opslaan, of veranderen, of wat je maar wilt
  // Er is nog geen afhandeling van een POST, dus stuur de bezoeker terug naar /
  console.log(request.params.id + "is geliked! Cool!");

  let response2 = await fetch("https://fdnd-agency.directus.app/items/fabrique_users_fabrique_art_objects", {
    method: "POST",
    body: JSON.stringify({
      "fabrique_users_id": 5,
      "fabrique_art_objects_id": request.params.id

    }),
    headers: {
      'Content-Type': 'application/json'
    },
  })
  console.log(response2)
  response.redirect(303, '/')
})

//404 handle

app.use((request, response, next) => {
  response.status(404).render("404.liquid")
})

// Stel het poortnummer in waar Express op moet gaan luisteren
// Lokaal is dit poort 8000, als dit ergens gehost wordt, is het waarschijnlijk poort 80
app.set('port', process.env.PORT || 8000)

// Start Express op, haal daarbij het zojuist ingestelde poortnummer op
app.listen(app.get('port'), function () {
  // Toon een bericht in de console en geef het poortnummer door
  console.log(`Application started on http://localhost:${app.get('port')}`)
})
