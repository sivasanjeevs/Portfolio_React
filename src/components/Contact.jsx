import { CONTACT } from '../constants';


const Contact = () => {
  return (
    <div className='border-bb border-neutral-900 pb-20'>
        <h1 className='my-10 text-center text-4xl'>Get in Touch</h1>
        <div className='text-center tracking-tighter'>
            <p className='my-4 '>{CONTACT.phoneNo}</p>
            <p className='my-4 '></p>
            <a href='#' className=''>{CONTACT.email}</a>
        </div>
    </div>
  )
}

export default Contact