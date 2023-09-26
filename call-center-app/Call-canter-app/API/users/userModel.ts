import { Schema, model } from 'mongoose';

export enum Gender {
  Male = "Male",
  Female = "Female", 
  Other = "Other"
}

export class User {
  userName: string;
  gender: string;
  email: string | null;
  password: string | null;
  _id: string | null;

  constructor({ userName, gender, email, password }: { userName: string, gender: string, email: string, password: string }) {
    this.userName = userName;
    this.gender = gender;
    if(email) this.email = email;
    if(password) this.password = password;
  }

  updateGender(newGender: Gender) {
    this.gender = newGender;
  }
}

export const UserSchema = new Schema({
  userName: { type: String, required: false },
  gender: { type: String, enum: Object.values(Gender), required: false },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  familyMembers: [{ type: Schema.Types.ObjectId, ref: 'users' }],
  isAdmin: {type: Boolean,
    default: false}
});

export const UserModel = model("users", UserSchema)

export const users: User[] = [];