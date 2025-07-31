import Visitor from "../models/Visitor.js";

// GET all visitors
export const getAllVisitors = async (req, res) => {
    try {
        const visitors = await Visitor.find();
        res.json(visitors);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// POST new visitor
export const createVisitor = async (req, res) => {
    try {
        const visitor = new Visitor(req.body);
        await visitor.save();
        res.status(201).json(visitor);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Assign visitor to clerk
export const assignVisitor = async (req, res) => {
    try {
        const updatedVisitor = await Visitor.findByIdAndUpdate(
            req.params.id,
            { assignedTo: req.body.clerkName },
            { new: true }
        );
        res.json(updatedVisitor);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Mark visitor as served

export const serveVisitor = async (req, res) => {
    try {
        const updatedVisitor = await Visitor.findByIdAndUpdate(
            req.params.id,
            {
                  status: "serving",   
                startedAt: new Date(),
            },
            { new: true }
        );

        if (!updatedVisitor) {
            return res.status(404).json({ error: "Visitor not found" });
        }

        res.json(updatedVisitor);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};


//  get  Visitor By Id
export const getVisitorById = async (req, res) => {
    try {
        const visitor = await Visitor.findById(req.params.id);
        res.json(visitor);
    } catch (err) {
        res.status(404).json({ error: "Visitor not found" });
    }
};

// clear Served Visitors
export const clearServedVisitors = async (req, res) => {
    try {
        await Visitor.deleteMany({ status: "Served" });
        res.json({ message: "Served visitors cleared" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};


// get  Visitor  Stats
export const getVisitorStats = async (req, res) => {
    try {
        const waiting = await Visitor.countDocuments({ status: "Waiting" });
        const serving = await Visitor.countDocuments({ status: "Serving" });
        const served = await Visitor.countDocuments({ status: "Served" });

        res.json({ waiting, serving, served });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Currently Serving  Visitors 
export const getCurrentlyServingVisitors = async (req, res) => {
    try {
        const visitors = await Visitor.find({ status: "served" });
        res.json(visitors);
    } catch (err) {
        console.error("Error fetching serving visitors:", err);
        res.status(500).json({ message: "Internal server error" });
    }
};
