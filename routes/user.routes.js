import express from 'express';
import {
    addUser,
    getAllUsers,
    getUserById,
    updateUser,
    deleteUser
} from '../controllers/user.controller.js';

const router = express.Router();

// GET all users
router.get('/', getAllUsers);

// GET user by ID
router.get('/:id', getUserById);

// POST create new user
router.post('/', addUser);

// PUT update user
router.put('/:id', updateUser);

// DELETE user
router.delete('/:id', deleteUser);

export default router;