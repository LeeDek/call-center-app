import CallModel from "../callsModel/callModel";
import { users, UserModel } from "../../users/userModel";
import { Call, userCalls } from "../callsModel/callModel";
import { Department } from "../../enums/departments";
import { Status } from "../../enums/status";


export async function getCallsByStatus(req, res) {
  try {
    const {status:currentStatus} = req.body
    if(!currentStatus) 
        return res.status(404).json({ error: 'status is ${currentStatus}, invalided or not received' });
    const callsDB = await CallModel.find({ status: currentStatus });
    if (!callsDB)
      return res.status(404).json({ error: '${currentStatus} calls are not found' });
    res.send({callsDB})
  } catch (error) {
    console.error(error);
  }
}