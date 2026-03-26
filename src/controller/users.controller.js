import { User } from "../models/User.js"

export const getUsers = async (req, res) => {
    const users = await User.findAll();
    return res.json(users);
}

export const createUser = async (req, res) => {

    const newUser = await User.create(req.body);
    return res.json(newUser);
}

export const updateUser = async (req, res) => {
    const id = req.params.id;
    const user = await User.findByPk(id);
    try{
        const updatedUser = await user.update(req.body);
        return res.json(updatedUser);
    }catch(error){
        console.log("Paila en update user");
    }
}

export const deleteUser = async (req, res) => {
    const id = req.params.id;
    const user = await User.findByPk(id);
    await user.destroy();
    return res.sendStatus(204);
}


export const getUserById = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findByPk(id);
        if (!user) {
            return res.status(404).json({ 
                message: "Usuario no encontrado" 
            });
        }

        return res.json(user);
    } catch (error) {
        console.error("Error en getUserById:", error);
    }
}