import { useDispatch, useSelector } from 'react-redux'
import icons from '../image/scale/icons-gear-wheel.png'
import './scale.css'
import { backgroundColors, ChangeColors, colors } from '../../../hooks/DateSlise'
import { useState } from 'react'
import { scaleData } from '../data'

export function Scales(){
    const [btnOpen, SetBtnOpen] = useState(false)
    const Fillcolors = useSelector(colors)
    const color = useSelector(backgroundColors)
    const dispatch = useDispatch()
     
    function changeColors(color){
        dispatch(ChangeColors(color))
        SetBtnOpen(false)
    }
    
    function OpenBtn(){
        SetBtnOpen(!btnOpen)
    }

    return(
        <div className={`scale`}>
            <button onClick={() => OpenBtn()} className={`scale__btn btn-${Fillcolors}`}><img src={icons} alt='icons' className='scale__btn__icons' /></button>
            <section className={`scale__section back-${color} ${btnOpen === true ? 'scale__active' : ''}`}>
                {scaleData.map((item,index) => (
                    <div key={index} onClick={() => changeColors(item.colors)} className={`scale__section-${btnOpen === true ? 'active' : ''} ${item.class}`}></div>
                ))}
            </section>
        </div>
    )
}
// className={`scale__section-${btnOpen === true ? 'active' : ''} color-n1`}
//  сделать так чтобы цвет менялся, доделать чтобы меню открывалось и само меню надо настроить
//  так же доделать header 