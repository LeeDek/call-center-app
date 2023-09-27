import express from 'express';
import { addCall, getCalls, deleteCall, getUserCalls} from '../callsCont';

const router = express.Router();

router
.post('/add-call', addCall) // Use POST for adding relatives
.get('/get-calls', getCalls)
.delete('/delete-call', deleteCall)
// .patch('/update-call', updateCall)
.get('/get-user-calls', getUserCalls)

export default router;