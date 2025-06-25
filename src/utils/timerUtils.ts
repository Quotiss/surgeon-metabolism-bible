
const TIMER_KEY = 'surgeon_metabolism_timer_end';

export const generateArbitraryStartTime = (): Date => {
  // Generate random time between 16h 15m and 18h 45m
  const minMinutes = 16 * 60 + 15; // 16 hours 15 minutes
  const maxMinutes = 18 * 60 + 45; // 18 hours 45 minutes
  const randomMinutes = Math.floor(Math.random() * (maxMinutes - minMinutes + 1)) + minMinutes;
  
  return new Date(Date.now() + randomMinutes * 60 * 1000);
};

export const getTimerEndTime = (): Date | null => {
  try {
    const stored = localStorage.getItem(TIMER_KEY);
    if (stored) {
      return new Date(stored);
    }
  } catch (error) {
    console.warn('Failed to get timer from localStorage:', error);
  }
  return null;
};

export const setTimerEndTime = (endTime: Date): void => {
  try {
    localStorage.setItem(TIMER_KEY, endTime.toISOString());
  } catch (error) {
    console.warn('Failed to save timer to localStorage:', error);
  }
};

export const calculateRemainingTime = (endTime: Date) => {
  const now = new Date().getTime();
  const end = endTime.getTime();
  const total = end - now;

  if (total <= 0) {
    return { total: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  const hours = Math.floor((total % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((total % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((total % (1000 * 60)) / 1000);

  return { total, hours, minutes, seconds };
};
