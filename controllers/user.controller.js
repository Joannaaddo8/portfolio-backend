import User from '../models/user.model.js';

export const addUser = async (req, res) => {
    try {
        const user = new User(req.body);
        const savedUser = await user.save();

        res.status(201).json({
            success: true,
            message: "User added successfully.",
            data: {
                firstname: savedUser.firstname,
                lastname: savedUser.lastname,
                email: savedUser.email,
                password: savedUser.password,
                created: savedUser.created,
                updated: savedUser.updated,
                id: savedUser._id
            }
        });

    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};

export const getAllUsers = async (req, res) => {
    try {
        const users = await User.find();

        const formattedUsers = users.map(user => ({
            firstname: user.firstname,
            lastname: user.lastname,
            email: user.email,
            password: user.password,
            created: user.created,
            updated: user.updated,
            id: user._id
        }));

        res.status(200).json({
            success: true,
            message: "Users list retrieved successfully.",
            data: formattedUsers
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

export const getUserById = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);

        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found."
            });
        }

        res.status(200).json({
            success: true,
            message: "User retrieved successfully.",
            data: {
                firstname: user.firstname,
                lastname: user.lastname,
                email: user.email,
                password: user.password,
                created: user.created,
                updated: user.updated,
                id: user._id
            }
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

export const updateUser = async (req, res) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        if (!updatedUser) {
            return res.status(404).json({
                success: false,
                message: "User not found."
            });
        }

        res.status(200).json({
            success: true,
            message: "User updated successfully."
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

export const deleteUser = async (req, res) => {
    try {
        const deletedUser = await User.findByIdAndDelete(req.params.id);

        if (!deletedUser) {
            return res.status(404).json({
                success: false,
                message: "User not found."
            });
        }

        res.status(200).json({
            success: true,
            message: "User deleted successfully."
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};
