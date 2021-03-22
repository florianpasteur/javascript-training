

export function welcome(language, name) {
    return translation[language].welcome + ' ' + name
}

export function bye(language, name) {
    return translation[language].bye + ' ' + name
}

