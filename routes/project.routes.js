import express from 'express';
import {
    addProject,
    getAllProjects,
    getProjectById,
    updateProject,
    deleteProject
} from '../controllers/project.controller.js';

const router = express.Router();

// GET all projects
router.get('/', getAllProjects);

// GET project by ID
router.get('/:id', getProjectById);

// POST create new project
router.post('/', addProject);

// PUT update project
router.put('/:id', updateProject);

// DELETE project
router.delete('/:id', deleteProject);

export default router;