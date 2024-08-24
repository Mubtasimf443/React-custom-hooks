/*   بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ  ﷺ  */ 

import {useState,useRef, useCallback} from 'react';


export const useStateWithHistory = (defaultValue, {capacity = 10}) => {
  let [value,setValue] = useState(defaultValue)
  let historyRef = useRef([value])
  let pointerRef = useRef(0)
  
  
  const Set = useCallback( v => {
    let resolveValue = typeof v === 'function'? v(value) : v
    if (historyRef.current[pointerRef.current]!== resolveValue ) {
      if (pointerRef.current < historyRef.current.length -1 ) {
       // if any time historyref is not configured for pointerRef
        historyRef.current.splice(pointerRef.current + 1) 
      }
      historyRef.current.push(resolveValue)
      while (historyRef.current.length > capacity) {
       historyRef.current.shift()
      }
      pointerRef.current = historyRef.current.length -1
      setValue(resolveValue)
    }
  }, [capacity, value])
  
  
  const back = useCallback( () => {
    if ( pointerRef.current <= 0 ) return
    
    pointerRef.current--
    setValue(history.current[pointerRef.current])

  }, []) 
  
  
  const forward = useCallback(() => {
    if(pointerRef.current >= historyRef.current.length -1) return
   
    pointerRef.current++;
    setValue(history.current[pointerRef.current])
  },[])
  
  
  const go = useCallback(index => {
    if (index < 0 || index >= historyRef.current.length -1 ) return 
    
    pointerRef.current = index
    setValue(history.current[pointerRef.current])
  })
  
  
  return [value,  setValue,  {
   history : historyRef.current,
   pointer : pointerRef.current,
   Set, go, back, forward
  } ]
}





