
import './App.css';
import Header from './components/header/header';
import Secondaryheader from './components/secondaryheader/secondaryheader';

function App() {
  return (
    <div className='main'>
        <Header title='whatsapp' />
        {/* {Header({title:'whatsapp'})} */}
        <Secondaryheader />

    </div>
  );
}

export default App;
