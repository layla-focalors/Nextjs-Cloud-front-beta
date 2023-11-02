import NAV from "../navs"
import { AiFillWindows } from 'react-icons/ai'
export default function pages(){
    return (
        <div>
            <NAV></NAV>
            <div className="address">
                <div className="ipb">
                    <p className="ipb-w">IP : dns.deepdynamic.me</p>
                    <AiFillWindows className="ipb-w-w"></AiFillWindows>
                    <p className="ipb-w-c">ID : windows10 | PW : password</p>
                </div>
            </div>
        </div>
    )
}