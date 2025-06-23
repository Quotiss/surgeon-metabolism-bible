
import { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';
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
    <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-4 sm:p-6 mb-6">
      <div className="flex items-center justify-center mb-4">
        <Clock className="h-5 w-5 text-blue-600 mr-2" />
        <p className="font-bold text-blue-800 text-base sm:text-lg">
          Early-Adopter Pricing Expires In:
        </p>
      </div>
      
      <div className="flex justify-center items-center space-x-4 mb-4">
        <div className="text-center">
          <div className="bg-blue-600 text-white rounded-lg px-3 py-2 min-w-[50px] shadow-md">
            <span className="text-xl sm:text-2xl font-bold">
              {timeLeft.hours.toString().padStart(2, '0')}
            </span>
          </div>
          <p className="text-xs text-blue-700 mt-1 font-medium">Hours</p>
        </div>
        
        <div className="text-blue-600 text-xl font-bold">:</div>
        
        <div className="text-center">
          <div className="bg-blue-600 text-white rounded-lg px-3 py-2 min-w-[50px] shadow-md">
            <span className="text-xl sm:text-2xl font-bold">
              {timeLeft.minutes.toString().padStart(2, '0')}
            </span>
          </div>
          <p className="text-xs text-blue-700 mt-1 font-medium">Minutes</p>
        </div>
        
        <div className="text-blue-600 text-xl font-bold">:</div>
        
        <div className="text-center">
          <div className="bg-blue-600 text-white rounded-lg px-3 py-2 min-w-[50px] shadow-md">
            <span className="text-xl sm:text-2xl font-bold">
              {timeLeft.seconds.toString().padStart(2, '0')}
            </span>
          </div>
          <p className="text-xs text-blue-700 mt-1 font-medium">Seconds</p>
        </div>
      </div>
      
      <p className="text-center text-sm text-blue-800 font-medium">
        After timer expires, price increases to $97
      </p>
    </div>
  );
};

export default CountdownTimer;
