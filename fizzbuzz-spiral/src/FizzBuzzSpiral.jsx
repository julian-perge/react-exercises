import React from 'react';
import getSpiralStyle from './GetSpiralStyle';
import './App.css';

/*
You must draw 15 boxes in a spiral, numbered from 1 to 15
If the number is divisible by 3, the box should display “Fizz” in strong type
If the number is divisible by 5, the box should display “Buzz” in strong type
If the number is divisible by both 3 and 5,
  the box should display “FizzBuzz” - again in strong type
Otherwise, the box should just display the number in normal type
*/

function FizzBuzzSpiral() {
  const boxes = [];
  for (let i = 1; i <= 15; i += 1) {
    let elementToRender;
    if (i % 15 === 0) {
      elementToRender = 'FizzBuzz';
    } else if (i % 5 === 0) {
      elementToRender = 'Buzz';
    } else if (i % 3 === 0) {
      elementToRender = 'Fizz';
    } else {
      elementToRender = i;
    }
    console.log(elementToRender);
    const spiralStyle = getSpiralStyle(i - 1);
    boxes.push(
      <div key={i} style={spiralStyle}>
        {elementToRender}
      </div>,
    );
  }
  return boxes;
}

export default FizzBuzzSpiral;
