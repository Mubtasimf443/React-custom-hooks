/* بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ  ﷺ*/

import {useRef} from 'react';

export const usePrevious  = (value) => {
  let currentValue = useRef(value)
  let previousValue = useRef()
  
  if (currentValue.current!== value ) {
    previousValue.current = currentValue.current
    currentValue.current = value
  }
  
  return previousValue.current
}









