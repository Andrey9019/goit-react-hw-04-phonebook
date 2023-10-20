import {Phonebook} from 'components/Phonebook/Phonebook'
import { useEffect, useState} from 'react';
import { nanoid } from 'nanoid';
import {PhoneList} from 'components/PhoneList/PhoneList'
import { Filter } from 'components/Filter/Filter'
import { Container } from './App.style';



export const App = () => {
  
  const localContacts = localStorage.getItem('contacts');
  
const [contacts, setContacts] = useState(() => {return localContacts ? JSON.parse(localContacts) : []});
const [filter, setFilter] = useState(``);

  useEffect(() => {
    localStorage.setItem(`contacts`, JSON.stringify(contacts))
  },[contacts])

const addList = newList => {
    setContacts([...contacts,{ ...newList, id:nanoid()}]
    )
  }
 const onRemove = (id) => {
    setContacts((prevState) => 
    prevState.filter((contacts)=>contacts.id!==id)
    )
  }

 const handleFilter = (evt) => {
    setFilter( evt.target.value.toLowerCase())
  }

  const filterText = filter.toLowerCase()
  const contactsFilter = contacts.filter(({ firstName }) => firstName.toLowerCase().includes(filterText))

    return (<Container>
    <Phonebook onAdd={addList} />
    <Filter value={filter} onChange={handleFilter}></Filter>
    <PhoneList contacts={contactsFilter}
      onRemove={onRemove} />
   </Container>
);
}
