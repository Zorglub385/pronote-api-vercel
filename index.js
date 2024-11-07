const pronote = require('pronote-api');

module.exports = async (req, res) => {
    const url = 'https://demo.index-education.net/pronote/';
    const username = 'demonstration';
    const password = 'pronotevs';

    try {
        // Connexion à Pronote
        const session = await pronote.login(url, username, password);

        // Récupération des notes
        const marks = await session.marks(); // Notes du trimestre

        // Envoi de la réponse JSON avec la moyenne
        res.json({
            average: marks.averages.student,
        });
    } catch (error) {
        // Gestion des erreurs
        res.status(500).json({ error: error.message });
    }
};
