import { BsPencil, IoArrowBack, IoArrowForward } from 'react-icons/io5';
import { BsHouseDoorFill } from 'react-icons/bs'
import { AiFillCloud, AiOutlineCloud } from 'react-icons/ai';
import {MdOutlinePayments} from 'react-icons/md';
import Link from 'next/link';
export default function NAV(){
    return (
        <div className="na-b">
            <div className='nna'>
                <Link href={"/"}>
                    <div className="btn-back"><IoArrowBack></IoArrowBack></div>
                </Link>
                <Link href={"/"}>
                    <div className="btn-right"><IoArrowForward></IoArrowForward></div>
                </Link>
            </div>
            <div className='nma'>
                <Link href={'/home'}>
                    <div className='btn-l3'><BsHouseDoorFill className='btn-ll'></BsHouseDoorFill></div>
                </Link>
                <Link href={'/cloud'}>
                    <div className='btn-l4'>
                        <AiOutlineCloud className='btn-lll'></AiOutlineCloud>
                    </div>
                </Link>
                <Link href={'/payment'}>
                    <div className='btn-l4'>
                        <MdOutlinePayments className='btn-llll'></MdOutlinePayments>
                    </div>
                </Link>
            </div>
            <div className='account'>     
            </div>
        </div> 
    )
}

export { NAV }