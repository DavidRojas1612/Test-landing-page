import React from 'react'
import './FollowSection.scss'
const FollowSection = () => (
    <section className="follow">
        <div className="follow__container">
            <h1 className="follow__title"><span>350 + </span> <span>Woloxers</span></h1>
            <p className="follow__p">@Wolox</p>
            <a href="https://www.twitter.com/wolox" className="button--primary__outline">Siguenos</a>
        </div>
        <div className="follow__container">
            <p className="follow__p">Trabajamos para <span>convertir</span> <span>ideas</span> en productos</p>
        </div>
    </section>
  )


export default FollowSection