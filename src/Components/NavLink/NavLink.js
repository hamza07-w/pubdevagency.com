import React from 'react'

const NavLink = (props) => {
  return (
        <li>
            <a href={props.link}
                className="block py-2 pl-3 pr-4 text-lg text-black rounded md:bg-transparent md:p-0"
                aria-current="page">
                {props.name}
            </a>
        </li>
  )
}

export default NavLink