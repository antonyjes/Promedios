import { useState } from "react";
import ScorePercent from "./components/ScorePercent";

function App() {
  const [components, setComponents] = useState([]);

  const handleAddComponent = () => {
    setComponents([...components, <ScorePercent />]);
  };

  return (
    <div className="App p-5">
      <div className="p-3 w-full">
        <h1 className="text-center text-4xl text-gray-900 uppercase">
          Promedios
        </h1>
      </div>
      <div className="p-5 items-center justify-center">
        <ScorePercent />
        <ScorePercent />
        <ScorePercent />
        <ScorePercent />
        {components}
      </div>
      <button
        onClick={() => handleAddComponent()}
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 ml-5 mt-2"
      >
        Add Component
      </button>
    </div>
  );
}

export default App;
