import React, { useState } from 'react';
import logo from './logo.svg';
import Roster from './components/Roster'
import Form from './components/Form'
import './App.css';

const sampleTeamList = [
  { name:'Shayne', email: 'shayne@email.com', role: 'human'},
  { name:'Victoria', email: 'victoria@email.com', role: 'cyborg'},
  { name:'Sterling', email: 'sterling@email.com', role: 'dog'}
];

const initialFormValues = {
  name:'', 
  email: '', 
  role: '',
};



function App() {
  const [teamList, setTeamList] = useState(sampleTeamList)
  const [formValues, setFormValues] = useState(initialFormValues);



  const update = (inputName, inputValue) => {
    setFormValues({ ...formValues, [inputName]: inputValue });
  };

  const submit = (evt) => {
    const newMember = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      role: formValues.role.trim(),
    };
    if (!newMember.name || !newMember.email || !newMember.role){
      return;
    }
    setTeamList([...teamList, newMember]);
    setFormValues(initialFormValues);
  };

  return (
    <div className="App">
      <Roster teamList={teamList} />
      <Form teamList={teamList} formValues={formValues} update={update} submit={submit} />
    </div>
  );
}

export default App;
