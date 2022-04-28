import React from 'react'
import navItem from './navItem'

const SubNav = () => {
  return (
    <div>
      {path.subMenu && (
                  <>
                  <FontAwesomeIcon icon={'fa-angle-up'} className={styles.htmlCssArrow} onClick={toggle}/>
                  <ul className={styles.subMenu} >
                    {path.subMenu.map((subpath) => (
                      <li className={styles.subMenuLinks}>
                        <Link to={subpath.link} className={styles.subMenuLink}>{subpath.title}</Link>
                      </li>
                    ))}
                      </ul>
                    </>
                )}
    </div>
  )
}

export default SubNav
