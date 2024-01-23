import { useState } from "react";
import PropTypes from "prop-types";

// Write your Color component here

const Color = ({ color, setSelectedColor }) => {
  return <div className={color} onClick={() => setSelectedColor(color)}></div>;
};
Color.propTypes = {
  color: PropTypes.string,
  setSelectedColor: PropTypes.func,
};
const App = () => {
  const [selectedColor, setSelectedColor] = useState("");
  return (
    <div id="container">
      <div id="navbar">
        <div>Currently selected: </div>
        <div className={selectedColor}>{selectedColor}</div>
      </div>
      <div id="colors-list">
        {/* colors go here */}
        <Color color="red" setSelectedColor={setSelectedColor} />
        <Color color="green" setSelectedColor={setSelectedColor} />
        <Color color="blue" setSelectedColor={setSelectedColor} />
      </div>
    </div>
  );
};

export default App;
