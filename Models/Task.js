import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
  title: { type: String },
  description: { type: String },
  dueDate: { type: Date },
  status: { type: String, enum: ["pending", "in progress", "completed"], default: "pending" },
  assignedAt: { type: Date, default: Date.now },
  staffId: { type: mongoose.Schema.Types.ObjectId, ref: "Staff" },
});

const Task = mongoose.model("Task", taskSchema);
export default Task;
