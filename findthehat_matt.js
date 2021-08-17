const prompt = require('prompt-sync')({sigint: true});

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

const axisX = 6; 
const axisY = 6; //field size

//define class
class Field {
  constructor(hatAndHoles, field) {
    this._field  = field;
    this._hatAndHoles = hatAndHoles;
  }
  //play game method
  playGame() {
    let y = 0; 
    let x = 0;
    this.show(this._hatAndHoles); //this._field
   
    while (this._hatAndHoles[x][y] === pathCharacter || this._hatAndHoles[x][y] === fieldCharacter) {
      const direction = prompt('Try to find the hat^ - Enter W for North, A for  South, S for East, or D for West. ');
        console.log('You are currently at * ([x][y]) ')
        
    if (direction.toUpperCase() === 'N') {
      if (y === 0) {
        console.log('This way is blocked. Maybe choose other directions.') //Attempts to move “outside” the field.
      } else {
        y -=1
      }
    } else if (direction.toUpperCase() === 'S') {
        if (y >= axisY - 1) {
          console.log('This way is blocked. Perherps choosing other directions?')
        } else {
          y +=1
        }
      } else if (direction.toUpperCase() === 'W') {
        if (x === 0) {
          console.log('This way is blocked. Just choose other directions')
        } else {
          x -= 1
        }
      } else if (direction.toUpperCase() === 'E') {
        if (x >= axisX - 1) {
          console.log('This way is blocked. Kindly switch to other directions')
        } else {
          x += 1
        }
      } else {
        console.log('Entry failed. Please enter W, A, S or D')
      } 
      if (this._hatAndHoles[x][y] === hat) {
        console.log('Congratz! You found the hat! ^_^' )
      } else if (this._hatAndHoles[x][y] === hole) {
        console.log('Sorry! Landing on a hole! Try again >_<')
      } else {
        this._field[x][y] = pathCharacter;
        this.print(this._field);
      }
    } 
  }
  //print urrent state of the =field method
  print() {
    for (let rows of this._field){
      console.log(rows.join(' '));
    }
  }
  
  //generate field with hat and holes
  static generateField(XX, YY, holes) {
    let newField = [];
    for (let i = 0; i < XX; i++) {
      newField.push([]);
      for (let j = 0; j < YY; j++) {
          newField[i].push(fieldCharacter)
      };
    };
    newField[0][0] = pathCharacter;
    let hatX = Math.floor(Math.random() * XX);
    let hatY = Math.floor(Math.random() * YY);
    newField[hatX][hatY] = hat;
    
    //generate hole location
    for (let h = holes; h > 0; h--) {
      let holeX = hatX;
      let holeY = hatY;
    //make sure hole =/= hat
      while (holeX === hatX) {
        holeX = Math.floor(Math.random() * XX)
      };
      while (holeY === hatY) {
        holeY = Math.floor(Math.random() * YY)
      };
     newField[holeX][holeY] = hole; 
    }
    return newField;
  } 
  
  //generate blank field for the user to traverse without seeing the hat and holes
  static generateBlankField(XX, YY){
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
const newField = Field.generateField(axisX, axisY, 1);
console.log(blankField);

//instantiate a Field object using newField = hatAndHoles and field = blankField  
myField = new Field (newField, blankField);

//call playGame method
myField.playGame();
