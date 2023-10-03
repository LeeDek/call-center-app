import CallModel from "../callsModel/callModel";
import { users, UserModel } from "../../users/userModel";
import { Call, userCalls } from "../callsModel/callModel";
import { Department } from "../../enums/departments";
import { Status } from "../../enums/status";

export async function getCallsByStatus(req, res) {
  try {
    const { status: currentStatus } = req.body;
    if (!currentStatus)
      return res
        .status(404)
        .json({
          error: "status is ${currentStatus}, invalided or not received",
        });

  // Use the Status enum for comparison
    const callsDB = await CallModel.find({ status: Status[currentStatus] });
    if (!callsDB)
      return res
        .status(404)
        .json({ error: `${Status[currentStatus]} calls are not found` });

    res.send({ callsDB });
  } catch (error) {
    console.error(error);
  }
}

export async function getCallsByDept(req, res) {
  try {
    const { dept: currentDept } = req.body;
    if (!currentDept)
      return res
        .status(404)
        .json({ error: `status is ${currentDept}, invalided or not received` });
    const callsDB = await CallModel.find({ status: currentDept });
    if (!callsDB)
      return res
        .status(404)
        .json({ error: "${currentDept} calls are not found" });
    res.send({ callsDB });
  } catch (error) {
    console.error(error);
  }
}

export async function queryByDynamicDeptAndStatus(req, res) {
  try {
    const { dept, status } = req.body;

    const query = {};

    if (dept) {
      query["dept"] = dept;
    }
    if (status) {
      query["status"] = status;
    }

    console.log(`Search operation by dept:${dept} && ${status} ...`);
    const callsDB = await CallModel.find(query);

    if (!callsDB)
      return res
        .status(404)
        .json({ error: `${dept} and ${status} calls are not found` });
    res.send({ callsDB });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "server error" });
  }
}
