const prompt = require('prompt-sync')({ sigint: true });

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

//2 two-dimensional array
const axisX = 6;
const axisY = 6; //field size
const percentage = 1; //5.2 % field be covered in holes.

//define class
class Field {
    constructor(hatAndHoles, field) {
            this._field = field;
            this._hatAndHoles = hatAndHoles;
        }
        //play game method
    playGame() {
            let x = 0;
            let y = 0;
            this.show(this._hatAndHoles); //OR this._field

            while (this._hatAndHoles[x][y] === pathCharacter || this._hatAndHoles[x][y] === fieldCharacter) {
                //4.1 prompted for input and be able to indicate which direction they’d like to “move”
                //4.2printed result of their current field map with the tiles they have visited marked with *
                const direction = prompt('Try to find the hat^ - Enter W for Up, A for Left, S for Down or D for Right.');
                console.log('Now you are at * : x, y ')

                if (direction.toUpperCase() === 'W') {
                    if (y === 0) {
                        //4.3.3 Attempts to move “outside” the field.
                        console.log('Cannot pass through this way. Maybe choose another direction.')
                    } else {
                        y -= 1
                    }
                } else if (direction.toUpperCase() === 'S') {
                    if (y >= axisY - 1) {
                        console.log('This way is blocked. Perherps choosing other directions?')
                    } else {
                        y += 1
                    }
                } else if (direction.toUpperCase() === 'D') {
                    if (x === 0) {
                        console.log('The way is blocked. Just try another direction.')
                    } else {
                        x -= 1
                    }
                } else if (direction.toUpperCase() === 'A') {
                    if (x >= axisX - 1) {
                        console.log('It is blocked. Kindly switch to other directions')
                    } else {
                        x += 1
                    }
                } else {
                    console.log('Cannot identify this direction. Please enter W, A, S or D')
                }
                if (this._hatAndHoles[x][y] === hat) {
                    //4.3.1 Wins by finding their hat.
                    console.log('Congratz! You find your hat! ^_^')
                } else if (this._hatAndHoles[x][y] === hole) {
                    //4.3.2 Loses by landing on (and falling in) a hole.
                    console.log('Sorry! Landing on a hole! Try again! >_<')
                } else {
                    this._field[x][y] = pathCharacter;
                    this.print(this._field);
                }
            }
        }
        //3 print out a string representation of the board instead of the raw array.
        //print current state of the = field method
    print() {
            for (let row of this._field) {
                console.log(row.join(' '));
            }
        }
        //cheat mode
    printAll() {
        for (let row of this._hatAndHoles) {
            console.log(row.join(' '));
        }
    }

    //5 static method
    //generate field with hat and holes
    //5.1 Arguments: width = horizontal,XX ; height = vertical,YY
    static generateField(width, height, holes) {
        let newField = [];
        for (let i = 0; i < width; i++) {
            newField.push([]);
            for (let j = 0; j < height; j++) {
                newField[i].push(fieldCharacter)
            };
        };
        //5.2 return a randomized two-dimensional array representing the field with a hat and one or more holes.
        newField[0][0] = pathCharacter;
        let hatX = Math.floor(Math.random() * width);
        let hatY = Math.floor(Math.random() * height);
        newField[hatX][hatY] = hat;

        //generate hole location
        for (let h = holes; h > 0; h--) {
            let holeX = hatX;
            let holeY = hatY;
            //make sure hole =/= hat
            while (holeX === hatX) {
                holeX = Math.floor(Math.random() * width)
            };
            while (holeY === hatY) {
                holeY = Math.floor(Math.random() * height)
            };
            newField[holeX][holeY] = hole;
        }
        return newField;
    }

    //generate blank field for the user to traverse without seeing the hat and holes
    static generateBlankField(width, height) {
        let newField = [];
        for (let i = 0; i < width; i++) {
            newField.push([]);
            for (let j = 0; j < height; j++) {
                newField[i].push(fieldCharacter)
            };
        };
        newField[0][0] = pathCharacter;
        return newField;
    }
}


let myField

//create the blank field for the user to see
const blankField = Field.generateBlankField(axisX, axisY)

//created the field with the hat and holes
const newField = Field.generateField(axisX, axisY, percentage);
console.log(blankField);

//instantiate a Field object using newField = hatAndHoles and field = blankField  
myField = new Field(newField, blankField);

//call playGame method
myField.playGame();