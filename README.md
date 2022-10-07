# Six Degrees

## By _Alex McKnight_

### A game based on "Six Degrees of Kevin Bacon", where users must find the shortest path between 2 actors


## Technologies Used

* Javascript
* React
* The Movie Database API
* Axios

## Description

The project exists as a game to test a user's film knowledge: based on the parlor game "Six Degrees of Kevin Bacon" a user must attempt to link 2 randomly selected actors together through the films they've been in. (I.E. If a user has to find the link between Vince Vaughn and Jackie Chan, one path could be
- Vince Vaughn -> Wedding Crashers -> Owen Wilson -> Shanghai Noon -> Jackie Chan.
This would give Vince Vaughn 2 degrees of separation from Jackie Chan.)

## Setup/Installation Requirements

* Clone this repository to your local machine.
* In the project's root folder, type ```npm install``` in your terminal to install the project's dependencies.
* Sign up for a TMDB API key at [https://developers.themoviedb.org/3/getting-started/introduction](https://developers.themoviedb.org/3/getting-started/introduction)
* Copy and Paste your code into the .env file
* Next type ```npm start``` in your terminal to start the program, it will open the project at [http://localhost:3000](http://localhost:3000), and you will be able to view in your browser.
* To end the program, type ```CMD+C``` on MacOs or ```Windows+C``` on PC in your terminal.

## Known Bugs

* Actor names will not show up
* Actor images will not show up
* No reactivity after selecting the films of Actor 1
* No way to move through films

## License

GNU GPLv3 License

Copyright (c) [2022] Alex McKnight

## Project Statement

** Name of Student:** Alex McKnight

**Name of Project:** Six Degrees

**Project's Purpose or Goal: (What will it do for users?)**
The project exists as a game to test a user's film knowledge: based on the parlor game "Six Degrees of Kevin Bacon" a user must attempt to link 2 randomly selected actors together through the films they've been in. (I.E. If a user has to find the link between Vince Vaughn and Jackie Chan, one path could be
- Vince Vaughn -> Wedding Crashers -> Owen Wilson -> Shanghai Noon -> Jackie Chan.
This would give Vince Vaughn 2 degrees of separation from Jackie Chan.)

**List the absolute minimum features the project requires to meet this purpose or goal:**
- Users must receive 2 randomly selected actors from a pool
- Users must be able to access the films both actors appeared in
- Users must be able to select an actor from the selected film

**What tools, frameworks, libraries, APIs, modules and/or other resources (whatever is specific to your track, and your language) will you use to create this MVP? List them all here. Be specific.**
- Javascript
- React
- The Movie Database API
- Axios

**If you finish developing the minimum viable product (MVP) with time to spare, what will you work on next? Describe these features here: Be specific.**
- UI updates and QOL improvements, such as greater visibility and ease of access
- A "classic mode" where the ending actor is always Kevin Bacon
- A "challenge mode" with 3 actors, requiring a path through the 2nd actor to get to the ending actor

**What additional tools, frameworks, libraries, APIs, or other resources will these additional features require?**
- n/a

**Is there anything else you'd like your instructor to know?**
- This was a learning experience about how not to get too sidetracked or too grand: I'm hoping I can continue working on this on my own time however: even if it's just for myself.