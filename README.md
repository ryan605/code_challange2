# code_challange2

# DOM
git repo link:https://github.com/ryan605/code_challange2

# SETUP
First write the following command in yor terminal
npm install -g json server
then:
npm start:
Test your server by visiting this route in the browser:

http://localhost:3000/characters

Then, open the index.html file on your browser to run the application.

Write your code in the src/index.js file. The base URL for your API will be http://localhost:3000.

# App

As a user, I can:

See a list of all animal names. You will need to make a GET request to the following endpoint to retrieve the character data
 GET /characters
# GET request
Example Response:

   {

     "id": 1,

     "name": "Mr. Cute",

     "image": "https://thumbs.gfycat.com/EquatorialIckyCat-max-1mb.gif",

     "votes": 0

   },

   {

     "id": 2,

     "name": "Mx. Monkey",

     "image": "https://thumbs.gfycat.com/FatalInnocentAmericanshorthair-max-1mb.gif",

     "votes": 0   }, ….]
Click on an animal’s name to see its details i.e image and number of votes. Note, you should only be displaying the details of one animal at a time. You can either use the character information from your first request or make a new request to this endpoint to get the character's details 
GET /characters/:id

Example Response: 
{

     "id": 1,

     "name": "Mr. Cute",

     "image": "https://thumbs.gfycat.com/EquatorialIckyCat-max-1mb.gif",

     "votes": 0

   },
 
# Author

 "author": "Ryan Langat",
  "license": "ISC",
  "bugs": {
    "url": "https://github.com/ryan605/code_challange2/issues"
