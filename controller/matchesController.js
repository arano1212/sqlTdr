const matchesModels = require('../models/matches')

const createMatchController = async (req, res) => {
    try {
        const match = req.body;
        const newMatch = await matchesModels.createMatch(match)
        res.status(201).json(newMatch)
    } catch (error) {
        console.error(error)
        res.status(400).json({ message: 'tuvimos un error al realizar el registro' })
    }
};

const getAllMatchsController = async (req, res) => {
    try {
        const allMatches = await matchesModels.getAllMatches()
        res.status(200).json(allMatches)
    } catch (error) {
        console.error(error)
        res.status(400).json({ message: 'error en la solicitud' })
    }
};

const getOneMatchsController = async (req, res) => {
    try {
        const idMatch = req.params.id
        const match = await matchesModels.getOneMatch(idMatch)
        if (match.length === 0) {
            res.status(404).json({ message: 'match no encontrado' })
        } else {
            res.status(200).json(match[0])
        }
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: 'error en el servidor' })
    }
};

const updateMatchController = async (req, res) => {
    try {
        const idMatch = req.params.id
        const bodyToUpdate = req.body
        const updateMatch = await matchesModels.updateMatch(idMatch, bodyToUpdate)
        res.status(200).json(updateMatch)
    } catch (error) {
        console.error(error)
        res.status(400).json({ message: 'error en la solicitud' })
    }
};

const logicDeleteMatchController = async (req, res) => {
    try {
        const idMatch = req.params.id;
        await matchesModels.logicDeleteMatch(idMatch);
        res.status(204).json();
    } catch (error) {
        console.error(error);
        res.status(400).json({ message: 'Error en la solicitud' });
    }
};

const getMatchController = async (req, res) => {
    try {
        const allMatches = await matchesModels.getMatches()
        res.status(200).json(allMatches)
    } catch (error) {
        console.error(error)
        res.status(400).json({ message: 'error en la solicitud' })
    }
};

const getMatchstatusController = async (req, res) => {
    try {
        const allMatches = await matchesModels.getMatchesStatus()
        res.status(200).json(allMatches)
    } catch (error) {
        console.error(error)
        res.status(400).json({ message: 'error en la solicitud' })
    }
};

module.exports = {
    createMatchController,
    getAllMatchsController,
    getOneMatchsController,
    updateMatchController,
    logicDeleteMatchController,
    getMatchController,
    getMatchstatusController
}