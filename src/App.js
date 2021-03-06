import React, { useState } from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';
import Route from './components/Route';
import Header from './components/Header';

const items = [
  {
    title: 'What is React?',
    content: ' React is a front end javascript framework'
  },
  {
    title: 'Why use React?',
    content: 'React is a favorite JS library among engineers'
  },
{
  title: 'How do you use react?',
  content: 'You use React by creating components'
}
]

const options = [
  {
    label: 'The Color Red',
    value: 'red'
  },
  {
    label: 'The Color Green',
    value: 'green'
  },
  {
    label: 'a shade of blue',
    value: 'blue'
  }
]



export default () => {
  const [selected,setSelected] = useState(options[0]);
  //const [showDropdown, setShowDropdown] = useState(true);

  return(
    <div>
      <Header />
      <Route path="/">
        <Accordion items={items} />
      </Route>
      <Route path="/list">
        <Search />
      </Route>
      <Route path="/dropdown">
        <Dropdown
          label={"Select a color"}
          selected={selected}
          options={options}
          onSelectedChange={setSelected}
        />
        <div>
          <h1>
            <font color={selected.value}>{`the color is ${selected.value}`}</font>
          </h1>
        </div>
      </Route>
      <Route path="/translate">
        <Translate />
      </Route>
      {/*<Accordion items={items}/>*/}
      {/*<Search />*/}
      {/*<button onClick={() => setShowDropdown(!showDropdown)}>Toggle Dropdown</button>
      {showDropdown ?
        <Dropdown
          selected={selected}
          options={options}
          onSelectedChange={setSelected}
        /> : null
      }
      <div>
        <h1>
          <font color={selected.value}>{`the color is ${selected.value}`}</font>
        </h1>
      </div>*/}
      {/*<Translate />*/}
    </div>
  );
};
