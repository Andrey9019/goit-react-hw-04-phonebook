import {Phonebook} from 'components/Phonebook/Phonebook'
import { Component } from 'react';
import { nanoid } from 'nanoid';
import {PhoneList} from 'components/PhoneList/PhoneList'
import { Filter } from 'components/Filter/Filter'
import { Container } from './App.style';

export class App extends Component {

  state = {
    contacts: [],
    firstName: '',
    number: '',
    filter:'',
  }

  componentDidMount() {
  
    this.loadFormValue()
}

  componentDidUpdate(prevProps, prevState) {

    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem(`contacts`, JSON.stringify(this.state.contacts))
    }

  }
   loadFormValue() {
    const savedContacts = localStorage.getItem(`contacts`)
    if (savedContacts) {
      this.setState({contacts: JSON.parse(savedContacts)})  
    }
  }
  
  addList = newList => {
    this.setState(prevState => ({
      contacts:[...prevState.contacts,{ ...newList, id:nanoid()}]
    }))
  }

  onRemove = (id) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter((contacts)=>contacts.id!==id)
    }))
  }

  handleFilter = (evt) => {
    this.setState({filter: evt.target.value})
  }

  onContactFilter = () => {
     const { filter, contacts } = this.state
    const filterText = filter.toLowerCase()
    
    return contacts.filter(({firstName})=> firstName.toLowerCase().includes(filterText))
  }
  render() {
  
const contactsFilter = this.onContactFilter()

  return (<Container>
    <Phonebook onAdd={this.addList} />
    <Filter value={this.state.filter} onChange={this.handleFilter}></Filter>
    <PhoneList contacts={contactsFilter}
      onRemove={this.onRemove} />
   </Container>

);
  };
  }