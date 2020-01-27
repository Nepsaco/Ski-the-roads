# Ski-the-roads
A wayfinder app to Colorados ski resorts. Find all the information you need to find the perfect ski spots. Demo video can be found [here](https://www.youtube.com/watch?v=enI4Y9iDdlA&feature=youtu.be).

Getting Started

First fork and clone project to your local environment.
Since this is running a node backend make sure to go to the backend folder and run npm install to install all dependencies
Then use npm start to start a server
Run a frontend server I use lite-server to dispaly directions [here](https://www.npmjs.com/package/lite-server)

Prerequisites

You will need a Google API key that has access to the Direction and Maps service 
You will also need to add a .env file in the backend folder and create a variable
example: 

`API_KEY = '${YOUR API KEY HERE}'`

Functionality

This app is built to show you traffic conditions and drive time to any Colorado ski resort. You are able to add favorites, select different mountains, and see your favorites.
The Google maps API will also give you step by step directions. 

In The Future

Create and login with a new user to see their favorites
Delete favorites
See travel times to all your favorites in a easy digestable dashboard
Deploy with heroku

Built With

Node.js\
SASS\
Javascript\  
[Google API](https://cloud.google.com/maps-platform/)\
[SkiMaps.org](https://skimap.org/)\
Author\
Tobie Tsuzuki
