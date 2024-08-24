/* بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ  ﷺ  InshaAllah */



import { useState } from 'react'

const useToggle = (defaultValue) => {
    let [state , setState] = useState(defaultValue !== undefined ? defaultValue : false)

    function toggle(params) {
        setState(prev => 
            typeof  params === 'boolean' ? params : !prev 
        )
    }

    return [state, toggle]
}

export default useToggle






