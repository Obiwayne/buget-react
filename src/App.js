
import { useEffect, useState } from 'react';
import {  Container } from 'semantic-ui-react';
import './App.css';
import DisplayBalance from './components/DisplayBalance';
import DisplayBalances from './components/DisplayBalances';
import EntryLines from './components/EntryLines';
import MainHeader from './components/MainHeader';
import NewEntryForm from './components/NewEntryForm';
import ModalEdit from './components/ModalEdit';

function App() {
  const [entries, setEntries] = useState(initialEntries);
  const [description, setDescription] = useState('');
  const [value, setValue] = useState('');
  const [isExpense, setIsExpense] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [entryId, setEntryId] = useState();
  const [totalIncome, setTotalIncome] = useState(0)
  const [totalExpenses, setTotakExpenses] = useState(0)
  const [total, setTotal] = useState(0)

  useEffect(() => {
    if(!isOpen && entryId){
      const index = entries.findIndex(entry => entry.id === entryId);
      const newEntries = [...entries]
      newEntries[index].description = description;
      newEntries[index].value = value;
      newEntries[index].isExpense = isExpense;
      setEntries(newEntries);
     resetEntry();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen])

  useEffect(() => {
    let totalIncomes = 0;
    let totalExpenses = 0;
    entries.map(entry => {
      if(entry.isExpense){
        return totalExpenses += Number(entry.value)
      }        
      return totalIncomes += Number(entry.value)      
    });
    
    setTotal(totalIncomes - totalExpenses);
    setTotakExpenses(totalExpenses);
    setTotalIncome(totalIncomes);
  }, [entries])
  
  const handleDeleteEntry = (id) => {
    const result = entries.filter(entrie => entrie.id !== id);
    setEntries(result)
  }

  const handleEditEntry = (id) => {
    console.log("edit entry with is: ", id)
    if(id){
      const index = entries.findIndex(entry => entry.id === id);
      const entry = entries[index];
      setEntryId(id);
      setDescription(entry.description);
      setValue(entry.value)
      setIsExpense(entry.isExpense)
      setIsOpen(true)
    }
  }
  
  const handleAddEntry = () => {
    const result = entries.concat({id: entries.length+1, description, value, isExpense})
    console.log(`entries `, entries);
    console.log(`result `, result);
    setEntries(result)
    resetEntry();
  }

  const resetEntry = () => {
    setDescription("");
    setValue("");
    setIsExpense(true);
  }

  return (
    <Container>

      <MainHeader title='Budget'/>
      <DisplayBalance 
        title="Your Balance:"
        value={total}
        size="small"
      />  

    <DisplayBalances totalIncome={totalIncome} totalExpenses={totalExpenses}/>

    <MainHeader title="History" type="h3" />

    <EntryLines 
      entries={entries} 
      deleteEntry={handleDeleteEntry} 
      handleEditEntry={handleEditEntry}
    />

      
    
    <MainHeader title="Add new transation" type="h3" />

    <NewEntryForm 
      handleAddEntry={handleAddEntry} 
      description={description} 
      value={value} 
      isExpense={isExpense}
      setDescription={setDescription} 
      setValue={setValue}
      setIsExpense={setIsExpense}
    />
    <ModalEdit 
      isOpen={isOpen} 
      setIsOpen={setIsOpen}
      handleAddEntry={handleAddEntry} 
      description={description} 
      value={value} 
      isExpense={isExpense}
      setDescription={setDescription} 
      setValue={setValue}
      setIsExpense={setIsExpense}
    />

    </Container>
  );
}

export default App;


var initialEntries = [
  {
    id:1,
    description: "Work income",
    value: 1000.00,
    isExpense: false
  },
  {
    id:2,
    description: "Water bill",
    value: 20.00,
    isExpense: true
  },
  {
    id:3,
    description: "Rent",
    value: 300.00,
    isExpense: true
  },
  {
    id:4,
    description: "Power bill",
    value: 50.00,
    isExpense: true
  }
]