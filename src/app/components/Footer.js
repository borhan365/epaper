import Image from 'next/image'
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter, BsYoutube } from 'react-icons/bs'
import logo from '../assets/images/logo.png'

function Footer() {
  return (
    <>
      <footer className='footer'>
        <div className="container">
          <Image className='footer-logo' width={120} height={100} src={logo} alt='footer logo' />
          <div className="footer-content-wrapper">
            <p>সম্পাদক : তাসমিমা হোসেন। ইত্তেফাক গ্রুপ অব পাবলিকেশন্স লিঃ-এর পক্ষে তারিন হোসেন কর্তৃক ৪০, কাওরান বাজার, ঢাকা-১২১৫ থেকে প্রকাশিত ও মুহিবুল আহসান কর্তৃক নিউ নেশন প্রিন্টিং প্রেস, কাজলারপাড়, ডেমরা রোড, ঢাকা-১২৩২ থেকে মুদ্রিত। কাওরান বাজার ফোন: পিএবিএক্স : ৫৫০১১৭০০, বার্তা ফ্যাক্স: ৪১০১০১৭৭-৮, মফস্বল ফোন: ৪১০১০১৭২, বিজ্ঞাপন-ফোন: ৫৫০১১৭১৪, ৪৭১১৫৮৮৩, e-mail: ittefaq.adsection@yahoo.com, সার্কুলেশন ফোন: ৫৫০১২০২৭ । www.ittefaq.com.bd, e-mail: ittefaqpressrelease@gmail.com</p>
          </div>

          <div className="footer-social-media">
              <BsFacebook />
              <BsTwitter />
              <BsInstagram />
              <BsLinkedin />
              <BsYoutube />
            </div>
        </div>
      </footer>
    </>
  )
}

export default Footer