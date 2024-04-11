import React from 'react';
import style from './Services.module.css';
import Img1 from '../../assets/imgs/b51e46d3d5bb005d1e122864372c48f7.png';
import Img2 from '../../assets/imgs/fba758a9dda73825ff383b42c06233e8.png';
import Img3 from '../../assets/imgs/Rectangle 250.png';

export default function Services() {
  return (
    <section className={ `services ${style.mt7}`}>
      <div className="container">
      <div className="titleSec">
        <h2 className='headTitle mb-3'>Services</h2>
      </div>
      <div className="row mt-5 g-3 gy-4">
        <div className={`col-lg-4 col-md-5 ${style.me6}`}>
        <div className="card">
        <img src={Img1} className="card-img-top" alt="Street garbage"/>
      <div className="card-body">
          <h5 className="card-title">Lorem Ipsum</h5>
          <p className="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled</p>
      </div>
    </div>
        </div>
        <div className="col-lg-4 col-md-5">
        <div className="card">
        <img src={Img2} className="card-img-top" alt="car parts"/>
      <div className="card-body">
          <h5 className="card-title">Lorem Ipsum</h5>
          <p className="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled</p>
      </div>
    </div>
        </div>
        <div className="col-lg-4 col-md-5">
        <div className="card">
        <img  src={Img3} className={`card-img-top ${style.h200}`} height={255} alt="plastic waste"/>
      <div className="card-body">
          <h5 className="card-title">Lorem Ipsum</h5>
          <p className="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled</p>
      </div>
    </div>
        </div>
      </div>
      <div className={`d-flex justify-content-center align-items-center p-5 ${style.p4}`} >
      <button className='btn btnMain'>Help Me</button>
      </div>
      </div>
    </section>
  )
}
