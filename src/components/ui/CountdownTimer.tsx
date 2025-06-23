
import { useState, useEffect } from 'react';
import { Timer } from 'lucide-react';
import { getTimerEndTime, setTimerEndTime, calculateRemainingTime } from '@/utils/timerUtils';

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 59,
    seconds: 59
  });

  useEffect(() => {
    // Initialize timer with localStorage persistence
    let endTime = getTimerEndTime();
    if (!endTime) {
      endTime = new Date(Date.now() + 24 * 60 * 60 * 1000);
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
        // Timer expired - reset for next 24 hours
        const newEndTime = new Date(Date.now() + 24 * 60 * 60 * 1000);
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
    <div className="bg-gradient-to-r from-slate-50 to-slate-100 border border-slate-200 rounded-lg p-4 text-center">
      <div className="flex items-center justify-center mb-3">
        <div className="w-5 h-5 bg-slate-600 rounded-full flex items-center justify-center mr-2">
          <span className="text-white text-xs">⏰</span>
        </div>
        <p className="font-semibold text-slate-800 text-sm">
          Early-Adopter Pricing Expires In:
        </p>
      </div>
      
      <div className="flex justify-center items-center space-x-3 mb-3">
        <div className="text-center">
          <div className="bg-slate-700 text-white rounded-md px-2 py-1 min-w-[40px] shadow-sm">
            <span className="text-lg font-bold">
              {timeLeft.hours.toString().padStart(2, '0')}
            </span>
          </div>
          <p className="text-xs text-slate-600 mt-1">hrs</p>
        </div>
        
        <div className="text-slate-600 text-lg font-bold">:</div>
        
        <div className="text-center">
          <div className="bg-slate-700 text-white rounded-md px-2 py-1 min-w-[40px] shadow-sm">
            <span className="text-lg font-bold">
              {timeLeft.minutes.toString().padStart(2, '0')}
            </span>
          </div>
          <p className="text-xs text-slate-600 mt-1">min</p>
        </div>
        
        <div className="text-slate-600 text-lg font-bold">:</div>
        
        <div className="text-center">
          <div className="bg-slate-700 text-white rounded-md px-2 py-1 min-w-[40px] shadow-sm">
            <span className="text-lg font-bold">
              {timeLeft.seconds.toString().padStart(2, '0')}
            </span>
          </div>
          <p className="text-xs text-slate-600 mt-1">sec</p>
        </div>
      </div>
      
      <p className="text-xs text-slate-600">
        After timer expires, price increases to $97
      </p>
    </div>
  );
};

export default CountdownTimer;
