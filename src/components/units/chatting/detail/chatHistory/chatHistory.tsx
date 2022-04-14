import {
  CheckPrevDate,
  SetDateFunc,
  ValidNowDate,
} from "../../../../../commons/library/calcDate";
import useFetchUser from "../../../../commons/hooks/useFetchUser";
import { IPropsChatHistory } from "../chattingDetail.types";
import { v4 as uuidv4 } from "uuid";
import { getTime } from "../../../../../commons/library/getTime";

export default function ChatHistory(props: IPropsChatHistory) {
  const { data: loginInfo } = useFetchUser();
  return (
    <>
      {props.el.user.name === loginInfo?.fetchUser.name ? (
        <>
          {props.idx === 0 && ValidNowDate(props.el.createdAt) && (
            <li className="join">
              <span className="alert">{SetDateFunc(props.el.createdAt)}</span>
            </li>
          )}
          {props.idx !== 0 &&
            CheckPrevDate(
              props.chatsArr[props.idx - 1].createdAt,
              props.el.createdAt
            ) && (
              <li className="join">
                <span className="alert">{SetDateFunc(props.el.createdAt)}</span>
              </li>
            )}
          <li className="sent" key={uuidv4()}>
            <span className="message">{props.el.content}</span>
            <span className="time">{getTime(props.el.createdAt)}</span>
          </li>
        </>
      ) : (
        <>
          {props.idx === 0 && (
            <>
              {ValidNowDate(props.el.createdAt) && (
                <li className="join">
                  <span className="alert">
                    {SetDateFunc(props.el.createdAt)}
                  </span>
                </li>
              )}
              <li className="received" key={uuidv4()}>
                <span className="profile">
                  <img
                    className="image"
                    src="https://placeimg.com/50/50/any"
                    alt="any"
                  />
                  <span className="user">
                    <span className="name">{props.el.user.name}</span>
                    <span className="message-box">
                      <span className="message">{props.el.content}</span>
                      <span className="time">
                        {getTime(props.el.createdAt)}
                      </span>
                    </span>
                  </span>
                </span>
              </li>
            </>
          )}
          {props.idx !== 0 &&
          props.chatsArr[props.idx - 1].user.name === props.el.user.name ? (
            <>
              {CheckPrevDate(
                props.chatsArr[props.idx - 1].createdAt,
                props.el.createdAt
              ) && (
                <li className="join">
                  <span className="alert">
                    {SetDateFunc(props.el.createdAt)}
                  </span>
                </li>
              )}
              <li className="received">
                <span className="continue-message">{props.el.content}</span>
                <span className="time">{getTime(props.el.createdAt)}</span>
              </li>
            </>
          ) : (
            <>
              {props.idx !== 0 &&
                CheckPrevDate(
                  props.chatsArr[props.idx - 1].createdAt,
                  props.el.createdAt
                ) && (
                  <li className="join">
                    <span className="alert">
                      {SetDateFunc(props.el.createdAt)}
                    </span>
                  </li>
                )}
              <li className="received" key={uuidv4()}>
                <span className="profile">
                  <img
                    className="image"
                    src="https://placeimg.com/50/50/any"
                    alt="any"
                  />
                  <span className="user">
                    <span className="name">{props.el.user.name}</span>
                    <span className="message-box">
                      <span className="message">{props.el.content}</span>
                      <span className="time">
                        {getTime(props.el.createdAt)}
                      </span>
                    </span>
                  </span>
                </span>
              </li>
            </>
          )}
        </>
      )}
    </>
  );
}
