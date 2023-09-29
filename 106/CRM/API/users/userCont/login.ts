import { UserModel } from "../userModel";
import bcrypt from 'bcrypt';
import jwt from 'jwt-simple';
const { SECRET } = process.env
const secret = SECRET

export async function login(req: any, res: any) {
    try {
        const { email, password } = req.body
        if (!email || !password) {
            throw new Error("Please complete all fields")
        }
        const userDB = await UserModel.findOne({ email })
        if (!userDB) throw new Error("User not found");

        const { password: hash } = userDB
        if (!hash) throw new Error("some of the detail are incorrect")

        const match: Boolean = await bcrypt.compare(password, hash)
        if (!match) throw new Error("some of the detail are incorrect")

        const cookie = {
            uid: userDB._id
        }

        const token = jwt.encode(cookie, secret)

        res.cookie("user", token, { httpOnly: true, maxAge: 1000 * 60 * 15 })
        res.send({ ok: true, role:userDB.role})
    } catch (error) {
            console.error(error);
            res.status(401).send({ error: error.message })
    }
}