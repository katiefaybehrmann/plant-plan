# Phase 4 Project: PlantPlan

## Description

PlantPlan is the perfect single page application for any gardener or planter. Leveraging the power of both Ruby on Rails and React, PlantPlan acts as a gardening planner, information center, and social network. This application has the potential to be developed across different planting zones and feature a more robust social component.

## Project features and requirements

1. PlantPlan uses a Rails API for the backend and React for the frontend. Proper RESTful routing is used, and the does not feature redirecting or reloading.
2. PlantPlan features three models on the backend: User, Plant, and Classification. A User has many Plants and many Classifications through Plants. A Plant belongs to a User and a Classification. A Classification has many Plants and many Users through Plants. Plants and Classifications can be accessed through the User, and Users can be accessed through Classifications on the frontend.
3. PlantPlan uses the backend to send over appropriate data and associations.
4. The Plant model can be created, read, updated, and deleted from the database. Associations are appropriately updated when a CRUD action is taken on a Plant object. Users and Classifications can be created and read. The app features validation errors and displays them appropriately on the frontend.
5. PlantPlan features four different client-side routes and a NavBar to help with UI navigation.
6. Users must be authenticated and authorized to access information from PlantPlan. Through a signup or login form and React's useContext hook, users can securely log in and edit information unique to them. Users cannot access another user's plants or classifications through plants.

### User Journey

As a user, I can:

- Add plants to my garden.
- View the plants in my garden.
- Update the image of the plants in my garden as they grow.
- Harvest my plants when they are ready.
- View the classifications associated with my plants.
- View all classifications to learn more about each family of plants.
- Add a classification if it does not already exist.
- View the other users who have planted plants from a particular classification.
- View a personalized planting timeline for my garden.

## Credits and citations

This project was loosely based on the app, Planter, and uses data from the Farmer's Almanac. 