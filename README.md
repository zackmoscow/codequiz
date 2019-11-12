# codequiz
building a timed quiz with questions on JS fundamentals

## index.html
- build placeholders for header, "landing" element, question element, and end quiz element
- be very careful with assigning IDs to key elements
- after application functionality was confirmed, went back to style with bootstrap

## highscores.html
- see above 

## styles.css
ended up not using this due to taking advantage of bootstrap styling and jQuery hide/show elements

## script.js
- define variables
- hide question and end quiz element so landing is prominently displayed
- set up game timer via time interval, set condition to run endTheQuiz fxn if time expires organically
- upon "startquiz" button pressed: hide landing, start timer, initiate question phase
- establish eventlisteners for all 4 answer options
- access questions.js to pull question and answers
- verify the answer...
1. if content of clicked answer matches question subarray answer, add to score and display correct. if it doesn't, display incorrect and deduct from secondsremaining
2. set up if/else to decide whether to display the next question or end the quiz based on user progress
3. add function to display correct or incorrect (including the correct answer for user reference)
- end quiz: hide question container, show endQuiz container, stop timer, display score
- add eventlistener for submission of initials, merge initials input with user's score and save to local storage, redirect user to highscores.html

## questions.js
- set up question array with titles/choices/answer sub-array

## highscorescript.js 
- minimal content here... but learned important lesson that .innerHTML commands can't live in functions that scope across multiple pages.
- everything else should be self explanatory