import express from 'express';
import { addCall, getCalls, deleteCall, updateCall, getUserCalls} from './callsCont';
import { isAdmin } from './middlewareRelatives';

// const router = express.Router();
router
.post('/add-relative', addCall); // Use POST for adding relatives
.get('/get-relatives', getCalls);
.delete('/delete-call',isAdmin, deleteCall);
.patch('/update-relative', updateCall);
.get('/get-user-relatives', getUserCalls);

export default router;