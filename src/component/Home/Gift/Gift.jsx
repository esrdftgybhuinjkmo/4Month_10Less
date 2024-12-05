import './Gift.css'
import Giftimg from './../../../Img/Home/Gift/pr-0018-r.png'
import Cofie from './../../../Img/Home/Gift/coffee-beans (1).png'
import Cofie2 from './../../../Img/Home/Gift/IC_Mountain.png'

export const Gift = () => {
    return (
        <div className='Gift'>
            <div className='joii'>
            <p className='joi'>Best Gift For Best Friend;</p>
            <p className='joil'>GIFTSET;</p>
            </div>
            <div className="GiftBack"></div>
            <div className='Giftforyou'>
                <div className="todji">
                    <div>
                    <img  id='toi' src={Giftimg} alt="" />
                    </div>
                    <div >
                        <p id='popi1'>285.000</p>
                        <p id='popi2'>Giftset "Cà phê phin Việt Nam"</p>
                        <p id='popi3'>Món quà tuyệt vời dành cho người sành cà phê. Hạt cà phê được Revo cẩn trọng chọn lựa, rang xay theo công nghệ và bí quyết học hỏi từ những nghệ nhân nổi tiếng, cùng với tình yêu, sự đam mê của người làm cà phê… tạo ra những tách cà phê tinh khiết chỉ dành riêng cho bạn.</p>
                        <div className='polot'>
                            <div className='polot2'>
                                <div><img src={Cofie} alt="" /></div>
                                <div><p>Fine Robusta Blend</p> <p>Loại hạt</p></div>
                            </div>
                            <div className='polot3'>
                                <div> <img src={Cofie2} alt="" /> </div>
                                <div><p>700 - 800m</p> <p>Độ cao</p></div>
                            </div>
                    </div>
                    <div>
                        <div className='mua'></div>
                        <div><a id='inoske' href="https://www.chess.com/learn">MUA NGAY</a></div>
                    </div>
                    <div><p id='tiet'>CHI TIẾT</p></div>
                    </div>
                    
                </div>
            </div>
        </div>                                                      
    );
}

