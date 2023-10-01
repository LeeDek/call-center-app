import { UserModel } from "../userModel";

export async function getUser(req: any, res: any) {
    try {
        const userId = req.query
        const userDB = await UserModel.findById(userId)
        if (!userDB) throw new Error("user dosnt exist in DB")

        res.send({ user: userDB })
    } catch (error) {
        console.error(error);
        res.status(401).send({ error: error.message })
    }
}