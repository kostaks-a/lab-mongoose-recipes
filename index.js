const mongoose = require('mongoose');
mongoose.set('strictQuery', true);

// Import of the model Recipe from './models/Recipe.model.js'
const Recipe = require('./models/Recipe.model');
// Import of the data from './data.json'
const data = require('./data');

const MONGODB_URI = 'mongodb://localhost:27017/recipe-app';

// Connection to the database "recipe-app"
mongoose
  .connect(MONGODB_URI)
  .then(x => {
    console.log(`Connected to the database: "${x.connection.name}"`);
    // Before adding any recipes to the database, let's remove all existing ones
    return Recipe.deleteMany()
  })
  .then(() => {
    // Run your code here, after you have insured that the connection was made
  
  /*const greekSalad = {
    title : "Greek Salad",
    level : "Easy Peasy",
    ingredients : " Tomatoes , cucumber , onion , feta , olive oil , salt",
    cuisine : "Greek",
    dishType: "other",
    duration: 10,
    image : 'https://www.themediterraneandish.com/wp-content/uploads/2020/02/Greek-salad-recipe-3.jpg',
    creator: "Kostas",
    created: '02-02-2023',
  }
*/

  //const recipe1 = data[0];
  /*

  Recipe.create(recipe1)
  .then((rcp) => {
    console.log("Recipe created", rcp);
  })
  .catch((err) => {
    console.log("there was an error", err);
  });
*/
//////// Iteration 3 ///////////

  Recipe.insertMany(data)
  .then((recipes) => {
   recipes.forEach(rcp => {
    console.log('Recipe Name:' ,rcp.title)
   });
   ////////////////////////
   Recipe.findOneAndUpdate(
    {title: "Rigatoni alla Genovese"},
    {duration : 100},
  )
  .then((rcp) => {
    console.log ("Duration of recipe changed")
   })
   .catch((err) => {
     console.log("there was an error", err);
   });
   //////////////////////
   
   Recipe.findOneAndRemove({title: "Carrot Cake"})
  .then((deleted) => {
    console.log ("recipe deleted",)
  })
  .catch((err) => {
     console.log("there was an error", err);
  });
   
  })
  .catch((err) => {
    console.log("there was an error", err);
  });
  

  })
 
  .catch(error => {
    console.error('Error connecting to the database', error);
  });

