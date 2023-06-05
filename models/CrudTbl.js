const mongoose = require('mongoose');

const crudScema = mongoose.Schema({
    movieName : {
        type : String,
        required : true
    },
    director : {
        type : String,
        required : true
    },
    writer : {
        type : String,
        required : true
    },
    actor : {
        type : String,
        required : true
    },
    language : {
        type : Array,
        required : true
    },
    country : {
        type : String,
        required : true
    },
    movieType : {
        type : String,
        required : true
    },
    poster: {
        type: String,
        required: true
    },
});

const crud = mongoose.model('crud',crudScema);
module.exports = crud;