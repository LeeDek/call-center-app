import mongoose, { model } from "mongoose";
import { Department } from "../../enums/departments";
import { Status } from "../../enums/status";
import { User } from "../../users/userModel";
const { Schema } = mongoose;

export class Call {
  id: string;
  constructor(
    public fullName: string,
    public phone: string,
    public date: string,
    public dept: Department,
    public status: string,
  ) {
    this.id = Math.random().toString(36).substr(2, 9);
  }

  changeStatus(newStatus: Status) {
    this.status = newStatus;
  }
}

export const userCalls: [] = [];

const CallSchema = new Schema({
  fullName: { type: String, required: true },
  phone: { type: String, required: true },
  date: { type: String, required: true },
  dept: {
    type: String,
    enum: Object.values(Status),
    default: Department.Operations,
  },
  callInfo: String,
  status: { type: String, enum: Object.values(Status), default: Status.Open },
  user: { type: Schema.Types.ObjectId, ref: "users", required: true }, // Reference to the user
});

const CallModel = model("calls", CallSchema);
export const _calls: Call[] = [];


export default CallModel;
// -------------------------------------------------------------------------------------

// enum DepartmentType {
//   Department1 = "תכנון עירוני",
//   Department2 = "איכות הסביבה",
//   Department3 = "הנדסת תנועה",
//   Department4 = "בעלי חיים",
//   Department5 = "מפגעי תברואה",
//   Department6 = "ביטחון",
//   Department7 = "תחזוקת רחובות",
//   Department8 = "פרויקטים מיוחדים",
//   Department9 = "תחבורה ציבורית",
//   Department10 = "תקלות תחזוקה ",
// }

// enum Status {
//   done = "done",
//   inProcess = "inProcess",
//   received = "received",
// }
