const mongoose = require('mongoose')

const Schema = mongoose.Schema

const projectSchema = new Schema({
    photosURLs: [
        {
            type: String,
            validate: {
                validator: function (value) {
                    const urlPattern = /(http|https):\/\/(\w+:{0,1}\w*#)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%#!\-/]))?/;
                    const urlRegExp = new RegExp(urlPattern);
                    return value.match(urlRegExp);
            },
                message: props => `${props.value} is not a valid URL`
            }
        }
    ],
    name: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    },
    gitLink: {
        type: String,
        required: true
    },
    techUsed: [{
        type: String,
        required: true
    }],
    description: {
        type: String,
        required: true
    }
}, {
    timestamps: true    
})


module.exports = mongoose.model('Project', projectSchema)