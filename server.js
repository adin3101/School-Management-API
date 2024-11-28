import 'dotenv/config';
import express from 'express';
import sequelize from './Config/db.js';
import schoolRoutes from './Routes/schoolRoutes.js';
import connection from './Config/db.js'
const app = express();

// Middleware
app.use(express.json());

// Routes
app.use('/api', schoolRoutes);

// Sync Database
sequelize.sync()
    .then(() => console.log('Database synced successfully.'))
    .catch(err => console.error('Failed to sync database:', err));

// Start Server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
