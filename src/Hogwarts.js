import React from "react";
import Hufflepuff from "./houses/Hufflepuff";
import * as GryffFunctions from "./houses/Gryffindor";

console.log(colors);
// => 'Scarlet and Gold'

gryffMascot();
// => 'The Lion' 

GryffFunctions.values();
// => Attempted import error 

function Hogwarts() {
  return (
    <div>
      <Hufflepuff />
    </div>
  );
}

export default Hogwarts; 