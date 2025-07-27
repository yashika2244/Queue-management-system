import QueueToken from "../models/QueueToken.js";


export const joinQueue = async (req, res) => {
  const { userId, service } = req.body;

  try {
    const count = await QueueToken.countDocuments({ service, status: 'waiting' });
    const tokenNumber = `A${100 + count + 1}`;

    const newToken = await QueueToken.create({
      userId,
      service,
      tokenNumber
    });

    res.status(201).json({
      tokenNumber,
      status: newToken.status,
      position: count + 1
    });
  } catch (err) {
    res.status(500).json({ error: 'Failed to join queue' });
  }
};

export const getStatus = async (req, res) => {
  const { userId } = req.params;

  try {
    const token = await QueueToken.findOne({ userId, status: { $in: ['waiting', 'in_service'] } });

    if (!token) return res.status(404).json({ message: 'No active queue found' });

    const ahead = await QueueToken.countDocuments({
      service: token.service,
      status: 'waiting',
      joinedAt: { $lt: token.joinedAt }
    });

    res.json({
      tokenNumber: token.tokenNumber,
      status: token.status,
      position: ahead + 1
    });
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch status' });
  }
};


export const leaveQueue = async (req, res) => {
  const { userId } = req.params;

  try {
    const token = await QueueToken.findOneAndUpdate(
      { userId, status: 'waiting' },
      { status: 'cancelled' },
      { new: true }
    );

    if (!token) return res.status(404).json({ message: 'No active queue found' });

    res.json({ message: 'Left queue successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to leave queue' });
  }
};
