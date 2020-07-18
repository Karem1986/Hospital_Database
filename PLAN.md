-Patients
[x] model & migration files 
Note: migration files have the model name in plural 

-Doctors
[x] model & migration files 

-Nurses
[x] model & migration files 

-onDuty-Join Table
[x] model & migration files 

Add Relationships(separate migration)
1. Write a migration to add the foreign keys[x] npx sequelize-cli migration:generate --name set-up-relations
2. RUN MIGRATION db migrate 
3. Add relations to our sequelize models in the set-up relations file:
> doctorId on patients table [x] foreign key 
>doctors belongsToMany through patients table in patient's model [x](see customer example model)
>a patient can have many doctors-belongsToMany in patients model [x]
Join table:
>Doctors on duty---belongs to--> doctorId on onDuty table [x]
>Nurses on duty---belongs to--> nurseId on onDuty table [x]

Add seeds for:
[x] patients
[x] doctors
[x] nurses
[x] onDuties 

Create queries--> queries.js [] ---Done with Sequelize! 

//ROUTING STEPS:
1. Create index.js [x]
2. npm install express [x]
2. Start a simple express server [x]
3. Create a simple GET route [x]
4. Test with httpie [x]
if all works--> Start building the routes we need to access our 
database (REST routes)

//ROUTES GET/POST as in https://reader.codaisseur.com/courses/backend-bootcamp/04-advanced-apis/02-rest
1. Create a folder "routers" []
2. Inside create files according to our data: 
- doctors.js [x]
- patients.js []
- onDuties.js []
3. Inside those files: []
-- Import the Router class from express.
-- Import the corresponding model.
-- Instantiate a router.
-- Register a GET / route that responds with all the doctors or patients.
-- Export the router.
4. Index.js do the following: 
- Export parser middleware before routes [x]
-- set up routes with app.use [x]

5. Login and authentication--https://reader.codaisseur.com/courses/backend-bootcamp/04-advanced-apis/04-jwt 
--Hash passwords for customers [x]
--Finalize login endpoint [] https://reader.codaisseur.com/courses/backend-bootcamp/04-advanced-apis/07-login 
