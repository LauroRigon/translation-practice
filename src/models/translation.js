const mongoose = require('mongoose')

const LANG_PTBR = 1;
const LANG_EN = 2;

const LANG_LIST = {
    [LANG_EN]: 'PT-BR',
    [LANG_PTBR]: 'EN'
}

const transationSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    fromLang: {
        type: Number,
        required: true,
    },
    toLang: {
        type: Number,
        required: true,
    },
    originalText: {
        type: String,
        required: true,
    },
    translationText: {
        type: String,
        required: false,
    },
    created: {
        type: Date,
        required: true,
        default: Date.now
    }
})

module.exports = {
    LANG_PTBR,
    LANG_EN,
    LANG_LIST,
    Translation: mongoose.model('Translation', transationSchema),
}