import { useState } from "react";
import ScorePercent from "./components/ScorePercent";

function App() {  
  const [averageFinal, setAverageFinal] = useState(0);
  const [components, setComponents] = useState([<ScorePercent key={"1a"} setAverageFinal={setAverageFinal} averageFinal={averageFinal} />]);

  const handleAddComponent = () => {
    setComponents([...components, <ScorePercent setAverageFinal={setAverageFinal} averageFinal={averageFinal} />]);
  };

  return (
    <div className="App p-5">
      <div className="p-3 w-full">
        <h1 className="text-center text-4xl text-gray-900 uppercase">
          Promedios
        </h1>
      </div>
      <div className="p-5 items-center justify-center">
        {
          components.map((component, index) => (
            <ScorePercent key={index} setAverageFinal={setAverageFinal} averageFinal={averageFinal}/>
          ))
        }
      </div>
      <button
        onClick={() => handleAddComponent()}
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 ml-5 mt-2"
      >
        Add Component
      </button>
      <div className="w-full">
        <label
          for="average"
          class="block text-sm font-medium leading-6 text-gray-900"
        >
          Average
        </label>
        <div class="relative mt-2 rounded-md shadow-sm">
          <input
            type="number"
            name="average"
            id="average"
            class="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            value={averageFinal}
            readOnly
          />
        </div>
      </div>
    </div>
  );
}

export default App;
