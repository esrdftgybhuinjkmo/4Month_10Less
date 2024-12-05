import './Bung.css'
import BunV1 from './../../../Img/Home/BungV/image (4).png'
import BunV2 from './../../../Img/Home/BungV/IMAGE (5).png'
import BunV3 from './../../../Img/Home/BungV/IMAGE (6).png'
import BunV4 from './../../../Img/Home/BungV/IMAGE (7).png'

export const Bung = () => {
    return (
        <div className="Bung" >
            <div className='vi'>
                <p className='tort'>Choose Your Favorite</p>
                <p className='tort2'>CHUẨN GU ĐÚNG VỊ</p>

            </div>
            <div id="bacround">

            </div>
            <div className='BungV10'>
                <button id='BungBtn'>🡆</button>
                <div className='Bung1' >
                    <div >
                    <img src={BunV1} alt="" />
                    </div>
                    <div className='Bunv1'>
                        <p id='su'>99.000</p>
                        <p id='suu'>REVO Morning</p>
                        <p id='suuu'>đắng, hậu ngọt, hương hoa </p>
                        <div className='vio'>
                        <div className='voii'>
                        <a id='voi' href="https://www.chess.com/learn"> MUA NGAY</a>
                        </div>
                        <p id='chi'>CHI TIẾT</p>
                        </div>
                    </div>
                </div>
                <div className='Bung02'>
                <div className='Bung1' >
                    <div >
                    <img src={BunV2} alt="" />
                    </div>
                    <div className='Bunv1'>
                        <p id='su'>99.000</p>
                        <p id='suu'>REVO Origin</p>
                        <p id='suuu'>đắng, hậu ngọt, hương hoa </p>
                        <div className='vio'>
                        <div className='voii'>
                        <a id='voi' href="https://www.chess.com/learn"> MUA NGAY</a>
                        </div>
                        <p id='chi'>CHI TIẾT</p>
                        </div>
                    </div>
                    </div>
                </div>
                </div>

                <div className='BungV20'>
                <div className='Bung1' >
                    <div >
                    <img src={BunV3} alt="" />
                    </div>
                    <div className='Bunv1'>
                        <p id='su'>99.000</p>
                        <p id='suu'>REVO Everyday</p>
                        <p id='suuu'>đắng, hậu ngọt, hương hoa </p>
                        <div className='vio'>
                        <div className='voii'>
                        <a id='voi' href="https://www.chess.com/learn"> MUA NGAY</a>
                        </div>
                        <p id='chi'>CHI TIẾT</p>
                        </div>
                    </div>
                </div>
                <div className='Bung02'>
                <div className='Bung1' >
                    <div >
                    <img src={BunV4} alt="" />
                    </div>
                    <div className='Bunv1'>
                        <p id='su'>99.000</p>
                        <p id='suu'>REVO Đậm Đà</p>
                        <p id='suuu'>đắng, hậu ngọt, hương hoa </p>
                        <div className='vio'>
                        <div className='voii'>
                        <a id='voi' href="https://www.chess.com/learn"> MUA NGAY</a>
                        </div>
                        <p id='chi'>CHI TIẾT</p>
                        </div>
                    </div>
                    </div>
                </div>
                </div>

        </div>
    );
}

 
