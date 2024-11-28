import 'dotenv/config';
import express from 'express';
import sequelize from './Config/db.js';
import schoolRoutes from './Routes/schoolRoutes.js';
import connection from './Config/db.js'
const app = express();

app.use(express.json());

app.use('/api', schoolRoutes);

app.get('/', (req, res) => {
    res.send(`
        <h1>Welcome to the School Management API</h1>
        <p>Use the following endpoints to interact with the API:</p>
        <ul>
            <li>
                <strong>Add School:</strong> 
                <br>Endpoint: <code>/api/addSchool</code>
                <br>Method: POST
                <br>Payload:
                <pre>
{
    "name": "School name",
    "address": "mumbai",
    "latitude": 19.0000
    "longitude": 72.0000
}
                </pre>
            </li>
            <li>
                <strong>List Schools:</strong> 
                <br>Endpoint: <code>/api/listSchools</code>
                <br>Method: GET
                <br>Query Parameters:
                ?latitude=19.065659&longitude=72.877041
                <br>Example Request:
                <code>GET /api/listSchools?latitude=19.065659&longitude=72.877041</code>
            </li>
        </ul>
        <p>For more details, refer to the API documentation or Postman collection.</p>
    `);
});

sequelize.sync()
    .then(() => console.log('Database synced successfully.'))
    .catch(err => console.error('Failed to sync database:', err));

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
