import React from 'react'
import Fade from 'react-reveal/Fade'

export default function Service({ image, title }) {
  return (
    <Fade bottom>
      <div
        className="border rounded bg-light shadow-sm my-3"
        style={{ borderTopRightRadius: '15px', borderTopLeftRadius: '15px' }}
      >
        <div
          style={{
            overflow: 'hidden',
            height: '100%',
            minheight: '250px',
            borderRadius: '15px',
          }}
        >
          <img
            src={`${image}`}
            alt={`${image}`}
            style={{ width: '100%', height: '250px' }}
            className="service-image"
          />
        </div>
        {title != null ? <h5 className="my-3 text-center">{title}</h5> : null}
      </div>
    </Fade>
  )
}
