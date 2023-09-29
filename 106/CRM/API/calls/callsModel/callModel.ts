import mongoose, { model } from "mongoose";
import { Department } from "../../enums/departments";
const { Schema } = mongoose;

enum DepartmentType {
  Department1 = "תכנון עירוני",
  Department2 = "איכות הסביבה",
  Department3 = "הנדסת תנועה",
  Department4 = "בעלי חיים",
  Department5 = "מפגעי תברואה",
  Department6 = "ביטחון",
  Department7 = "תחזוקת רחובות",
  Department8 = "פרויקטים מיוחדים",
  Department9 = "תחבורה ציבורית",
  Department10 = "תקלות תחזוקה ",
}

enum Status {
  done = "done",
  inProcess = "inProcess",
  received = "received",
}

export const CallSchema = new Schema({
  operatorEmail: String,
  name: String,
  phoneNum: String,
  callInfo: String,
  department: DepartmentType,
  status: Status,
});

const CallModel = model("calls", CallSchema);
export default CallModel;
