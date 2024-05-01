import React from 'react'

const links=[
    {
      id:1,
      url:"/",
      text:"home",
    },
    {
      id:2,
      url:"/about",
      text:"about",
    },
    {
      id:3,
      url:"/products",
      text:"products",
    },
    {
      id:4,
      url:"/cart",
      text:"cart",
    },
    {
      id:5,
      url:"/checkout",
      text:"checkout",
    },
    {
      id:6,
      url:"/orders",
      text:"orders",
    },
]


function NavLinks() {
  return (
    <>
       {links.map((link=>{
         return(
         <NavLinks className="capitalize" key ={link.id} to={link.url}>
            {link.text}
         </NavLinks>
         )
       }))}
    </>
  )
}

export default NavLinks