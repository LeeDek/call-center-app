import { Schema, model } from 'mongoose';
import { Role } from '../enums/role';


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
  role: { type: String, enum: Object.values(Role), default: Role.User },
  firstEntry: { type: Boolean, default: true }

});

export const UserModel = model("users", UserSchema)

export const users: User[] = [];

// async function buildAdmin(){
//   const newUser =  new UserModel({userName:"admin",email:"admin@admin.com",password:"1234", role:Role.Admin, firstEntry:false}) 
//  const userDB =  await newUser.save()
//   console.log(userDB)
// }
// async function buildUser(){
//   const newUser =  new UserModel({userName:"user5",email:"user5@user.com",password:"1234", role:Role.User, firstEntry:false}) 
//  const userDB =  await newUser.save()
//   console.log(userDB)
// }
// buildUser()
// // buildAdmin()
