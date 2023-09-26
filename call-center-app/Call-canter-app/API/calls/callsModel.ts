// import { model, Schema, Document } from 'mongoose';
// import { Relation } from '../enums/departments';
// import { User } from '../users/userModel';

// export interface IRelative extends Document {
//   fullName: string;
//   birthDate: string;
//   country: string;
//   relation: Relation;
//   user: User;
// }

// export class Relative {
//   id: string;
//   constructor(
//     public fullName: string,
//     public birthDate: string,
//     public country: string,
//     public relation: Relation
//   ) {
//     this.id = Math.random().toString(36).substr(2, 9);
//   }

//   changeRelation(newRelation: Relation) {
//     this.relation = newRelation;
//   }
// }

// export class UserRelatives {
//   id: string;
//   isVerified: boolean;

//   constructor(public user: User, public relative: Relative) {
//     this.id = Math.random().toString(36).substr(2, 9);
//     this.isVerified = false;
//   }
// }

// export const userRelatives: UserRelatives[] = [];

// const RelativeSchema = new Schema({
//   fullName: { type: String, required: true },
//   birthDate: { type: String, required: true },
//   country: { type: String, required: true },
//   relation: { type: String, enum: Object.values(Relation), default: Relation.Choose },
//   user: { type: Schema.Types.ObjectId, ref: 'users', required: true }, // Reference to the user
// });

// export const RelativeModel = model<IRelative>('relatives', RelativeSchema);

// export const relatives: Relative[] = [];
