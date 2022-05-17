import React from 'react'
import { Link } from 'react-router-dom'

export const Banner = () => {
  return (
    <div>
        <nav>
              <img className='w-100 banner position-absolute top-0 start-0' src="https://res.cloudinary.com/donoutoby/image/upload/v1652736690/pngtree-violet-blue-neon-strip-dynamic-banner-background-curvebeamlightneon-lightviolet-blue-image_83239_rzvarc.jpg" alt="" />
              <div className='contenedor'>
                  <div className='float-start'>
                      <img className="logo position-absolute" src="https://res.cloudinary.com/donoutoby/image/upload/v1644884847/logo_lkdkph.png" alt="logo" />
                  </div>
              <ul>
                  <li>
                      <Link className='vinculos' to="" >
                      <img className='rounded-circle' src="https://res.cloudinary.com/donoutoby/image/upload/v1652756922/head_vkzvqa.jpg" />
                      Mi Perfil
                      </Link>
                      </li>
                  <li>
                      <Link className='vinculos' to="/">
                          <img className='rounded-circle' src="https://res.cloudinary.com/donoutoby/image/upload/v1652758977/home_odkuvp.jpg" />
                          HOME
                      </Link>
                      </li>
              </ul>
              </div>
        </nav>
    </div>
  )
}
