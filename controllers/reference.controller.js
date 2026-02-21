import Reference from '../models/reference.model.js';

export const addReference = async (req, res) => {
  try {
    const reference = new Reference(req.body);
    const savedReference = await reference.save();

    res.status(201).json({
      success: true,
      message: "Reference added successfully.",
      data: {
        id: savedReference._id,
        firstname: savedReference.firstname,
        lastname: savedReference.lastname,
        email: savedReference.email,
        position: savedReference.position,
        company: savedReference.company
      }
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
      data: null
    });
  }
};

export const getAllReferences = async (req, res) => {
    try {
        const references = await Reference.find();

        const formattedReferences = references.map(reference => ({
            firstname: reference.firstname,
            lastname: reference.lastname,
            email: reference.email,
            position: reference.position,
            company: reference.company,
            id: reference._id
        }));

        res.status(200).json({
            success: true,
            message: "References list retrieved successfully.",
            data: formattedReferences
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

export const getReferenceById = async (req, res) => {
    try {
        const reference = await Reference.findById(req.params.id);

        if (!reference) {
            return res.status(404).json({
                success: false,
                message: "Reference not found."
            });
        }

        res.status(200).json({
            success: true,
            message: "Reference retrieved successfully.",
            data: {
                firstname: reference.firstname,
                lastname: reference.lastname,
                email: reference.email,
                position: reference.position,
                company: reference.company,
                id: reference._id
            }
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

export const updateReference = async (req, res) => {
    try {
        const updatedReference = await Reference.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        if (!updatedReference) {
            return res.status(404).json({
                success: false,
                message: "Reference not found."
            });
        }

        res.status(200).json({
            success: true,
            message: "Reference updated successfully."
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

export const deleteReference = async (req, res) => {
    try {
        const deletedReference = await Reference.findByIdAndDelete(req.params.id);

        if (!deletedReference) {
            return res.status(404).json({
                success: false,
                message: "Reference not found."
            });
        }

        res.status(200).json({
            success: true,
            message: "Reference deleted successfully."
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};