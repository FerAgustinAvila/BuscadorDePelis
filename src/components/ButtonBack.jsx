import React from 'react'
import { Link } from 'react-router-dom'
import { TiArrowLeft } from "react-icons/ti";

export const ButtonBack = () => (
  <Link
    className='button is-info'
    to='/'>
    <TiArrowLeft style={{marginRight: 8, fontSize: 28}} ></TiArrowLeft> Home
  </Link>
)