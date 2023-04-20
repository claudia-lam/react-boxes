import React, { useState } from "react";
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";
import { v4 as uuid } from 'uuid';

/** Box list: manages list of boxes
 *
 * State:
 * - boxes: array like [ { id, height, width, backgroundColor  }, ... ]
 *
 * defines addBox function and passes it down to NewBoxForm
 * BoxList -> NewBoxForm
 */

function BoxList() {
  const [boxes, setBoxes] = useState([]);

  function renderBoxes() {
    return (
        <ul>
          {boxes.map(box => (
              <li key={box.id}>
                <Box
                  width={box.width}
                  height={box.height}
                  backgroundColor={box.backgroundColor}/>
              </li>
          ))}
        </ul>
    );
  }

  function addBox(box){
    let newBox = { ...box, id: uuid() };
    setBoxes(boxes => [...boxes, newBox]);
  }

  return (
    <div className="BoxList">
      <NewBoxForm addBox={addBox}/>
      {renderBoxes()}
    </div>

  );
}

export default BoxList;
