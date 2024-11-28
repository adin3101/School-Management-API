# School-Management-API
Here i have build a  set of APIs using Node.js, Express.js framework, and MySQL to manage school data. In this the system allows the users to add new schools and retrieve a list of schools sorted by proximity to a user-specified location.

* Postman Collection link : https://drive.google.com/file/d/1L0Ox-pbwyayqP4jEcLLqRL7Cvdlk4zWV/view?usp=sharing
* API Documentation : https://documenter.getpostman.com/view/37386561/2sAYBXBAzS
*  API Endpoint to List Schools from the database and sorts them based on proximity to the user's location, and returns the sorted list.
   https://school-management-api-4bee.onrender.com/api/listSchools?latitude=19.065659&longitude=72.877041
* API Endpoint to ADD a new School :
  https://school-management-api-4bee.onrender.com/api/addSchool.

BODY:
```
{
  "name": "St Marry High School",
  "address": "Kalina, Mumbai",
  "latitude": 19.078472,
  "longitude": 72.868611
}
```
