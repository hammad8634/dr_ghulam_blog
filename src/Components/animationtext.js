import React, { useEffect, useState } from "react";

const CounterAnimation = ({ value }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (count < value) {
        setCount(count + 1);
      }
    }, 1);
    return () => clearInterval(interval);
  }, [count, value]);

  return (
    <div>
      <div>{count}</div>
      <div>
        <CounterAnimation value={5000} />
      </div>
    </div>
  );
};

export default CounterAnimation;
