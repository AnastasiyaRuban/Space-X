import React, { useEffect, useState } from 'react';

export function CounterContent(startNum, stopNum, duration) {
  let [value, setValue] = useState({ startNum: Number(startNum), idT: null });
  let idT = null;
  console.log(startNum, stopNum, duration);
  useEffect(() => {
    console.log(idT);
    clearTimeout(value.idT);
    if (value.startNum === stopNum) {
      return;
    }

    idT = setTimeout(() => {
      if (startNum > stopNum) {
        setValue({ startNum: Number(value.startNum) - 1, idT: idT });
      } else {
        setValue({ startNum: Number(value.startNum) + 1, idT: idT });
      }
    }, duration / Math.abs(startNum - stopNum));
  }, [value]);

  return <span>{value.startNum}</span>;
}
