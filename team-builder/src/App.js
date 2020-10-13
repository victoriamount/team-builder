import React, { useState } from 'react';
import logo from './logo.svg';
import Roster from './components/Roster'
import './App.css';

const sampleTeamList = [
  { name:'Shayne', email: 'shayne@email.com', role: 'student'},
  { name:'Victoria', email: 'victoria@email.com', role: 'instructor'},
  { name:'Sterling', email: 'sterling@email.com', role: 'tl'}
];

const initialFormValues = {
  name:'', 
  email: '', 
  role: '',
};



function App() {
  const [teamList, setTeamList] = useState(sampleTeamList)
  const [formValues, setFormValues] = useState(initialFormValues);


  return (
    <div className="App">
      <Roster teamList={teamList} />
    </div>
  );
}

export default App;
