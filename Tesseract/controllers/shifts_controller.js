const Shift = require('../modules/shiftsSchema');
const jwt = require('jsonwebtoken');


const getAllShifts = async (req, res) => {
  try{
    const token = req.headers.authorization;
    const tokenDraw = jwt.decode(token);
    const shift = await Shift.find({userId: tokenDraw.userData._id});
    
    if (!shift) {
      return res.status(404).json({err: 'No shifts'});
    }
    res.status(200).json(shift);
    } catch (err) {
      res.status(500).json({ error: 'An error occurred while fetching shifts'})
}
};

const getShiftByID = async (req, res) => {
  try {
    const shift = await Shift.findById(req.params._id);
    if (!shift){
      return res.status(404).json({ error: 'No such shift found!'});
    }
    res.status(200).json(shift);
  } catch (err) {
    res.status(500).json({ error: 'An error occurred while fetching shifts'})
  };
};

const updateShiftById = async (req, res) => {
  try {
    const updatedShift = await Shift.findByIdAndUpdate(
      req.params._id,
      req.body,
      { new: true } // To return the updated shift
    );

    if (!updatedShift) {
      return res.status(404).json({ error: 'No shift found!' });
    }

    res.status(200).json(updatedShift);
  } catch (err) {
    res.status(500).json({ error: 'An error occurred while updating the shift' });
  }
};

const getAllUserShifts = async (req, res) => {
  try {
    const shifts = await Shift.find(); // Extract from database to get all shifts

    if (shifts.length === 0) {
      return res.status(404).json({ error: "No shifts!" });
    }

    res.status(200).json(shifts); // Return user's shifts in the response
  } catch (error) {
    res.status(500).json({ error: 'An error occured while fetching user shifts'});
  }
};

const deleteShift = async (req, res) => {
  try {
    const deletedShift = await Shift.findByIdAndDelete(req.params._id);

    if (!deletedShift) {
      return res.status(404).json({ error: 'No shift found!' });
    }

    res.status(200).json({ success: 'Shift deleted' });
  } catch (err) {
    res.status(500).json({ error: 'An error occurred while deleting the shift' });
  }
};

const addShift = async (req,res) => {
  try {
    const shift = new Shift(req.body);
    await shift.save()
    res.status(201).json({ success: 'Shift added'});
  } catch (err) {
    return res.status(404).json({ error: 'No shift found!'});
  }
}

module.exports = { 
  getAllShifts, 
  getShiftByID, 
  updateShiftById,
  getAllUserShifts,
  addShift, 
  deleteShift
};