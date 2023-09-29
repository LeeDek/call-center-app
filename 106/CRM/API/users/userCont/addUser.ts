import bcrypt from 'bcrypt';
import { UserModel } from '../userModel';

export async function addUser(req: any, res: any){
    try {
        const{userName, email, role} = req.body
    if (!userName || !email || !role) throw new Error("Some details are missing");

    const existingUser = await UserModel.findOne({ email }).exec();
    if (existingUser) throw new Error("Email address already exists");
    
    const _user = new UserModel({ userName, email, role })
    const userDB = await _user.save()

    res.send({ ok: true })


    } catch (error) {
        console.error(error);
        res.status(401).send({ error: error.message })
    }
}