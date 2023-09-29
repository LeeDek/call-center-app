import express from "express";
import {
  addCall,
  getCalls,
  deleteCall,
  getUserCalls,
} from "../callsCont/callsCont";
import { getCallsByStatus } from "../callsCont/callsContFilters";

const router = express.Router();

router
  .post("/add-call", addCall) // Use POST for adding relatives
  .get("/get-calls", getCalls)
  .delete("/delete-call", deleteCall)
  // .patch('/update-call', updateCall)
  .get("/get-user-calls", getUserCalls)

  //filter calls
  .post("/get-calls-by-status", getCallsByStatus);

export default router;
