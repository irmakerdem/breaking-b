# Breaking Bad

## Table of Contents
- [Introduction](#introduction)
- [Deployment](#deployment)
- [Technologies](#technologies)
- [Set Up](#set-up)
- [Features](#features)
- [Organizational Resources](#organizational-resources)
- [Future Features](#future-features)
- [Reflection](#reflection)
- [Contributors](#contributors)
- [Project Specifications](#project-specifications)

### Introduction
Breaking Bad is an app built to help you study 📚 for Breaking Bad Trivia Night. You can see a list of characters on page load, click on a character, and see their details 📝. If there are any character's information you keep getting stuck on 😖, you can 💚 favorite and unfavorite them!

This app fetches data from [The Breaking Bad API](https://breakingbadapi.com/).

### Deployment
Project can be viewed [here]().

### Technologies
- JavaScript
- React (hooks)
- React Router
- HTML
- CSS
- API fetch
- Cypress testing
- Webpack

### Set Up
1. Clone this [repository](https://github.com/irmakerdem/breaking-bad).
2. `cd` into the directory.
3. Run `npm install`.
4. To run tests, run `npm run cypress`.
5. Start the server by running `npm start` and view at http://localhost:8080/.
6. Enter `control + c` to stop the server at any time.

### Features
![Travel Tracker gif](https://media.giphy.com/media/vhA6AzFigFfxUQcfg9/giphy.gif)

- User can view all characters on page load

- User can click on a character and see their details

- User can favorite and unfavorite a character 

<img width="600" alt="trip-request-image" src="https://user-images.githubusercontent.com/90080658/173740878-c7021c3b-656c-4410-9490-50ff6b8522b3.png">

- User can see all of their favorite characters on the favorites page
- User can use the left and right arrow to flip through the 3 pages
- User can use the GO HOME or GO TO FAVORITES buttons to go to those designated pages

### Organizational Resources
- [GitHub Project](https://github.com/users/irmakerdem/projects/2/views/1) for Kanban board
- [Figma](https://www.figma.com/file/uGW24Re7pa9mSMlTnkpDGR/Breaking-Bad?node-id=0%3A1) for wireframe
- [Figma Jam](https://www.figma.com/file/VqcLrxrZ6faFDn395G43vJ/Breaking-Bad---Component-Architecture?node-id=0%3A1) for component architecture
- [Google Sheet](https://docs.google.com/document/d/1r3kwnpzY3t_LQJT2IMmYBdd87Yog0OqJi-PnhAvyNR8) for design inspirations

### Future Features
- User can unfavorite from favorites page directly
- User can search for a character on home page
- User can filter home page for characters' status (dead/alive)
- Display error message for when there is a server error (e.g. server is down)
- Breaking Bad theme song plays on page load
- Filter out Better Call Saul characters
- Update styling/design for better UX/UI

### Reflection
- After successfully fetching the data from the API, I realized that one of the images was not rendering on my website. I noticed that that image's URL contained the word "static" where as the other similar PNG images contained "vignette". This discrepancy caused me to create new function that dynamically would change any URL that contained "static" even though only one of the 62 images. Later, I realized that instead of passing this method into various components, the best solution was to go to the root of the problem (i.e. during the fetch). Hence, I forced the data to be filtered immediately during the fetch instead of cleaning up after fetch was completed. I will be contacting the API owner/maintainer so others do not have to go through this trouble like I did.
- I had initially created many divs and classes for styling purposes. Very quickly I realized how messy this technique was in React. Due to the compliling of Webpack and React, I needed very minimal CSS styling to get the home page to render images with a specific size as well as them being responsive (using flex box) for bigger/smaller screen sizes. I learned that em's are more friendly for creating a responsive app than percentages.
- This project was my first time for 3 concepts. 1) Hooks. It was very satisfying to never have to use the word "this" in the codebase. 2) Component Using. I reused the same component of Card in the home page and the favorites page instead of creating a FavoriteCard component. This made my codebased very modular! 3) Prop types. Using prop types proved to be a simple new addition to the code base that explicitly clarified the data types that were used in codebase. 

### Contributors
- [Irmak Erdem](https://www.linkedin.com/in/irmakerdem/)

### Project Specifications
- Project specs can be found [here](https://frontend.turing.edu/projects/module-3/showcase.html)