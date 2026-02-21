import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import createError from 'http-errors';
import dotenv from "dotenv";
import connectDB from './config/db.js';
import serviceRoutes from './routes/service.routes.js';
import projectRoutes from './routes/project.routes.js';
import userRoutes from './routes/user.routes.js';
import referenceRoutes from './routes/reference.routes.js';


const app = express();
const PORT = 3000;

// Connect Database
dotenv.config();
connectDB();

// Middleware
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

// Routes
app.use('/api/services', serviceRoutes);
app.use('/api/projects', projectRoutes);
app.use('/api/users', userRoutes);
app.use('/api/references', referenceRoutes);

// 404 handler
app.use((req, res, next) => {
    next(createError(404));
});

// Global error handler
app.use((err, req, res, next) => {
    res.status(err.status || 500).json({
        success: false,
        message: err.message
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});