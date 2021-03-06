import { Link } from "react-router-dom"

export default function TombolMasuk(props){
    return <Link to="/masuk" className="bg-gradient-to-b from-emas1 to-emas2 text-hitam1 font-bold py-1 px-4 mx-1 text-md rounded hover:bg-gradient-to-b hover:from-yellow-600 hover:to-yellow-300 hover:transition" >{props.children}</Link>
}

export function TombolDaftar(props){
    return <Link to="/daftar" className="bg-gradient-to-b from-putih to-white text-hitam1 font-bold py-1 px-4 mx-1 text-md rounded hover:bg-gradient-to-b hover:from-slate-500 hover:to-slate-200 hover:transition">{props.children}</Link>
}

export function Tombol(props){
    return <Link to={props.ke} className="bg-gradient-to-b from-emas1 to-emas2 text-hitam1 font-bold py-1 px-4 mx-1 text-md rounded hover:bg-gradient-to-b hover:from-yellow-600 hover:to-yellow-300 hover:transition" >{props.children}</Link>

}

export function TombolPutih(props){
    return <Link to={props.ke} className="bg-gradient-to-b from-putih to-white text-hitam1 font-bold py-1 px-4 mx-1 text-md rounded hover:bg-gradient-to-b hover:from-slate-500 hover:to-slate-200 hover:transition">{props.children}</Link>
}
