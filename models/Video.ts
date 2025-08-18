import mongoose, { model, models, Schema, Types } from "mongoose";
import { IUser } from "./User";

export const VIDEO_DIMENSIONS = {
  width: 1080,
  height: 1920,
} as const;

export type Visibility = "public" | "private";

export interface IVideo {
  _id?: mongoose.Types.ObjectId;
  title: string;
  description: string;
  videoUrl: string;
  thumbnailUrl?: string;
  user?: Types.ObjectId | IUser;
  controls?: boolean;
  visibility: Visibility;
  transformation?: {
    height: number;
    width: number;
    quality?: number;
  };
}

const videoSchema = new Schema<IVideo>(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    videoUrl: { type: String, required: true },
    thumbnailUrl: { type: String },
    controls: { type: Boolean, default: true },
    user: { type: Schema.Types.ObjectId, ref: "User", required: true },
    visibility: {
      type: String,
      enum: ["public", "private"],
      required: true,
      default: "public",
    },
    transformation: {
      height: { type: Number, default: VIDEO_DIMENSIONS.height },
      width: { type: Number, default: VIDEO_DIMENSIONS.width },
      quality: { type: Number, min: 1, max: 100 },
    },
  },
  {
    timestamps: true,
  }
);

const Video = models?.Video || model<IVideo>("Video", videoSchema);

export default Video;
