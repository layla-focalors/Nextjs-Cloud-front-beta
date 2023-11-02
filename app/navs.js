import { BsPencil, IoArrowBack, IoArrowForward } from 'react-icons/io5';
import { BsHouseDoorFill } from 'react-icons/bs'
import { AiFillCloud, AiOutlineCloud } from 'react-icons/ai';
import {MdOutlinePayments} from 'react-icons/md';
export default function NAV(){
    return (
        <div className="na-b">
            <div className='nna'>
                <div className="btn-back"><IoArrowBack></IoArrowBack></div>
                <div className="btn-right"><IoArrowForward></IoArrowForward></div>
            </div>
            <div className='nma'>
                <div className='btn-l3'><BsHouseDoorFill className='btn-ll'></BsHouseDoorFill></div>
                <div className='btn-l4'>
                    <AiOutlineCloud className='btn-lll'></AiOutlineCloud>
                </div>
                <div className='btn-l4'>
                    <MdOutlinePayments className='btn-llll'></MdOutlinePayments>
                </div>
            </div>
            <div className='account'>     
            </div>
        </div> 
    )
}

export { NAV }