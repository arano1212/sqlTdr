const skills = require('../models/skills');

const createSkillController = async (req, res)=>{
    try {
        const skill = req.body
        const newSkills = await skills.createSkill(skill)
        res.status(201).json(newSkills)
    } catch (error) {
        console.error(error)
        res.status(400).json({message: 'no se pudo realizar la operacion '})
        
    }
};

const getAllSkillController = async (req, res)=>{
    try {
        const skill = await skills.getAllSkill()
        res.status(200).json(skill)
    } catch (error) {
        console.error(error)
        res.status(400).json({message: 'informacion no encontrada'})
        
    }
};

const getSkillIdController = async(req, res) =>{
    try {
        const idSkill = req.params.id
        const userSkill = await skills.getSkillById(idSkill)
        if (userSkill.length === 0) {
            res.status(404).json({ message: 'skill no encontrada' })
        } else {
            res.status(200).json(userSkill[0])
        }
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: 'error en el servidor' })
    }
};

const updateSkillController = async(req, res)=>{
    try {
        const idSkill = req.params.id
        const bodyToUpdate = req.body
        const updateSkill = await skills.updateSkill(idSkill, bodyToUpdate)
        res.status(200).json(updateSkill)
          
       } catch (error) {
           console.error(error)
           res.status(400).json({error: 'no se pudo realziar la solicitud'})
           
       }
};

const logicDeleteSkillController = async (req, res) => {
    try {
        const idSkill = req.params.id;
        await skills.logicDeleteSkill(idSkill);
        res.status(204).json();
    } catch (error) {
        console.error(error);
        res.status(400).json({ message: 'Error en la solicitud' });
    }
};

module.exports={
    createSkillController,
    getAllSkillController,
    getSkillIdController,
    updateSkillController,
    logicDeleteSkillController
}