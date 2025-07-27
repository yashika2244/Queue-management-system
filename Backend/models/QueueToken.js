import mongoose from 'mongoose';

const QueueTokenSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  service: { type: String, required: true },
  tokenNumber: { type: String, required: true },
  status: {
    type: String,
    enum: ['waiting', 'in_service', 'completed', 'cancelled'],
    default: 'waiting'
  },
  joinedAt: { type: Date, default: Date.now }
});

export default mongoose.model('QueueToken', QueueTokenSchema);
