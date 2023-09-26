import { model, Schema, Document } from 'mongoose'
import { Department } from '../enums/departments'
import { Status } from '../enums/status'
import { User } from '../users/userModel'

export class Call {
  id: string;
  constructor(
    public fullName: string,
    public phone: string,
    public date: string,
    public dep: Departments,
    public status: string 
  ) {
    this.id = Math.random().toString(36).substr(2, 9);
  }

  changeStatus(newStatus: Status) {
    this.status = newStatus;
  }
}

export const userCalls: UserCalls[] = [];

const CallSchema = new Schema({
  fullName: { type: String, required: true },
  phone: { type: String, required: true },
  date: { type: String, required: true },
  dept: { type: String, enum: Object.values(Status), default: Department.Operations },
  status: { type: String, enum: Object.values(Status), default: Status.Open },
  user: { type: Schema.Types.ObjectId, ref: 'users', required: true }, // Reference to the user
});

export const calls = model('calls', CallSchema);

export const relatives: Calls[] = [];
