import React from 'react';
import trash from '../../assets/imgs/Trash Hauling.png';
import style from './Home.module.css'

export default function Home() {
  return (
    <section className={`${style.home} d-flex flex-column justify-content-around align-items-center vh-100`}>
      <div className="container">
      <div className='d-flex justify-content-center align-items-center'>
        <img src={trash} className={style.trashHauling} alt="trash hauling" />
        <div className='mx-3 position-relative'>
          <div >
          <h1 className={style.roundRock}>Round Rock</h1>
          <span className={style.trushSpan}>Trush Hauling</span>
          </div>
        </div>
      </div>
      <div className={`${style.trashContent} d-flex justify-content-center align-items-center flex-column`}>
        <button className={`btn ${style.btnExpert} mb-3`}>Experts</button>
        <div className={style.loremText}>Lorem
          <span className={style.loremSpan}>Lorem lorem</span>
        </div>
        <p className={`${style.loremParagraph}`}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
        <button className='btn btnMain'>Help Me</button>
    </div>
      </div>

    </section>
  )
}
