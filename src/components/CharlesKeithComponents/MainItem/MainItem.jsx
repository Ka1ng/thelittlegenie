import React, { useState } from 'react'
import './MainItem.css'
import Carousel from 'nuka-carousel'

import Ckdatas from '../../../data/CharlesKeith/charlesKeith.json'

export default function MainItem() {

    let [datas, setDatas] = useState(Ckdatas);

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
        <div className='mainItem container'>
            <div className="itemContainer">
                {datas.map(item => (
                    <div className="itemBox" key={item.id}>

                        {Object.keys(item.checkImg).map(val => {
                            if (item.checkImg[val]) {
                                return (
                                    <div key={val}>
                                        <Carousel>
                                            {item.imgPage[val].map(pic => (
                                               <a href={`/charles&keith/${item.id}`} key={pic}><img src={pic} alt=""/></a> 
                                            ))}
                                        </Carousel>
                                    </div>

                                )
                            }
                        })}
                        <div className="colorContainer">
                            {item.colorType.map(color => (
                                <div key={color} className={`${item.checkImg[color] ? "colorBox active" : "colorBox"}`} onClick={() => handleChangeImg(item.id, color)}>
                                    <div className="colorType" style={{ backgroundColor: color }}></div>
                                </div>
                            ))}
                        </div>
                        <div className="name">{item.name} ({item.size})</div>
                        <div className="price">Ks {item.price},000</div>
                        {/* <div className="payment">or 3 months payment of Ks 80,000</div> */}
                        <div className="code">(Code - {item.code})</div>
                    </div>
                ))}
            </div>
        </div>
    )
}







    