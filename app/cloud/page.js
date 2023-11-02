import NAV from "../navs"
import { FaUbuntu } from 'react-icons/fa'
import { BsWindows } from 'react-icons/bs'

export default function Cloud(){
    let plan_count = [1, 2, 3, 4, 5, 6]
    let other_plan = ['Premium Windows', '무제한 윈도우']
    return (
        <div>
            <NAV></NAV>
            <div className="main">
                {/* <p>Now Plan</p> */}
                <div className="rule">
                    <p className="rule-title">Now plan</p>
                    <div className="rule-title">무제한 윈도우 & 무제한 우분투</div>
                    <div className="logos">
                        <BsWindows className="logo-2"></BsWindows>
                        <FaUbuntu className="logo-1"></FaUbuntu>
                    </div>
                    <div className="rule-lt">D-335</div>
                </div>
            </div>
            <div className="otherplan">
                
            </div>
        </div>
    )
}