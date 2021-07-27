# sample-api
## Intro
This is my technical assessment project for Hasura. For this project, I will be building an API with Node.js and Express.js which will interact with a weather database stored in MongoDB Atlas. I chose Node because JavaScript is by far my most comfortable programming language. I chose Express and MongoDB because I have experience with those platforms from my General Assembly bootcamp. Two of the projects I built there (Alex and Tom's Art Blog and Wayfarer) had Express/Mongo backends. I will host the backend on Heroku and test it using Postman. Most of the projects I've worked on since graduating from the bootcamp have been primarily frontend working with React and CSS, so I was excited at the opportunity to work in the backend again.

## Conclusion
(I'm writing this at the conclusion of the project)

I achieved MVP for the project by building a simple API with full CRUD on my chosen database. In total the project took me about 4 hours. I would liked to have spent some time on my stretch goals but I have a freelance project with deadlines coming up so my free time for this exercise was limited. 

As far as things I would do differently in production, I think the biggest flaw with my current setup is the weather stations not being their own seperate model. A two-model approach with stations and weather reports being linked would simplify the process for the user and allow things like sending the most recent weather report for the station closet to their location. 

## Roadmap
### 1.0 (MVP)
* Create functioning Express server
* Connect to MongoDB Atlas
* GET / (with instructions for using the API)
* GET /stations (returns a list of all weather stations in the database)
* GET /{callsign} (returns up to 10 weather reports from matching station, chronological order, most recent first)
* GET /{id} (returns 1 weather report by ID)
* POST / (create a new weather report)
* PUT /{id} (modify existing weather report)
* DELETE /{id} (delete existing weather report)
* Deploy API to Heroku
  
## Stretch Goals
* Input validation:
  * Do not allow wind directions in excess of 360 degrees
  * Do not allow negative air pressure or wind speed
  * Do not allow weather reports missing the following values:
    * Date/Time
    * Position
    * Elevation
    * Callsign
    * Air Temp
    * Dew Point
    * Pressure
* METAR:
  * Output GET requests in METAR format
  * Input POST requests in METAR format
* Output plain language weather report
* Output Temperature in both C and F
* Output Air Pressure in both inch/HG and hPa
* Output Date and Time in Z time
* Create Second Model for weather stations & Migration script
