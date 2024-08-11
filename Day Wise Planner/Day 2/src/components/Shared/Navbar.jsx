// import React from 'react'
// import { Link, NavLink } from 'react-router-dom'
// import { ModeToggle } from '../mode-toggle'

// const Navbar = () => {
//   const NavLinks = [
//     {
//       title: "Home",
//       path: "/"
//     },
//     {
//       title: "Login",
//       path: "/login"
//     },
//     {
//       title: "Register",
//       path: "/register"
//     }
//   ]
//   return (
//     <div className="absolute top-0 left-0 w-full h-[8vh] flex flex-row justify-center items-center shadow-sm shadow-primary/50">
//       {/* <div className="w-1/4 h-full text-primary font-bold flex justify-start items-center text-lg"> App Name</div> */}
//       <div className='w-2/4 h-full font-bold flex flex-row justify-end items-center gap-8'>
//         {/* <Link to='/'>Home </Link>
//         <Link to='/login'>Login </Link>
//         <Link to='/register'>Register </Link> */}
//         {
//           NavLinks.map((links, index) => (
//             <li key={index} className='list-none'>
//               <NavLink to={links.path}>
//                 {links.title}
//               </NavLink>
//             </li>
//           ))
//         }
//         <ModeToggle />
//       </div>
//     </div>
//   )
// }

// export default Navbar

import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { ModeToggle } from '../mode-toggle'

const Navbar = () => {
  const NavLinks = [
    {
      title: "Home",
      path: "/"
    },
    {
      title: "Login",
      path: "/login"
    },
    {
      title: "Register",
      path: "/register"
    },
    {
      title:"Jobs",
      path:"/jobs"
    }
  ]
  return (
    <div className="w-full h-[8vh] flex flex-row justify-center items-center shadow-sm shadow-primary/50">
      <div className="w-1/4 h-full text- font-bold flex justify-start items-center text-lg"> JobAura</div>
      <div className='w-2/4 h-full font-bold flex flex-row justify-end items-center gap-8'>
        {
          NavLinks.map((links, index) => (
            <li key={index} className='list-none'>
              <NavLink to={links.path}>
                {links.title}
              </NavLink>
            </li>
          ))
        }
        <ModeToggle />
      </div>
    </div>
  )
}

export default Navbar