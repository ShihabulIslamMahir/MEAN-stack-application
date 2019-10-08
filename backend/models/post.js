//post model using mongoose
const mongoose = require('mongoose');

//create blue print how data will look like,in Schema we pass js object, it will hold our custom configuration
const postSchema = mongoose.Schema({
 title: { type : String, required: true },

 content: { type : String, required: true }

});

//Post is name of model, what schema we want to use? postSchema
module.exports = mongoose.model('Post', postSchema);
