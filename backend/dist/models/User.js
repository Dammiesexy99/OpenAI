import mongoose from "mongoose";
import { randomUUID } from "crypto";
const chatSchema = new mongoose.Schema({
    id: {
        type: 'string',
        default: randomUUID(),
    },
    role: {
        type: 'string',
        required: true,
    },
    content: {
        type: 'string',
        required: true,
    },
});
const userSchema = new mongoose.Schema({
    name: {
        type: 'string',
        required: true
    },
    email: {
        type: 'string',
        required: true,
        unique: true,
    },
    password: {
        type: 'string',
        required: true,
    },
    chats: [chatSchema],
});
export default mongoose.model('user', userSchema);
//# sourceMappingURL=User.js.map