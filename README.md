# fewd_js_assessment_matt

Link: https://www.codecademy.com/paths/front-end-engineer-career-path/tracks/fecp-javascript-syntax-part-iii/modules/fecp-challenge-project-find-your-hat/projects/find-your-hat

1. Prerequisites
Complete : Classes
Reading : Getting User Input in Node.js
* interactive terminal game

Project Requirements

2 centered on a Field class
>Field constructor take a two-dimensional array representing the “field”
Field consists of a grid containing:
-“holes” (O), one “hat” (^),rest of the field neutral background character (░)
-Player’s path is represented by (*).
~Player will begin in the upper-left of the fieldand 

3 Give your Field class a .print() method
-prints the current state of the field
~ Better print out a string representation of the board instead of the raw array.
+ join()

4  playablity for users
-Users are prompted for input and be able to indicate which direction they’d like to “move”.
-entering an instruction
-see a printed result of their current field map with the tiles they have visited marked with *
-They should be prompted for their next move.
1-Wins by finding their hat.
2-Loses by landing on (and falling in) a hole.
3-Attempts to move “outside” the field.
When any of the above occur, let the user know and end the game.
+ methods for each

5 .generateField() static method to your Field class itself.
-at least take arguments for height and width of the field
-it should return a randomized two-dimensional array representing the field with a hat and one or more holes
-add a third percentage argument used to determine what percent of the field should be covered in holes.


Project Solution and Extensions
6 Learn more by others' code - Codecademy forum sample solution, Guithub
7 Ideas for extending the project