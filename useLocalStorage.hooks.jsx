/* بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ  ﷺ  InshaAllah */

import React, { useMemo, useState } from 'react'

const useLocalStorage = (key,initialValue) => {
  let [arr , setArr] = useState(() => {
    let stoarage = localStorage.getItem(key)
    if (stoarage !== null) return JSON.parse(stoarage)
    return initialValue
  })

  useMemo(() => {
    localStorage.setItem(key,JSON.stringify(arr))
  },[arr])
  return [arr , setArr]
}

export default useLocalStorage











