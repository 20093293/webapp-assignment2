import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const ActorSchema = new Schema({
  adult: { type: Boolean },
  id: { type: Number, required: true, unique: true },
  name: { type: String },
  gender: { type: Number },
  known_for_department: { type: String },
  biography: { type: String },
  birthday: { type: String },
  place_of_birth: { type: String },
  profile_path: { type: String },
  popularity: { type: Number },
  imdb_id: { type: String },
  homepage: { type: String },
});

ActorSchema.statics.findByActorDBId = function (id) {
  return this.findOne({ id: id });
};

export default mongoose.model('Actors', ActorSchema);
