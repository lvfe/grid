import React, { useState, useEffect, useCallback } from 'react'


function UseWillSize() {
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  })
  
  const onResize = useCallback(() => {
    setSize({
      width: window.innerWidth,
      height: window.innerHeight,
    })
  }, [])
  useEffect(() => {
    window.addEventListener('resize', onResize)
    return () => {
      window.removeEventListener('resize',  onResize)
    }
  }, [onResize])
  return size
}
export default UseWillSize;