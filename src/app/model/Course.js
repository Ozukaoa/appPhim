const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const slug = require('mongoose-slug-generator');
mongoose.plugin(slug);

const Course = new Schema({
    name: {type: String, maxLength:255},
    image: {type: String, maxLength:255},
    year: {type: String, maxLength:255},
    describe: {type: String, maxLength:255},
    slug: {type: String, slug:'name',unique: true},
    videoId: {type: String, maxLength:255},
    episodes:[Object],
    category:[String],
    country:{type: String, maxLength:255},
    }
    
    ,
    {timestamps: true},



    
);

module.exports = mongoose.model('coures',Course)