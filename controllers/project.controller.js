import Project from '../models/project.model.js';

export const addProject = async (req, res) => {
    try {
        const project = new Project(req.body);
        const savedProject = await project.save();

        res.status(201).json({
            success: true,
            message: "Project added successfully.",
            data: {
                title: savedProject.title,
                completion: savedProject.completion,
                description: savedProject.description,
                technologies: savedProject.technologies,
                image: savedProject.image,
                link: savedProject.link,
                id: savedProject._id
            }
        });

    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};

export const getAllProjects = async (req, res) => {
    try {
        const projects = await Project.find();

        const formattedProjects = projects.map(project => ({
            title: project.title,
            completion: project.completion,
            description: project.description,
            technologies: project.technologies,
            image: project.image,
            link: project.link,
            id: project._id
        }));

        res.status(200).json({
            success: true,
            message: "Projects list retrieved successfully.",
            data: formattedProjects
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

export const getProjectById = async (req, res) => {
    try {
        const project = await Project.findById(req.params.id);

        if (!project) {
            return res.status(404).json({
                success: false,
                message: "Project not found."
            });
        }

        res.status(200).json({
            success: true,
            message: "Project retrieved successfully.",
            data: {
                title: project.title,
                completion: project.completion,
                description: project.description,
                technologies: project.technologies,
                image: project.image,
                link: project.link,
                id: project._id
            }
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

export const updateProject = async (req, res) => {
    try {
        const updatedProject = await Project.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        if (!updatedProject) {
            return res.status(404).json({
                success: false,
                message: "Project not found."
            });
        }

        res.status(200).json({
            success: true,
            message: "Project updated successfully."
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

export const deleteProject = async (req, res) => {
    try {
        const deletedProject = await Project.findByIdAndDelete(req.params.id);

        if (!deletedProject) {
            return res.status(404).json({
                success: false,
                message: "Project not found."
            });
        }

        res.status(200).json({
            success: true,
            message: "Project deleted successfully."
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};