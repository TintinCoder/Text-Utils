import logo from './logo.svg';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
    <>
      <Navbar title="TextUtils" about="About TextUtils"/>
      <div className="container my-3">
      <TextForm heading="Start your text editing from here"/>
      </div>
    </>
  );
}

export default App;
