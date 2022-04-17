import { useRef, useEffect, useState } from 'react';
import './style.css'
import React from 'react';


export function Popup(props) {

  const ref = useRef();

  useEffect(() => {
    setTimeout(() => {
      ref.current.style.display = 'none'
    }, 100)
  }, [props.param])

  return (
    <section className='sectionalert'>
      <div ref={ref} className='alert' style={{ display: props.param === true ? 'flex' : 'none' }} >
        <div>
          <label>Registro cadastrado com sucesso ! </label>
        </div>
      </div>
    </section>
  )
}
