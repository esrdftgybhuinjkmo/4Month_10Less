import './Banner.css'
import BannerImg from '../../../Img/Home/Banner/30072807_909538065884146_2710474531215143694_o.jpg'
import Revo from '../../../Img/Home/Banner/revo_logo.png'

export const Banner = () => {
    return (
        
        <div >
            <div id='Bannerid'>
            <img className='BannerImg' src={BannerImg} alt="" />
            
            </div>
            <img src={Revo} className='revo' alt="" />
            <p className='yourCofee'>YOUR <p id='personalized'>PERSONALIZED</p> COFFEE</p>
            <div className='pain'> 
            <p id='trang'>TRANG CHỦ</p>
            <p>COFFEE</p>
            <p>PHIN MẠ MÀU</p>
            <p>COMBO PHIN PHÊ</p>
            <p>GIFTSET</p>
            <p>LIÊN HỆ</p>



            </div>
        </div>
        
    );
}

