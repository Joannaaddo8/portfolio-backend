import Service from '../models/service.model.js';

export const addService = async (req, res) => {
    try {
        const service = new Service(req.body);
        const savedService = await service.save();

        res.status(201).json({
            success: true,
            message: "Service added successfully.",
            data: {
                title: savedService.title,
                description: savedService.description,
                price: savedService.price,
                id: savedService._id
            }
        });

    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};

export const getAllServices = async (req, res) => {
    try {
        const services = await Service.find();

        const formattedServices = services.map(service => ({
            title: service.title,
            description: service.description,
            price: service.price,
            id: service._id
        }));

        res.status(200).json({
            success: true,
            message: "Services list retrieved successfully.",
            data: formattedServices
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

export const getServiceById = async (req, res) => {
    try {
        const service = await Service.findById(req.params.id);

        if (!service) {
            return res.status(404).json({
                success: false,
                message: "Service not found."
            });
        }

        res.status(200).json({
            success: true,
            message: "Service retrieved successfully.",
            data: {
                title: service.title,
                description: service.description,
                price: service.price,
                id: service._id
            }
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

export const updateService = async (req, res) => {
    try {
        const updatedService = await Service.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        if (!updatedService) {
            return res.status(404).json({
                success: false,
                message: "Service not found."
            });
        }

        res.status(200).json({
            success: true,
            message: "Service updated successfully."
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

export const deleteService = async (req, res) => {
    try {
        const deletedService = await Service.findByIdAndDelete(req.params.id);

        if (!deletedService) {
            return res.status(404).json({
                success: false,
                message: "Service not found."
            });
        }

        res.status(200).json({
            success: true,
            message: "Service deleted successfully."
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};