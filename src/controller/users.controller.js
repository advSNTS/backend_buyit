import { User } from "../models/User.js"

export const getUsers = async (req, res) => {
    const users = await User.findAll();
    return res.json(users);
}

export const createUser = async (req, res) => {

    const newUser = await User.create(req.body);
    return res.json(newUser);
}