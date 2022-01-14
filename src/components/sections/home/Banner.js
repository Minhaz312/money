import React from 'react'
import './home.css'
export default function Banner() {
  return (
    <div className="banner">
      <img
        src="./images/banner.jpg"
        alt="banner image"
        className="banner-image"
      />
      <div
        style={{
          height: '100%',
          width: '100%',
          position: 'absolute',
          top: '0',
          left: '0',
          backgroundColor: 'rgb(0,0,0,0.5)',
        }}
        className="d-flex justify-content-center align-items-center"
      >
        <div className="text-center text-white">
          <h2>Titas Money Exchange</h2>
          <p>Where Service is Our Priority…</p>
        </div>
      </div>
    </div>
  )
}
