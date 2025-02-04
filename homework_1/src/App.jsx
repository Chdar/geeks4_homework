import Message from './Message';
import image from '../public/1.webp';
import './styles.css';

function App() {
  return (
    <div>
      <h1>Привет, React!</h1>
      <p>Это моё первое React-приложение.</p>
      <img src={image} alt="Garldfild" width="200" />
      <img src={image} alt="Garldfild" width="200" />
      <img src={image} alt="Garldfild" width="200" />
      <img src={image} alt="Garldfild" width="200" />
      <img src={image} alt="Garldfild" width="200" />
      <img src={image} alt="Garldfild" width="200" />
      <img src={image} alt="Garldfild" width="200" />
      <Message />
    </div>
  );
}

export default App;