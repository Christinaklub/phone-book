import './App.css';
import './component/mainContact';
import Header from './component/header';
import MainContent from './component/mainContact';

function App() {

    return (
      <div className="App">
        <Header title="Kontakt form" />
        <MainContent />
      </div>
    );
  }
  
export default App;
