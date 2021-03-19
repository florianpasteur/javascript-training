const translation = require('./translation');

module.exports = {
    welcome(language, name) {
        return translation[language].welcome + ' ' + name
    },
    bye(language, name) {
        return translation[language].bye + ' ' + name
    }
};
