# REACT NYT APP

This project was built with React and SCSS, using class-based components. It includes features such as context, communication between siblings, routing, and more.

<br>

## Technologies Used

- ReactJS
- React Router
- SCSS

<br>

## Want to go directly to the app?


You can try out a demo of this project. Check it at [here!](https://sage-youtiao-52f5e0.netlify.app/).

<br>

## Want to run it locally? Installation:

Installation
To install this project, you´ll just need to follow three steps:

 
- Clone the repository to your local machine
- Get your API key from [NYT Dev API (Top Stories Api)](https://developer.nytimes.com/apis) and add it to your .env (as `REACT_APP_NYT`) in the root directory.
- Run `npm install` to install the required dependencies
- Run `npm start` to start the development server

<br>

## Features:

This application has the following main features:

- `Component lifecycle methods`: React's component lifecycle methods are used to manage the state of the application and handle events.

- `Routing and redirecting`: React Router is used to handle navigation between pages and redirecting to different routes within the virtual DOM.

- `Communication between siblings`: Siblings components communicate with each other through event handlers passed down from a parent component.

- `Communication beetween components through a shared context`.

- `SCSS styles`: Styling is done using SCSS and MUI elements.

- `Component structure and organization`: The application is built using class-based components organized into a modular and reusable structure, making it easy to maintain and extend.

<br>

## Usage:

- `Home page`: allows users to save their name for later use.

- `Post page`: allows users to post their own news articles, either anonymously or with their name if they have entered it on the home page.

- `News page`: displays a preloaded selection of articles from the New York Times, as well as any articles that the user has posted.

To use the application, follow these steps:

- On the home page, enter your name and click "Get in".
- Navigate to the post page to post your own news.
- If you entered your name on the home page, you can post the article with your name. If you did not enter your name, you can only post anonymously.
- Every time you post an article card, you´ll be redirected to the news page to view a selection of articles from the New York Times, as well as any articles that you have posted.

<br>

## Author:

<br>

[Fran V. Hernández](https://github.com/Francsy/)


