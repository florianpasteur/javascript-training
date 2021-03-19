module.exports = (function () {

    const positions = [
        {
            code: 'FR',
            keywords: ['FR', 'France', 'Paris']
        },
        {
            code: 'BE',
            keywords: ['BE', 'Belgium', 'Belgie', 'Belgien', 'Bruxelles', "Brüssel", 'Brussel', 'Brussels']
        },
        {
            code: 'NL',
            keywords: ['NL', 'The Netherlands', 'Netherlands', 'Amsterdam']
        },
    ];

    return {
        myPosition: () => {
            return positions[Math.floor(Math.random() * 2)]
        },
        findLocation: (keyword) => {
            return positions.find(position => position.keywords.find(word => word.indexOf(keyword) >= 0));
        }
    }
})();
