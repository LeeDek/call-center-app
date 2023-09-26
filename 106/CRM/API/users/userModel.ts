import { Schema, model } from 'mongoose';

export class User {
  userName: string;
  email: string | null;
  password: string | null;
  id: string | null;

  constructor({ userName, email, password }: { userName: string, email: string, password: string }) {
    this.userName = userName;
    this.email = email;
    this.password = password;
    this.id = this.id
  }
}

export const UserSchema = new Schema({
  userName: { type: String, required: false },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  isAdmin: {type: Boolean,
    default: false}
});

export const UserModel = model("users", UserSchema)

export const users: User[] = [];