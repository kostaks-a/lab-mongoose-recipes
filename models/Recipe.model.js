const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const recipeSchema = new Schema({
  title : {
    type : String,
    required : true,
    unique : true,
  },
  level : {
    type: String,
    enum: ["Easy Peasy","Amateur Chef","UltraPro Chef"]
  },
  ingredients: [ String ],
  cuisine: String,
  dishType : {
    type : String,
    enum: ["breakfast","main_course","soup","snack","drink","dessert","other"],
  },
  image : {
    type: String,
    default : 'https://images.media-allrecipes.com/images/75131.jpg',
  },
  duration: Number,
  creator : String,
  created : {
    type: Date,
    default: '02-02-2023',
  }
});

const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;
