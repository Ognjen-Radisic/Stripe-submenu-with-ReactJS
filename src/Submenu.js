import React, { useState, useRef, useEffect } from 'react'
import { useGlobalContext } from './context'

const Submenu = () => {
  const { isSubmenuOpen, location } = useGlobalContext()
  const container = useRef(null)
  useEffect(() => {
    const submenuCoordinates = container.current
    const { center, bottom } = location

    submenuCoordinates.style.left = `${center}px`
    submenuCoordinates.style.top = `${bottom}px`
  }, [location])

  return (
    <aside
      className={`${isSubmenuOpen ? 'submenu show' : 'submenu'}`}
      ref={container}
    >
      submenu component
    </aside>
  )
}

export default Submenu
