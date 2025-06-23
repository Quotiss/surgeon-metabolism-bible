
import { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 59,
    seconds: 59
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { hours, minutes, seconds } = prev;
        
        if (seconds > 0) {
          seconds--;
        } else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        } else {
          // Reset to 24 hours when it reaches 0
          hours = 23;
          minutes = 59;
          seconds = 59;
        }
        
        return { hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-red-50 border-2 border-red-200 rounded-lg p-4 sm:p-6 mb-6">
      <div className="flex items-center justify-center mb-3">
        <Clock className="h-5 w-5 text-red-600 mr-2" />
        <p className="font-bold text-red-600 text-base sm:text-lg">
          Early-Adopter Pricing Expires In:
        </p>
      </div>
      
      <div className="flex justify-center items-center space-x-4 mb-3">
        <div className="text-center">
          <div className="bg-red-600 text-white rounded-lg px-3 py-2 min-w-[50px]">
            <span className="text-xl sm:text-2xl font-bold">
              {timeLeft.hours.toString().padStart(2, '0')}
            </span>
          </div>
          <p className="text-xs text-red-600 mt-1 font-medium">Hours</p>
        </div>
        
        <div className="text-red-600 text-xl font-bold">:</div>
        
        <div className="text-center">
          <div className="bg-red-600 text-white rounded-lg px-3 py-2 min-w-[50px]">
            <span className="text-xl sm:text-2xl font-bold">
              {timeLeft.minutes.toString().padStart(2, '0')}
            </span>
          </div>
          <p className="text-xs text-red-600 mt-1 font-medium">Minutes</p>
        </div>
        
        <div className="text-red-600 text-xl font-bold">:</div>
        
        <div className="text-center">
          <div className="bg-red-600 text-white rounded-lg px-3 py-2 min-w-[50px]">
            <span className="text-xl sm:text-2xl font-bold">
              {timeLeft.seconds.toString().padStart(2, '0')}
            </span>
          </div>
          <p className="text-xs text-red-600 mt-1 font-medium">Seconds</p>
        </div>
      </div>
      
      <p className="text-center text-sm text-red-700 font-medium">
        After timer expires, price increases to $97
      </p>
    </div>
  );
};

export default CountdownTimer;
