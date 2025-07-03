
import { useState, useEffect } from 'react';
import { Timer } from 'lucide-react';
import { getTimerEndTime, setTimerEndTime, calculateRemainingTime, generateArbitraryStartTime } from '@/utils/timerUtils';

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 17,
    minutes: 23,
    seconds: 45
  });

  useEffect(() => {
    // Initialize timer with localStorage persistence
    let endTime = getTimerEndTime();
    if (!endTime) {
      // Use arbitrary starting time instead of 24 hours
      endTime = generateArbitraryStartTime();
      setTimerEndTime(endTime);
    }

    const updateTimer = () => {
      const remaining = calculateRemainingTime(endTime);
      if (remaining.total > 0) {
        setTimeLeft({
          hours: remaining.hours,
          minutes: remaining.minutes,
          seconds: remaining.seconds
        });
      } else {
        // Timer expired - reset with new arbitrary time
        const newEndTime = generateArbitraryStartTime();
        setTimerEndTime(newEndTime);
        endTime = newEndTime;
        const newRemaining = calculateRemainingTime(endTime);
        setTimeLeft({
          hours: newRemaining.hours,
          minutes: newRemaining.minutes,
          seconds: newRemaining.seconds
        });
      }
    };

    // Update immediately
    updateTimer();

    // Set up interval
    const timer = setInterval(updateTimer, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="border border-blue-200 rounded-lg p-4 text-center bg-white">
      <div className="flex items-center justify-center mb-3">
        <Timer className="h-4 w-4 text-blue-600 mr-2" />
        <p className="font-medium text-slate-700 text-sm">
          Early-Adopter Pricing Expires In:
        </p>
      </div>
      
      <div className="flex justify-center items-center space-x-2 mb-2">
        <div className="text-center">
          <div className="bg-blue-600 text-white rounded px-3 py-2 min-w-[45px]">
            <span className="text-lg font-bold">
              {timeLeft.hours.toString().padStart(2, '0')}
            </span>
          </div>
          <p className="text-xs text-slate-500 mt-1">hrs</p>
        </div>
        
        <div className="text-blue-600 text-lg font-bold">:</div>
        
        <div className="text-center">
          <div className="bg-blue-600 text-white rounded px-3 py-2 min-w-[45px]">
            <span className="text-lg font-bold">
              {timeLeft.minutes.toString().padStart(2, '0')}
            </span>
          </div>
          <p className="text-xs text-slate-500 mt-1">min</p>
        </div>
        
        <div className="text-blue-600 text-lg font-bold">:</div>
        
        <div className="text-center">
          <div className="bg-blue-600 text-white rounded px-3 py-2 min-w-[45px]">
            <span className="text-lg font-bold">
              {timeLeft.seconds.toString().padStart(2, '0')}
            </span>
          </div>
          <p className="text-xs text-slate-500 mt-1">sec</p>
        </div>
      </div>
      
      <p className="text-xs text-slate-500 mb-3">
        After timer expires, price increases to $97
      </p>

      {/* Moved urgency texts from ProductValueSection */}
      <div className="text-sm text-slate-600">
        <p className="font-medium mb-1">
          ⚠️ Limited to first 500 surgeons only
        </p>
        <p className="text-xs">
          Early-adopter pricing will not be available again
        </p>
      </div>
    </div>
  );
};

export default CountdownTimer;
