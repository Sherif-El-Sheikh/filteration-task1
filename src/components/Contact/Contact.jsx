import React from 'react';
import style from './Contact.module.css';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';



export default function Contact() {

  let schemaValidation = Yup.object({
    name: Yup.string().min(3, 'min length is 3').max(15, 'max lenght is 15 char').required('Name is required'),
    email: Yup.string().required('Email is required').email('Enter avalid email'),
    phone: Yup.string().required('Phone is required').matches(/^01[0125][0-9]{8}$/, 'Enter avalid phone number'),
  })


  async function sendInfo(val){
    // console.log(val)
    let {data} = await axios.post('http://upskilling-egypt.com:3001/contact', val)
    // console.log(data)
    if (data.message === 'Email sent successfully') {
      val.name = '';
      val.email = '';
      val.phone = '';
    }
  }

  let formik = useFormik({
    initialValues: {
      email: '',
      name:'',
      phone:''
    },
    validationSchema: schemaValidation ,
    onSubmit: sendInfo
  })

  return (
    
    <section className={`contact ${style.mt7}`}>
      <div className="container">
        <div className="contactHead">
        <div className="titleSec mt-5">
        <h2 className='headTitle mb-3'>Contact Us</h2>
      </div>
        </div>
        <div style={{width: '150px', height:'150px'}}></div>
        <div className="row">
          <div className="col-md-6 ">
          <form onSubmit={formik.handleSubmit}>
            <div className='d-flex flex-column justify-content-center align-items-end align'>
            <input type="text" id='name' value={formik.values.name} name='name' onBlur={formik.handleBlur} onChange={formik.handleChange} className='form-control mt-3' placeholder='Name' />
            {formik.errors.name && formik.touched.name ? 
          <p className='text-danger formError mt-3'>{formik.errors.name}</p>
          : '' 
          }
            <input type="email" id='email' value={formik.values.email} name='email' onBlur={formik.handleBlur} onChange={formik.handleChange} className='form-control mt-3' placeholder='Email' />
            {formik.errors.email && formik.touched.email ? 
          <p className='text-danger formError mt-3'>{formik.errors.email}</p>
          : '' 
          }
            <input type="tel" id='phone' value={formik.values.phone} name='phone' onBlur={formik.handleBlur} onChange={formik.handleChange} className='form-control mt-3' placeholder='Phone' />
            {formik.errors.phone && formik.touched.phone ? 
          <p className='text-danger formError mt-3'>{formik.errors.phone}</p>
          : '' 
          }
            </div>
            <div className={`d-flex justify-content-center mt-3 ${style.mb7} btnSend`}>
              <button type='submit' disabled={!(formik.isValid && formik.dirty)} className='btn btnContact'>Send</button>
          </div>
          </form>
          </div>
          <div className="col-md-1"></div>
          <div className="col-md-5 d-flex flex-column justify-content-center ps-4 info">
            <ul className='list-unstyled'>
              <li>
              <i className="fa-solid fa-envelope fs-5 me-4 "></i>
              <a href="mailto:upskilling.eg1@gmail.com" className='text-decoration-none'>upskilling.eg1<span className=' text-decoration-underline'>@gmail.com</span> </a>
              </li>
              <li className='mt-3'>
              <i className="fa-solid fa-phone fs-5 me-4"></i>
              <span>+20 115 493 2137</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      </section>
  )
}
