// Import dependencies
const shifts_controller = require('../controllers/shifts_controller');

const express = require('express');
const shiftsRouter = express.Router();

shiftsRouter.get('/', shifts_controller.getAllShifts);
shiftsRouter.get('/:id', shifts_controller.getShiftByID);
shiftsRouter.patch('/:id', shifts_controller.updateShiftById);
shiftsRouter.get('/', shifts_controller.getAllUserShifts);
shiftsRouter.delete('/', shifts_controller.deleteShift);
shiftsRouter.post('/', shifts_controller.addShift);

module.exports = shiftsRouter;