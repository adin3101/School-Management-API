import School from '../Models/school.js'
import haversine from 'haversine-distance'; // Ensure this is installed for distance calculation

export const addSchool = async (req, res) => {
  const { name, address, latitude, longitude } = req.body;

  if (!name || !address || !latitude || !longitude) {
    return res.status(400).json({ message: 'All fields are required.' });
  }

  try {
    const school = await School.create({ name, address, latitude, longitude });
    res.status(201).json(school);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Database error.' });
  }
};

export const listSchools = async (req, res) => {
  const { latitude, longitude } = req.query;

  if (!latitude || !longitude) {
    return res.status(400).json({ message: 'Latitude and longitude are required.' });
  }

  try {
    const userLocation = { lat: parseFloat(latitude), lon: parseFloat(longitude) };

    const schools = await School.findAll();
    const sortedSchools = schools
      .map(school => {
        const schoolLocation = { lat: school.latitude, lon: school.longitude };
        const distanceKM=(haversine(userLocation, schoolLocation))/1000
        return {
          ...school.toJSON(),
          distance: distanceKM,
        };
      })
      .sort((a, b) => a.distance - b.distance);

    res.json(sortedSchools);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Database error.' });
  }
};
