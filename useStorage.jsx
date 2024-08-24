 /* بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ  ﷺ  InshaAllah */ 
 
 import {useState, useMemo} from 'react';
 
 
 const useStorage = (name, DefaultValue, windowObject) => {
  let [value,setValue ] = useState(() => {
    let jsonValue = windowObject.getItem(name)
    if (jsonValue !== null ) return JSON.parse(jsonValue)
    if (typeof DefaultValue === 'function') return DefaultValue()
    return DefaultValue
  })
  
  useMemo(e => {
    if (value !== undefined) return windowObject.removeItem(name)
    windowObject.setItem(name, JSON.stringify(value))
  }, [name, value,  windowObject])
  
  function RemoveValue() {
    setValue(undefined)
  }
  
  return [value, setValue, RemoveValue]
  
 } 
 
 
 
 
 
 
 
 
