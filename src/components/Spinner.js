import React, { Component } from 'react'
import loding from './Loding.gif'

export class Spinner extends Component {
  render() {
    return (
      <div className='text-center'>
        <img src={loding} alt="loding" />
      </div>
    )
  }
}

export default Spinner
