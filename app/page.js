import NAV from "./navs"
import { MdAddToDrive } from 'react-icons/md'
import { AiFillWindows } from 'react-icons/ai'
import { FaUbuntu } from 'react-icons/fa'

export default function Example() {
  let pc_list = ['Windows 10', 'IP : test.deepdynamic.me', 'Admin']
  let pc_list2 = ['Ubuntu', 'IP : ubsn.deepdynamic.me', 'CLP']
  return (
    <div>
      <NAV></NAV>
      <div className="control-m">
        <div className="run-c-p">
          My Computer
          <div className="right">
            <div className="run-c-">
              <p className="name">{pc_list[0]}</p>
              <AiFillWindows className="logo"></AiFillWindows>
              <p className="addr">{pc_list[1]}</p>
            </div>
            <div className="more">
            <p className="name">{pc_list2[0]}</p>
              <FaUbuntu className="logo"></FaUbuntu>
              <p className="addr">{pc_list2[1]}</p>
            </div>
            <div className="render">
              <MdAddToDrive className="render-c
              "></MdAddToDrive>
            </div>
          </div>
          <div className="side"></div>
        </div>
      </div>
    </div>
  )
}
