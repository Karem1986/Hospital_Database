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
[x]onDuties 


Create queries--> queries.js [x] ---Done with Sequelize! 
