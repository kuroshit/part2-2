import { useEffect, useState } from "react";
import Header from "./components/Header";
import PersonForm from "./components/PersonForm";
import Filter from "./components/Filter";
import Persons from "./components/Persons";
import axios from "axios";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filter, setFilter] = useState("");
  const [filteredPersons, setFilteredPersons] = useState(persons);

  useEffect(() => {
    axios.get("http://localhost:3001/persons")
  }, []);

  const addPerson = (event) => {
    event.preventDefault();
    if (
      persons.find(
        (person) =>
          person.name.toLowerCase() === newName.toLowerCase() ||
          person.number === newNumber
      )
    ) {
      alert(`Name or number is already added to phonebook`);
      return;
    }
    const personObject = {
      id: persons.length + 1,
      name: newName,
      number: newNumber,
    };

    setPersons(persons.concat(personObject));
    setFilteredPersons(filteredPersons.concat(personObject));
    setNewName("");
    setNewNumber("");
  };

  const searchPerson = (event) => {
    event.preventDefault();

    const filteredPersons = persons.filter((person) =>
      person.name.toLowerCase().includes(filter.toLowerCase())
    );
    setFilteredPersons(filter === "" ? persons : filteredPersons);
  };

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
    const filteredPersons = persons.filter((person) =>
      person.name.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setFilteredPersons(event.target.value === "" ? persons : filteredPersons);
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <Filter searchPerson={searchPerson} handleFilterChange={handleFilterChange}/>
      <PersonForm
        onSubmit={addPerson}
        onNameChange={handleNameChange}
        onNumberChange={handleNumberChange}
        newName={newName}
        newNumber={newNumber}
      />
      <Header name={"Numbers"} hsize={"h2"} />
      <Persons persons={filteredPersons} />
    </div>
  );
};

export default App;
