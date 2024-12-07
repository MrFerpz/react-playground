import { useState } from 'react'
import './App.css'

function Person() {
  const [person, setPerson] = useState({ firstName: "John", lastName: "Smith", age: 100 });
  person.name = person.firstName + " " + person.lastName;

  function handleFirstNameChange(e) {
    setPerson({...person, firstName: e.target.value});
  };

  function handleLastNameChange(e) {
    setPerson({...person, lastName: e.target.value});
  };


  const handleIncreaseAge = () => {
    setPerson({ ...person, age: person.age + 1 });
  };

  return (
    <>

      <Input 
      label="First Name"
      onChange={handleFirstNameChange}
      value={person.firstName}/>

      <Input 
      label="Last Name"
      onChange={handleLastNameChange}
      value={person.lastName}/>

      <div>{person.name}</div>
      <div>{person.age}</div>

      <Button
      label="Age"
      onClick={handleIncreaseAge}
      />
    </>
  );
}

function Input({label, value, onChange}) {
  return (
    <div>
      <label>
        {label}
        {' '}
      <input
      value={value}
      onChange={onChange}
      />
      </label>
    </div>
  )
}

function Button({onClick}) {
  return (
  <button 
  onClick={onClick}>Increase Age
  </button>
  )}

export default Person
