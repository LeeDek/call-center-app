import { User, UserModel, users } from "./userModel";
const bcrypt = require('bcrypt')
const jwt = require('jwt-simple');
const { SECRET } = process.env
const secret = SECRET

const saltRounds = 10

//register user 
export const registerUser = async (req: any, res: any) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) throw new Error("Email or Password incorrect");

    const hash = await bcrypt.hash(password, saltRounds)

    // Check if a user with the same email already exists
    const existingUser = await UserModel.findOne({ email }).exec();
    if (existingUser) {
      return res.status(400).json({ error: "User with this email already exists." });
    }

    // If no user with the same email exists, create a new user
    const user = new UserModel({ email, password: hash })
    const validationError = user.validateSync();

    if (validationError) {
      console.error("Validation error:", validationError);
      res.status(400).json({ error: validationError.message });
    } else {
      // Data is valid, proceed with saving
      user.save()
        .then((userDB) => {
          console.log("User saved:", userDB);
          res.status(201).json({ ok: true, user: userDB });
        })
        .catch((saveError) => {
          console.error("Error saving user:", saveError);
          res.status(500).json({ error: "Failed to save user." });
        });
    }

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
}

export const login = async (req: any, res: any) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      throw new Error("Please complete all fields")
    }

    //check if user exist and password is correct

    const userDB = await UserModel.findOne({ email }).exec();
    if (!userDB) throw new Error("User not found");

    // const {password: hash} = userDB

    // if(!hash) throw new Error("some of the detail are incorrect")

    // const match:Boolean = await bcrypt.compare(password, hash)
    // if (!match) throw new Error("some of the detail are incorrect")

    // Determine if the user is an admin
    const { isAdmin } = userDB;

    const cookie = {
      uid: userDB._id,
    }


    console.log(`User found: ${userDB.email}`);
    console.log(`isAdmin: ${isAdmin}`);

    // encode
    const token = jwt.encode(cookie, secret);
    console.log(token)

    res.cookie("user", token, { httpOnly: true, maxAge: 900000 })
    res.send({ ok: true, email: userDB.email, isAdmin });

  } catch (error) {
    console.error(error);
    res.status(401).send({ error: error.message });
  }
}

// export async function getUserAndRelatives(req: any, res: any) {
//   try {
//     const usersWithRelatives = await UserModel.find({})
//       .populate({
//         path: "familyMembers",
//         model: UserModel,
//       })
//       .exec();

//     if (!usersWithRelatives || usersWithRelatives.length === 0) {
//       return res.status(404).json({ error: "No users and relatives found." });
//     }

//     return res.json({ users: usersWithRelatives }); // Return the user and relatives as JSON
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: error.message });
//   }
// }


// export async function getAllUsersAndRelatives(req: any, res: any) {
//   try {
//     // Fetch all users with relatives (you can customize this query as needed)
//     const users = await UserModel.find({})
//       .populate({
//         path: "familyMembers",
//         model: UserModel,
//       })
//       .exec();

//     return res.json({ users }); // Return all users and relatives as JSON
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: error.message });
//   }
// }


