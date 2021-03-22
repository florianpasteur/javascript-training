
const sentences = {
    welcome(language, name) {
        return translation[language].welcome + ' ' + name
    },
    bye(language, name) {
        return translation[language].bye + ' ' + name
    }
};
