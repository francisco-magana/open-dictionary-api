import { NoticeInterface } from "../interfaces/dictionary-interfaces";
import { FaBook } from "react-icons/fa";


export default function Notice({title, description}: NoticeInterface) {
    return(
        <div className='text-center mt-20 flex flex-col items-center'>
            <FaBook className='text-6xl mb-5 text-slate-500'/>
            <h2 className='text-4xl text-slate-500'>{title}</h2>
            <h3 className='text-lg text-slate-600 mt-5'>{description}</h3>
        </div>
    )
}