
import './App.css';
import CombinedContent from './components/contentcombined/CombinedContent';
import CombinedHeader from './components/headercombined/CombinedHeader'
function App() {
  return (
    <div className="App">
      <CombinedHeader></CombinedHeader>
      <CombinedContent></CombinedContent>
    </div>
  );
}

export default App;
