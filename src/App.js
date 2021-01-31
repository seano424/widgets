import React, { useState } from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';
import Route from './components/Route';
import Header from './components/Header'

const items = [
  {
    title: 'What is React?',
    content: 'React is a front end javascript framework',
  },
  {
    title: 'Why use React?',
    content: 'React is a favorite JS library among engineers',
  },
  {
    title: 'How do you use React?',
    content: 'You use React by creating components',
  },
];

const options = [
  {
    label: 'The Color Red',
    value: 'red',
  },
  {
    label: 'The Color Green',
    value: 'green',
  },
  {
    label: 'A Shade of Blue',
    value: 'blue',
  },
];

const App = () => {

  const [selected, setSelected] = useState(options[0])

  return (
    <div>
      <Header />
      <Route path="/">
        <Accordion items={items}/>
      </Route>
      <Route path='/list'>
        <Search />
      </Route>
      <Route path='/dropdown'>
        <Dropdown options={options} label="Select a color" selected={selected} onSelectedChange={setSelected}>
        <h1 style={{color: `${selected.value}`}}>This is {selected.value}</h1>
        </Dropdown>
      </Route>
      <Route path='/translate'>
        <Translate />
      </Route>
    </div>
  );
}

export default App;


// const showAccordion = () => {
  //   if (window.location.pathname === '/') {
  //     return <Accordion items={items}/>
  //   }
  // }
  
  // const showTranslate = () => {
  //   if (window.location.pathname === '/translate') {
  //     return <Translate />
  //   }
  // }

  // const showSearch = () => {
  //   if (window.location.pathname === '/search') {
  //     return <Search />
  //   }
  // }

  // const showDropDown = () => {
  //   if (window.location.pathname === '/dropdown') {
  //     return <Dropdown options={options} />
  //   }
  // }