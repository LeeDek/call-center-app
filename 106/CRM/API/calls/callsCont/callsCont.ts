import { users, UserModel } from "../users/userModel";
import { calls, Call, userCalls } from "./callsModel";
import { Department } from "../enums/departments";
import { Status } from "../enums/status";

export async function getCalls(req: any, res: any) {
  // try {
  //     // Find all relatives and populate the 'user' field to get user details
  //     const callsDB = await CallModel.find({}).populate("user").exec();
  //     // Map the relatives data to include user information
  //     const relativesWithUsers = callsDB.map((relative) => {
  //       const user = call.user;
  //       return {
  //         id: relative._id,
  //         fullName: call.fullName,
  //         phone: call.phone,
  //         date: call.date,
  //         dept: call.dept,
  //         status: call.status,
  //         user: {
  //           _id: user._id,
  //           userName: user.userName,
  //           gender: user.gender,
  //           email: user.email,
  //         },
  //       };
  //     });
  //     // export class Call {
  //     //     id: string;
  //     //     constructor(
  //     //       public fullName: string,
  //     //       public phone: string,
  //     //       public date: string,
  //     //       public dep: Departments,
  //     //       public status: string
  //     //     ) {
  //     //       this.id = Math.random().toString(36).substr(2, 9);
  //     //     }
  //     res.send({ calls: callsWithUsers });
  //   } catch (error) {
  //     console.error(error);
  //     res.status(500).send({ error: error.message });
  //}
}

export async function addCall(req: any, res: any) {
  try {
    const { fullName, phone, date, email, dept, status } = req.body;

    if (!fullName || !phone || !date || !email) {
      return res.status(400).send({ error: "Please complete all fields" });
    }

    const user = await UserModel.findOne({ email });

    if (!user) {
      return res
        .status(404)
        .send({ error: "User not found with the provided email" });
    }

    const existingCall = await calls.findOne({
      fullName,
      phone,
      date,
      email,
      dept,
      status,
    });

    if (existingCall) {
      return res
        .status(400)
        .send({ error: "Family member with the same details already exists" });
    }

    const newCall = new calls({
      fullName,
      phone,
      date,
      dept,
      status,
      user: user._id, // Associate the relative with the user based on userEmail
    });

    const callDB = await newCall.save();

    console.log(callDB);

    res.status(201).send({ ok: true, call: callDB });
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: error.message });
  }
}

export async function deleteCall(req: any, res: any) {
  //   try {
  //     const { callId } = req.params;
  //     const callDB = await Call.findByIdAndDelete(callId);
  //     if (!callDB) {
  //       return res.status(404).send({ error: "Relative not found" });
  //     }
  //     const calls = await calls.find({}); // Fetch all relatives
  //     res.send({ callDB, calls }); // Send the deleted relative and the updated list
  //   } catch (error) {
  //     console.error(error);
  //     res.status(500).send({ error: error.message });
  //   }
}

export async function getUserCalls(req: any, res: any) {
  //   try {
  //     //get email from query
  //     const { email } = req.query;
  //     if (!email) {
  //       throw new Error("email is required");
  //     }
  //     const user = await UserModel.findOne({ email });
  //     if (!user) {
  //       throw new Error("User not found with the provided email");
  //     }
  //     // Get user's calls
  //     const callsDB = await CallsModel.find({ user: user._id });
  //     res.send({ calls: callsDB });
  //   } catch (error) {
  //     console.error(error);
  //     res.status(500).send({ error: error.message });
  //   }
}
