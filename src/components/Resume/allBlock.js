import { useSelector } from "react-redux"
import { backgroundColors } from "../../hooks/DateSlise"
import './allBlock.css'
export function AllBlock(){
    const color = useSelector(backgroundColors)
    return(
        <div className="allblock">
            <h3 className={`allblock__title text-${color}`}>Временно не доступно!</h3>
        </div>
    )
}