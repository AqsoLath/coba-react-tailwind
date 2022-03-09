// import {Link} from 'react-router-dom';
import {Tombol} from '../comp_general/Tombol'

function PromoCard(props){
    return  (
        <div className="w-full border-2 border-emas1 rounded-md bg-hitam1">
            <img src={props.src} alt="" className="w-full rounded-t border-b-2 border-b-emas1"/>
            <div className="flex justify-between px-2 py-2 bg-gradient-to-r rounded-b from-hitam1 via-hitam2 to-hitam1 ">
                <h3 className="text-lg text-emas2 text-center my-auto">{props.children}</h3>
                <h4  className="text-center bg my-auto"><Tombol ke={props.kearah} >Detail</Tombol>
</h4>
            </div>
        </div>
    )
}

export default PromoCard;