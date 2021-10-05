import React from 'react';
// import * as React from "react"; /* Most future proof way vs. 'allowSyntheticExport config */
import Form from './Form';

// interface for defining props
interface Fish {
  color: string,
  shape: string,
  canFly?: boolean, // optional props
}

// React.FC: Functional Component typing
export default function ({color, shape, canFly = false}: Fish) {

  const clickMyButton = () => {
    console.log('hello world');
  }

  return (
    <div>
      Hello World
      {shape}
      {color}
      <Form/>
      <button onClick={clickMyButton} className="btn btn-primary" type="submit">
        Button
      </button>
    </div>
  );
}
