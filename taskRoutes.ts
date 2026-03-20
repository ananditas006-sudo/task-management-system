import { Router } from 'express';
import { getTasks, getTask, createTask, updateTask, deleteTask, toggleTask } from '../controllers/taskController';
import { authenticateToken } from '../middleware/auth';

const router = Router();

router.use(authenticateToken);

router.get('/', getTasks);
router.post('/', createTask);
router.get('/:id', getTask);
router.patch('/:id', updateTask);
router.delete('/:id', deleteTask);
router.post('/:id/toggle', toggleTask);

export default router;
