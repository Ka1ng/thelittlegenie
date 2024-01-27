import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import Navbar from '../Navbar/Navbar';
import Carousel from 'nuka-carousel';
import pic1 from '../../../assets/CharlesKeithPage/KoaPushLockTopHandleBag/BlackColor/black1.jpg'
import pic2 from '../../../assets/CharlesKeithPage/KoaPushLockTopHandleBag/BlackColor/black2.jpg'

import Ckdatas from '../../../data/CharlesKeith/charlesKeith.json'

export default function Detail() {

    let [datas, setDatas] = useState(Ckdatas)

    let params = useParams();

    let handleChangeImg = (item_id, color) => {
        setDatas(prevState => {
            return prevState.map(item => {
                if (item.id == item_id) {
                    let newCheckImg = {};
                    Object.keys(item.checkImg).map(val => {
                        item.checkImg[val] = false;
                        newCheckImg = { ...item.checkImg, [color]: true }
                    })
                    return { ...item, checkImg: newCheckImg }
                }
                else {
                    return item;
                }
            })
        })
    }

    return (
        <>
            <Navbar />
            <div className='detail container'>
                {datas.map(item => {
                    if (item.id == params.id) {
                        return (
                            <div className="itemDetail">
                                {Object.keys(item.checkImg).map(val => {
                                    if (item.checkImg[val]) {
                                        return (
                                            <div className='imgBox' key={val}>
                                                <Carousel>
                                                    {item.imgPage[val].map(pic => (

                                                        <a href={`/charles&keith/${item.id}`} key={pic}><img src={pic} alt="" /></a>

                                                    ))}
                                                </Carousel>
                                            </div>

                                        )
                                    }
                                })}
                                <div className='textBox'>
                                    <div className="detailText">
                                        <div className="name">{item.name} - {Object.keys(item.checkImg).map(val => {
                                            if (item.checkImg[val]) {
                                                return (
                                                    <span className="name">{item.colorPage[val]}</span>
                                                )
                                            }
                                        })}</div>
                                        <div className="price">Ks {item.price},000</div>
                                        <div className="payment">or cashdown of Ks {Math.round(item.price * 0.95)},000 (5% off)</div>
                                        <div className="payment">or 3 months payment of Ks {Math.round(item.price / 3)},000</div>
                                    </div>
                                    <div className="colorContainer">
                                        <div>Color : {Object.keys(item.checkImg).map(val => {
                                            if (item.checkImg[val]) {
                                                return (
                                                    <span className="name">{item.colorPage[val]}</span>
                                                )
                                            }
                                        })}</div>
                                        <div className='colorDetailContainer'>
                                            {item.colorType.map(color => (
                                                <div key={color} className={`${item.checkImg[color] ? "colorBox active" : "colorBox"}`} onClick={() => handleChangeImg(item.id, color)}>
                                                    <div className="colorType" style={{ backgroundColor: color }}></div>
                                                </div>
                                            ))}
                                        </div>

                                    </div>
                                    <div className="size">Size : {item.size}</div>
                                    <div className="productDetails">
                                        <div className="payment">Product Details</div>
                                        <div className='detailList'>
                                            <ul>
                                                {item.detail1.map(d => (
                                                    <li>{d}</li>
                                                ))}

                                            </ul>
                                            <ul>
                                                {item.detail2.map(d => (
                                                    <li>{d}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                })}

            </div>
        </>

    )
}
