import { model, Schema } from "mongoose";

const movieSchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  summary: {
    type: String,
    required: true,
    trim: true,
  },
  videoURL: {
    type: String,
    required: true,
    trim: true,
  },
  thumbnailURL: {
    type: String,
    required: true,
    trim: true,
  },
});

const movie = model("movie", movieSchema);

export default movie;
