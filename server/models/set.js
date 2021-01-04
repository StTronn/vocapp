import mongoose, { Schema } from "mongoose";

const SetSchema = new Schema({
	name: String,
	desc: String,
	decks: Schema.Types.Mixed,
});

export default mongoose.model("set", UserSchema);
