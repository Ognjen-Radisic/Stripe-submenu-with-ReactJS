import React, { useRef, useEffect } from 'react'
import { useGlobalContext } from './context'

const Submenu = () => {
  const {
    isSubmenuOpen,
    location,
    page: { page, links },
  } = useGlobalContext()
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
      <h4>{page}</h4>
      <article className={`submenu-center col-${links.length}`}>
        {links.map((link, index) => {
          const { url, icon, label } = link
          return (
            <a key={index} href={url}>
              {icon}
              {label}
            </a>
          )
        })}
      </article>
    </aside>
  )
}

export default Submenu
