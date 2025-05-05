import React, { useEffect, useState } from "react";
const day = 1000 * 60 * 60 * 24;
const hour = day / 24;
const minute = hour / 60;
const second = minute / 60;

const CountDown = ({ expiryDate }) => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(intervalId);
  }, [expiryDate]);

  function calculateTimeLeft() {
    const now = Date.now();
    const difference = expiryDate - now;

    if (difference <= 0) {
      return "*Expired*";
    }
    const daysLeft = Math.floor(difference % day);
    const hoursLeft = Math.floor((difference % day) / hour);
    const minutesLeft = Math.floor(((difference % day) % hour) / minute);
    const secondsLeft = Math.floor(
      (((difference % day) % hour) % minute) / second
    );

    return {
      days: daysLeft,
      hours: hoursLeft,
      minutes: minutesLeft,
      seconds: secondsLeft,
    };
  }
  return (
    <>
      {typeof timeLeft === "string"
        ? timeLeft
        : `${timeLeft.hours}h ${timeLeft.minutes}m ${timeLeft.seconds}s`}
    </>
  );
};

export default CountDown;
