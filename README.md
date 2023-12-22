# Assignment 2 - Web API.

Name: Conor Grace
Video link: https://youtu.be/k-zx6UtDW3U

## Features.

A bullet-point list of the ADDITIONAL features you have implemented in the API **THAT WERE NOT IN THE LABS** (or modifications to existing features)
 
 + LogIn + Signup before accessing certain pages
 + Implemented the actors api into the movies db
 + Implemented the popular actors into the movies db

## Setup requirements.

+ Standard setup apart from Keys

## API Configuration

Describe any configuration that needs to take place before running the API. For example, creating an `.env` file and what variables to put in it. Give an example of how this might be done.

REMEMBER: DON'T PUT YOUR OWN USERNAMES/PASSWORDS/AUTH KEYS IN THE README OR ON GITHUB, just placeholders as indicated below:

______________________
NODE_ENV=development
PORT=8080
HOST=localhost
MONGO_DB=mongodb+srv://conorg990:<PASSWORD>@movies.4pev4uz.mongodb.net/movies?retryWrites=true&w=majority (message in slack if you need the password)
secret=YourJWTSecret (message me in slack if needed)
______________________

## API Design
Give an overview of your web API design, perhaps similar to the following: 

- /api/actors | GET | Gets a list of actors 
- /api/actors/tmdb/popular | GET | Gets the most popular actors
- /api/movies/upcoming | GET | Get all upcoming movies


## Security and Authentication

I used the jsonwebtoken and the same authentication in the labs. I have all files except the default pages protected, so the user has to sign up, or in to access the app.

## Integrating with React App

It had its own difficulties. I had to reset the git for this to individualise it, then I had to review which potential areas to implement the api to fully it. I recognised that i could utilise the user stuff from the previous lab work, as well as refactor the movie part into this app. From here, I had to use the Actors part for personalised deevelopment for this.

## Independent learning (if relevant)

N/A