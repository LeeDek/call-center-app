import { users, UserModel  } from '../users/userModel';
import { relatives, Relative, userRelatives, UserRelatives, RelativeModel } from './callsModel';
import { Relation } from '../enums/departments'




export async function getRelatives (req: any, res: any) {
    try {
        // Find all relatives and populate the 'user' field to get user details
        const relativesDB = await RelativeModel.find({}).populate('user').exec();

        // Map the relatives data to include user information
        const relativesWithUsers = relativesDB.map((relative) => {
            const user = relative.user;
            return {
                id: relative._id,
                fullName: relative.fullName,
                birthDate: relative.birthDate,
                country: relative.country,
                relation: relative.relation,
                user: {
                    _id: user._id,
                    userName: user.userName,
                    gender: user.gender,
                    email: user.email,
                },
            };
        });

        res.send({ relatives: relativesWithUsers });
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: error.message });
    }
}

export async function addRelative(req: any, res: any) {
    try {
        const { fullName, birthDate, country, relation, userEmail } = req.body;

        if (!fullName || !country || !birthDate || !relation) {
            return res.status(400).send({ error: "Please complete all fields" });
        }
        
        const user = await UserModel.findOne({ email: userEmail });

        if (!user) {
            return res.status(404).send({ error: "User not found with the provided email" });
        }

        const existingRelative = await RelativeModel.findOne({
            fullName,
            birthDate,
            country,
            relation,
            user: user._id,
        });

        if (existingRelative) {
            return res.status(400).send({ error: "Family member with the same details already exists" });
        }

        const newRelative = new RelativeModel({
            fullName,
            birthDate,
            country,
            relation,
            user: user._id, // Associate the relative with the user based on userEmail
        });

        const relativeDB = await newRelative.save();
        
        console.log(relativeDB);

        res.status(201).send({ ok: true, relative: relativeDB });
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: error.message });
    }
}


export async function deleteRelative(req: any, res: any) {
    try {
        const { relativeId } = req.params;
        const relativeDB = await RelativeModel.findByIdAndDelete(relativeId);
        if (!relativeDB) {
            return res.status(404).send({ error: "Relative not found" });
          }
          const relatives = await RelativeModel.find({}); // Fetch all relatives
          res.send({ relativeDB, relatives }); // Send the deleted relative and the updated list
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: error.message });
    }
}

export async function updateRelative(req: any, res: any) {
    try {
        const { id, fullName, birthDate, country, relation } = req.body;

        // Find the relative by ID
        const relative = await RelativeModel.findById(id);

        if (!relative) {
            return res.status(404).send({ error: "Relative not found" });
        }

        // Update the relative's information if provided
        if (fullName) {
            relative.fullName = fullName;
        }
        if (birthDate) {
            relative.birthDate = birthDate;
        }
        if (country) {
            relative.country = country;
        }
        if (relation) {
            relative.relation = relation;
        }

        // Save the updated relative
        const updatedRelative = await relative.save();

        res.send({ message: "Relative updated successfully", relative: updatedRelative });
    } catch (error) {
        console.error(error);
        res.status(400).send({ error: error.message });
    }
}

export async function getUserRelatives(req: any, res: any) {
    try {
        //get email from query
        const { email } = req.query;
        if (!email) {
            throw new Error("email is required");
        }
        const user = await UserModel.findOne({ email });

        if (!user) {
            throw new Error("User not found with the provided email");
        }

        // Get user's relatives
        const relativesDB = await RelativeModel.find({ user: user._id });
        res.send({ relatives: relativesDB });

    } catch (error) {
        console.error(error);
        res.status(500).send({ error: error.message });
    }
}