import express from 'express';
import todoRouter from "./todoRoutes";
import userRouter from "./userRoutes";

const router = express.Router();

/* ROUTE HANDLER */
router.use("/todos", todoRouter);
router.use("/users", userRouter);

/* ERROR ROUTE HANDLER */
router.use("/", (req, res) => {
  res.status(400).json({status: false, message: "Incorrent api request"})
});
router.use((error, req, res, next) => {
  const errorObject = {}

  if (error) {
    errorObject.status = false;
    errorObject.message = "Sorry, our application is expriencing a problem!";

    console.log(`Internal server error due to: ${error.message}`)
  } else {
    errorObject.status = false;
    errorObject.message = "unknown error";
  }

  res.status(500).json(errorObject)
})

export default router;
