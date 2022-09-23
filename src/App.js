
import { useState } from 'react';
import {  Container } from 'semantic-ui-react';
import './App.css';
import DisplayBalance from './components/DisplayBalance';
import DisplayBalances from './components/DisplayBalances';
import EntryLines from './components/EntryLines';
import MainHeader from './components/MainHeader';
import NewEntryForm from './components/NewEntryForm';

function App() {
  const [entries, setEntries] = useState(initialEntries)

  
  const handleDeleteEntry = (id) => {
    const result = entries.filter(entrie => entrie.id !== id);
    setEntries(result)
  }
  
  const handleAddEntry = (title, value, isExpense) => {
    const result = entries.concat({id: entries.length+1, title, value, isExpense})
    console.log(`entries `, entries);
    console.log(`result `, result);
    setEntries(result)
  }

  return (
    <Container>

      <MainHeader title='Budget'/>
      <DisplayBalance 
        title="Your Balance:"
        value="2,550.53"
        size="small"
      />  

    <DisplayBalances />

    <MainHeader title="History" type="h3" />

    <EntryLines entries={entries} deleteEntry={handleDeleteEntry} />

      
    
    <MainHeader title="Add new transation" type="h3" />

    <NewEntryForm handleAddEntry={handleAddEntry}/>

    </Container>
  );
}

export default App;


var initialEntries = [
  {
    id:1,
    title: "Work income",
    value: "100.00",
    isExpense: false
  },
  {
    id:2,
    title: "Water bill",
    value: "20.00",
    isExpense: true
  },
  {
    id:3,
    title: "Rent",
    value: "300.00",
    isExpense: true
  },
  {
    id:4,
    title: "Power bill",
    value: "50.00",
    isExpense: true
  },
  {
    id:5,
    title: "Work income",
    value: "120.00",
    isExpense: false
  }
]