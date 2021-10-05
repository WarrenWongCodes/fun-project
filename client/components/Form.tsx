import React from 'react';

export default function Form () {
  return (
    <form>
      <label>
        First Name
        <input type="text" name="firstName" placeholder="first name here"/>
      </label>
      <label>
        Email
        <input type="email" name="email" placeholder="email here"/>
      </label>
      <input type="submit" />
    </form>
  )
}

// export default Form;