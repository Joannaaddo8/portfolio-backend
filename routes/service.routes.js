import express from 'express';
import {
    addService,
    getAllServices,
    getServiceById,
    updateService,
    deleteService
} from '../controllers/service.controller.js';

const router = express.Router();

// GET all services
router.get('/', getAllServices);

// GET service by ID
router.get('/:id', getServiceById);

// POST create new service
router.post('/', addService);

// PUT update service
router.put('/:id', updateService);

// DELETE service
router.delete('/:id', deleteService);

export default router;