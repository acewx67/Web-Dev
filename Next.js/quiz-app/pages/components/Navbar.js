import React from 'react'
import Image from 'next/image'

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <Image
          className="logo"
          src={"/quiz.jpeg"}
          width={150}
          height={60}
          alt="logo"
        />
      </div>
    </>
  );
}

export default Navbar
