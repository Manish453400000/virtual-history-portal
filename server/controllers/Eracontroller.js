import { asyncHandler } from "../utils/asyncHandler.js";
// import schema
import { Era } from "../models/era.model.js";
import { Event } from "../models/event.js";
import { Figure } from "../models/figure.js";

// GETTING ERA API
const getAllEra = asyncHandler(async (req, res) => {
  const era = await Era.find();
  res.status(200).json({
    success: true,
    response: era,
  });
});
const getSingleEra = asyncHandler(async (req, res) => {
  const era = await Era.find();
  res.status(200).json({
    success: true,
    response: era,
  });
});
// GETTING EVENT API
const getAllEvent = asyncHandler(async (req, res) => {
  const event = await Event.find();
  res.status(200).json({
    success: true,
    response: event,
  });
});
const getSingleEvent = asyncHandler(async (req, res) => {
  const event = await Event.find();
  res.status(200).json({
    success: true,
    response: event,
  });
});
// GETTING FIGURE API
const getAllFigure = asyncHandler(async (req, res) => {
  const era = await Era.find();
  res.status(200).json({
    success: true,
    response: era,
  });
});


// >>>>> ADMIN api
const saveEra = asyncHandler(async (req, res) => {
  const era = await Era.create(req.body);
  res.status(201).json({
    success: true,
    response: era,
  });
});
const saveEvent = asyncHandler(async (req, res) => {
  const event = await Event.create(req.body);
  res.status(201).json({
    success: true,
    response: event,
  });
});
const saveFigure = asyncHandler(async (req, res) => {
  const figure = await Figure.create(req.body);
  res.status(201).json({
    success: true,
    response: figure,
  });
});

export 
{ 
  getAllEra, getAllEvent, getAllFigure,
  getSingleEra, getSingleEvent,
  saveEra, saveFigure, saveEvent
};
