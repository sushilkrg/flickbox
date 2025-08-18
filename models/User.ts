import bcrypt from "bcryptjs";
import mongoose, { model, models, Schema, Types } from "mongoose";
import { IVideo } from "./Video";

export interface IUser {
  name: string;
  email: string;
  password: string;
  videos?: Types.ObjectId | IVideo;
  _id?: mongoose.Types.ObjectId;
  createdAt?: Date;
  updatedAt?: Date;
}

const userSchema = new Schema<IUser>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    videos: { type: Schema.Types.ObjectId, ref: "Video" },
  },
  {
    timestamps: true,
  }
);

userSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 10);
  }
  next();
});

const User = models?.User || model<IUser>("User", userSchema);

export default User;
