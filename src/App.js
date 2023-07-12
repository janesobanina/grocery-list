import './App.css';
import imageOne from './shopping.jpg';
import imageTwo from './man.jpg';
import { GroceryList } from './GroceryList';
import { Like } from './Like';
import { Message } from './Message';

function App() {
  return (
    <div className='app'>
      <img className='pict' src={ imageOne } alt='grocery' width='200px' />
      <h1>Grocery List</h1>
      <GroceryList />
      <img className='pict' src={ imageTwo } alt='man' width='200px'/>
      <Like />
      <Message />
    </div>
  );
}

export default App;
