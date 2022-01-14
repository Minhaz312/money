import React from 'react'

export default function Service({ image, title }) {
  return (
    <div
      className="border rounded bg-light shadow-sm my-3"
      style={{ height: '100%', minheight: '250px', borderRadius: '15px' }}
    >
      <img
        src={`./images/services/${image}`}
        alt={`${image}`}
        className="w-100 h-100"
      />
      {title != null ? <h5 className="my-3">{title}</h5> : null}
    </div>
  )
}
