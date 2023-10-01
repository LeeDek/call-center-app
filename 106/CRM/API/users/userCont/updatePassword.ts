import bcrypt from 'bcrypt';
import { UserModel } from '../userModel';

const saltRounds = 10;


export async function updatePassword(req:any,res:any) {
    try {
        const {newPassword, userId} = req.body
    if (!newPassword || !userId) throw new Error("Some details are missing");

    const hash = await bcrypt.hash(newPassword, saltRounds);

    const userDB = await UserModel.findByIdAndUpdate(userId, { password: hash, firstEntry:false}, { new: true })

    } catch (error) {
        console.error(error);
        res.status(401).send({ error: error.message })
    }
}