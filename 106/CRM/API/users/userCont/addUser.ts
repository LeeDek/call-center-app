import bcrypt from 'bcrypt';
import { UserModel } from '../userModel';
const saltRounds = 10;

export async function addUser(req:any,res:any){
    try {
        const{userName, email, role} = req.body
    if (!userName || !email || !role) throw new Error("Some details are missing");

    const existingUser = await UserModel.findOne({ email }).exec();
    if (existingUser) throw new Error("Email address already exists");
    
    const firstPassword = generatePass()
    const hash = await bcrypt.hash(firstPassword, saltRounds);

    const _user = new UserModel({ userName, email, password:hash ,role})
    const userDB = await _user.save()


    res.send({ ok: true, userDB, firstPassword })


    } catch (error) {
        console.error(error);
        res.status(401).send({ error: error.message })
    }
}

function generatePass() {
    let pass = '';
    const str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' +
        'abcdefghijklmnopqrstuvwxyz0123456789';
 
    for (let i = 0; i < 8; i++) {
        const char = Math.floor(Math.random()
            * str.length + 1);
 
        pass += str.charAt(char)
    }
 
    return pass;
}