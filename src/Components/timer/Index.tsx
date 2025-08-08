import { useEffect, useState } from "react";
import ClockGif from "../../assets/gifs/Clock.gif";

export const Timer = () => {
  const targetDate = new Date("2025-08-16T20:00:00"); // Target event date

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
  });

  useEffect(() => {
    const updateTimer = () => {
      const now = new Date();
      const diff = targetDate.getTime() - now.getTime();

      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0 });
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor(
        (diff % (1000 * 60 * 60)) / (1000 * 60)
      );

      setTimeLeft({ days, hours, minutes });
    };

    updateTimer(); // run once immediately
    const interval = setInterval(updateTimer, 60 * 1000); // update every minute

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center md:pl-4 gap-2 ">
      <img src={ClockGif} alt="Clock" className="w-10 h-10 md:mr-2" />
      <div className="text-center text-[#1F2937] font-medium md:text-[48px] text-[48px] flex ">
        <p className="flex justify-center items-center">{timeLeft.days} : {timeLeft.hours} : {timeLeft.minutes}</p>
      </div>
    </div>
  );
};
