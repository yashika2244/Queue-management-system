import feedbook from '../models/feedback.js' 
export const submitFeedback = async (req, res) => {
  const { ticketNumber, service, staff, rating, comment } = req.body;
  const feedback = await feedbook.create({ ticketNumber, service, staff, rating, comment });
  res.status(201).json({ message: "Feedback submitted", feedback });
};

export const getFeedback = async (req, res) => {
  const feedbackList = await feedbook.find().populate("staff", "firstName lastName");
  res.json(feedbackList);
};
