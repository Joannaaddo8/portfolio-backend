import express from 'express';
import {
    addReference,
    getAllReferences,
    getReferenceById,
    updateReference,
    deleteReference
} from '../controllers/reference.controller.js';

const router = express.Router();

// GET all references
router.get('/', getAllReferences);

// GET reference by ID
router.get('/:id', getReferenceById);

// POST create new reference
router.post('/', addReference);

// PUT update reference
router.put('/:id', updateReference);

// DELETE reference
router.delete('/:id', deleteReference);

export default router;