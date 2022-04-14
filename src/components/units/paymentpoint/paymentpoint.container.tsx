import { IQuery } from "../../../commons/types/generated/types";
import PaymentpointUI from "./paymentpoint.presenter";

interface IPropsPaymentpoint {
  data?: Pick<IQuery, "fetchUser">;
  onClickPointModal?:() => void
}

export default function Paymentpoint(props: IPropsPaymentpoint) {
  return <PaymentpointUI 
        data={props.data} 
        onClickPointModal={props.onClickPointModal}
      />;
}
