# JustFurPets

## Description
JustFurPets is a pet daycare management application.  JustFurPets allows daycare owners and operators to quickly access which pets are checked into the day care.  Once a user is logged in, they can view the details concerning the pets and the pets daily schedule.  The schedules can include items such as feedings, walks, medicine doses, or playdates!  The user can then add a pet, edit an existing pet, and add tasks or activities to a pet's daily schedule.  Also as a part of the application is an analytics page to give the user a quick glance at the daycare pet data in organized charts.

## User Story
```
AS AN employee of a pet day care, 
I WANT to be able to view all the pets currently enrolled at the daycare,
SO that I can manage the pets in my day care.

AS AN employee of a pet day care,
I WANT to be able to view an individual profile that consists of all the details of the pet,
SO that I can have information about the pet.

AS AN employee of a pet day care,
I WANT to be able to add a pet profile,
SO that I can add a new pet to the daycare.

AS AN employee of a pet day care,
I WANT to be able to delete a pet’s profile, 
SO that when the pet leaves the facility it is tracked as such.

AS AN employee of a pet day care,
I WANT to be able to update a pet’s profile,
SO that once I get new information about a pet, I can update it in the system.

AS AN employee of a pet day care,
I WANT to be able to add a pet’s schedule,
SO that I can have information about the pet’s schedule

AS AN employee,
I WANT to be able to see my business analytics,
SO that I can have information about my business performance
```

## Acceptance Criteria
```
GIVEN a url to our application
WHEN I click "View all pets",
THEN I am presented a table with the pet name, pet type, owner name, check-in date and check-out date for each pet.
WHEN I click the button "view pet" in the table,
THEN I am redirected to a login/sign-up page.
WHEN I click the button "login" in the table,
THEN I am redirected to a login/sign-up page.
WHEN I login or sign up (then login),
THEN I am presented with new "Add a Pet" and "Log Out" buttons on the top of the page
WHEN I click on the "Add a Pet" button,
THEN I am presented with a form to fill in the data about the pet I want to enter.
WHEN I click on the "Submit" button on the create pet page,
THEN the pet is created and I am brought to a "Create Activity" page with a form to enter a new activity for the pet I just created.
WHEN I click on the "Submit" button for the activity creation page,
THEN I am presented with a pet details page, that contains all the data about the pet, as well as the scheduled daily event that I just created.
WHEN I click on the "View All Pets" button in the header, 
THEN I am again presented with all the pets in the day care.
WHEN I click on the "View Pet" button in the far right column of the "View All Pets" page, 
THEN I am again presented with all the details for the pet I selected.
WHEN I click on the "Edit Pet Data" button on the "Pet Details" page,
THEN I am presented with a modal, populated with the pet data that can be edited to include updated data for the pet.
WHEN I click on the "Submit" button on the "Edit Pet Data" modal,
THEN the pet's data is updated.
WHEN I click on the "Add activity" button on the "Pet Detail" page,
THEN I am brought to "Create Activity" page with a form to enter a new activity for that pet.
WHEN I click on the "Delete Pet" button on the "Pet Detail" page,
THEN the pet is deleted from the daycare.
WHEN I click on the "Analytics" button in the header,
THEN I am presented with graphs that show pertinent data about the current pets in the database.
WHEN I click on the "Logout" button in the header,
THEN I am logged out of the session, and all functions associated with a logged in user.
```
## Features
This pet daycare management system includes the following features:
- View all the pets in the day care at a glance
- Add a new pet that is joining the daycare, including data important to their stay
- Add an activity to the pet's daily schedule such as walks, feedings, and medicine doses.
- Edit a pet to update details about the pet.
- Delete a pet, when that pet leaves the daycare.
- View daycare analytics that provides charts that give the user a glance at all the pets in the daycare

## Technologies
This application is written in HTML, CSS, and JavaScript.  It uses bootstrap for CSS components.  It also uses the following JavaScript packages: Expresss, Express-Session, Express-Handlebars and Sequelize.

## Review
To review the refactored code, please go to the [Repository](https://github.com/sistaniabong/justFurPets).

## Deploy
To deploy this web application, please visit the following [Deployed Application](https://just-fur-pets.herokuapp.com/api/pet).

## Wireframe
To view our wireframe of the application, please visit the following [Wireframe](https://app.diagrams.net/#G1SwBIgeZEFHQQsWg6lTAp4p64fP13I1uB).

## Mock-Up
To review a demo of our application, JustFurPets click the following link: [JustFurPets Demo](https://watch.screencastify.com/v/cfX9tYCG1P5l71olIJDf).
