import React from 'react'
import './GithubCorner.css'

export default ({ url, style, className = '', color = '#151513' }) => (
  <a
    className={`GithubCorner ${className}`}
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Ver en Github"
    style={style}
  >
    <svg
      width="8"
      height="8"
      viewBox="0 0 250 250"
      aria-hidden="true"
      fill={color}
    >
      <path d="M 10,30
       A 20,20 0,0,1 50,30
       A 20,20 0,0,1 90,30
       Q 90,60 50,90
       Q 10,60 10,30 z" />
      <path
        className="octo-arm"
        d="M 10,30
       A 20,20 0,0,1 50,30
       A 20,20 0,0,1 90,30
       Q 90,60 50,90
       Q 10,60 10,30 z"
        fill="currentColor"
      />
      <path
        className="octo-body"
        d="M 10,30
       A 20,20 0,0,1 50,30
       A 20,20 0,0,1 90,30
       Q 90,60 50,90
       Q 10,60 10,30 z"
        fill="currentColor"
      />
    </svg>
  </a>
)
