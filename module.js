const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const linkScheam = new Schema({
    link: String
});

const Link = mongoose.model('Link', linkScheam);

module.exports = Link;