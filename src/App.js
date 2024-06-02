
import './App.css';
import ImageSlider from './ImageSlider';
import images from "./images";
function App() {
  return (
    <div className="App">
    <ImageSlider images={images} />
</div>
  );
}

export default App;
