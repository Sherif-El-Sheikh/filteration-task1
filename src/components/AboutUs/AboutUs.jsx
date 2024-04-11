import React from 'react'
import ImgTrash from '../../assets/imgs/fd6f05b7e4f0277ac5571d9a15a12ddb.png';
import style from './AboutUs.module.css'

export default function AboutUs() {
  return (
    <section className={`mt-5 ${style.about}`} style={{fontFamily:'"Poppins", sans-serif'}}>
      <div className={style.layer}>
      <div className="container">
      <div className={`row g-3 p-3 ${style.p2}`}>
        <div className={`col-lg-5 ms-5 ${style.ms0} mt-1`}>
          <h2 className={style.title}>About Us</h2>
          <p style={{fontWeight: 700, width: '538px'}} className={`${style.aboutContent} ${style.w1} ${style.w100}`}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an </p>
          <img src={ImgTrash} style={{width: '419px', borderRadius: '20px'}} className='img-fluid' alt="trash" />
        </div>
        <div className="col-lg-1"></div>
        <div className={`col-lg-5 p-4 ${style.p3} mt-5 text-end`}>
        <h2 className={`${style.title} text-end`}>Where</h2>
        <p style={{fontWeight: 600, width: '494px'}} className={`${style.aboutContent} ${style.w2} ${style.w100} text-end`}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </div>
      </div>
      <div className={`d-flex justify-content-center align-items-center p-5 ${style.p4}`} >
      <button className={`btn btnMain ${style.btnAbout}`}>Help Me</button>
      </div>
      </div>
      </div>
    </section>
  )
}
