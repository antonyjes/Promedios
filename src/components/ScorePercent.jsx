import { useEffect, useState } from "react";

const ScorePercent = ({setAverageFinal, averageFinal}) => {
  const [score, setScore] = useState(0);
  const [percent, setPercent] = useState(0);
  const [average, setAverage] = useState(0);

  useEffect(() => {
    if (!isNaN(score) && !isNaN(percent)) {
      const newAverage = (score * percent) / 100;
      setAverage(newAverage);
      setAverageFinal(averageFinal + newAverage - average);
    }
  }, [score, percent]); //eslint-disable-line

  return (
    <div className="flex flex-row gap-2 mb-2">
      <div className="w-full">
        <label
          for="score"
          class="block text-sm font-medium leading-6 text-gray-900"
        >
          Score
        </label>
        <div class="relative mt-2 rounded-md shadow-sm">
          <input
            type="number"
            name="score"
            id="score"
            class="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            placeholder="0"
            value={score}
            onChange={(e) => setScore(parseFloat(e.target.value))}
          />
        </div>
      </div>
      <div className="w-full">
        <label
          for="percent"
          class="block text-sm font-medium leading-6 text-gray-900"
        >
          Percent
        </label>
        <div class="relative mt-2 rounded-md shadow-sm">
          <input
            type="number"
            name="percent"
            id="percent"
            class="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            placeholder="0"
            value={percent}
            onChange={(e) => setPercent(parseFloat(e.target.value))}
          />
        </div>
      </div>
    </div>
  );
};

export default ScorePercent;
