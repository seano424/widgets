import React from 'react';
import Accordion from './components/Accordion'

class App extends React.Component {

  state = {
    items: [
      { title: "What is a dog?", content: 'A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.'},
      { title: 'What kinds of dogs are there?', content: 'There are many breeds of dogs. Each breed varies in size and temperament. Owners often select a breed of dog that they find to be compatible with their own lifestyle and desires from a companion.'},
      { title: 'How do you aquire a dog?', content: 'Three common ways for a prospective owner to acquire a dog is from pet shops, private owners, or shelters.'}
    ]
  }

  render () {
    return (
      <div>
        <Accordion items={this.state.items}/>
      </div>
    );  
  }
}

export default App;
