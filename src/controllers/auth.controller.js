import User from '../models/user.models.js'
import bcrypt from 'bcryptjs'

export const register = async (req, res) => {
    const { username, email, password } = req.body
    try {
        const passwordHash = await bcrypt.hash(password, 10)
        const newUser = new User({username, email, password: passwordHash})
        const userSaved = await newUser.save()
        res.status(201).json({
            id: userSaved._id,
            username: userSaved.username,
            email: userSaved.email
        })
    } catch (error) {
        res.status(500).json({messahe: error.message})
    }
     
}



export const login = (req, res) => res.send('login')