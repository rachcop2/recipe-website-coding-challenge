# Recipe Website Coding Challenge

A Vue.js-based recipe website that allows users to browse and view detailed recipes.

This project current state satisfies the requirements of the Coding Challenge to create a recipe website which satisfies the following criteria:

## Features

### Home Page
- Search input
- Search button
- Search results with pagination (5 per page) and ability to filter by cuisine
- For each search result, display the following information:
  - Recipe Name
  - Recipe Image
- When the user hits the enter key or clicks the search button, the search results are displayed
- When the user clicks on a recipe, they are redirected to the detail page

### Recipe Detail Page
- Recipe Name
- Recipe Image
- Health Information (e.g., vegan, dairy-free)
- List of ingredients
- Cooking instructions
- For each ingredient, display the following information:
  - Ingredient Name
  - Ingredient Measure

## Technologies Used
- **Vue.js**: JavaScript framework for building user interfaces
- **Vue Router**: Official router for Vue.js
- **Axios**: Promise-based HTTP client for making API requests
- **Jest**: JavaScript testing framework
- **Vue Test Utils**: Official unit testing utility library for Vue.js
- **Babel**: JavaScript compiler

## Testing Completed
Some basic sample unit tests have been added to this repository to demonstrate understanding of writing unit tests with Jest for components. 

In a future enhancement of this site, dditional unit tests as well as the addition of integration and E2E tests would be added to cover all scenarios to be considered production ready.

## Accessibility Testing
A scan was performed of this site using the WAVE accessibility tool to determine if any major gaps exist and ensure compliance with WCAG 2.1 AA standards.

A manual test to determine if all interactive elements receive focus was completed using a keyboard, and a screen reader test using VoiceOver was conducted to ensure the proper semantic structure and form labels were considered. 

## Project Setup

### Install Dependencies
```
npm install
```

### Run the project locally
```
npm run serve
```

### Compile and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Running Unit Tests
```
npm test
```
