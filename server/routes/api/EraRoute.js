import { Router } from "express";

// controllers
import {
  getAllEra,
  getAllEvent,
  getAllFigure,
  getSingleEra,
  getSingleEvent,
  saveEra,
  saveEvent,
  saveFigure,
} from "../../controllers/Eracontroller.js";

const eraRouter = Router();
// public routes
eraRouter.route("/era").get(getAllEra);
eraRouter.route("/event").get(getAllEvent);
eraRouter.route("/figure").get(getAllFigure);

eraRouter.route("/era/:id").get(getSingleEra);
eraRouter.route("/event/:id").get(getSingleEvent);

//admin routes
eraRouter.route("/era").post(saveEra);
eraRouter.route("/event").post(saveEvent);
eraRouter.route("/figure").post(saveFigure);

export { eraRouter };
