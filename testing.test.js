const placeModule = require('./connect4_JS');

describe('Connect 4 takeTurn function being tested ', () => {
    test('should show the next player turn', () => {
        let row = 0;
        let column= 1;
        let counter = 2
        const expectedOutput = "red"

        const actualOutput = placeModule.takeTurn(row, column, counter);

        expect(actualOutput).toStrictEqual(expectedOutput);
    })
  })

  describe('Connect 4 checkWinner function being tested ', () => {
    test('should give the winner name', () => {
      let  grid =  [[null,null,null,null,null,null,null],
                    [null,null,null,null,null,null,null],
                    [null,null,null,null,null,null,null],
                    [null,null,null,null,null,null,null],
                    [null,null,null,null,null,null,null],
                    [null,null,null,null,null,null,null]]


    })
  })