import { useState } from "react"

export default function TeamProfile(props:any) {
    const [checking,setChecking] = useState(false)
    const onClickWarkerAdd = (userId:string) => () => {
        if(props.warker.includes(userId)){
          const toggleDel =  props.warker.filter((el:any) => {
              return el !== userId
          })
          props.setWarker(toggleDel)
          setChecking(false)
        }else{
          props.setWarker([...props.warker,userId])
          setChecking(true)
        }
    }

    return (
        <li 
        onMouseEnter={props?.onMouseEnterprofileOn(props?.userId)}
        onMouseLeave={props?.onMouseLeaveProfileOn(props?.userId)}
        onClick={onClickWarkerAdd(props?.userId)}
      >
        <button>
          {
            props?.imgUrl ? <img src={props.imgUrl} /> :
            <img src="/img/unprofile.svg" alt="unprofile" />
          }
        </button>
        <div id={props?.userId} className="info_box">
          <h4>{props?.userName}</h4>
          <h5>{props?.userPosition || "미정"}</h5>
        </div>
        {checking ? <div>체크</div> : null}
      </li>
    );
}