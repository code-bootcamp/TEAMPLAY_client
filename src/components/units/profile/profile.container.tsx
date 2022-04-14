import { createContext } from "react";
import ProfileUI from "./profile.presenter";
// import ProfileUI from "./profile.presenter";
import { IPropsProfileContext } from "./profile.types";

export const ProfileContext = createContext<IPropsProfileContext>({})

export default function Profile() {
  // const [isVisible, setIsvisible] = useState<string | null>("About me");
  // const [left, setLeft] = useState(0)

  // const onClickProfileDetail = (e: MouseEvent<HTMLSpanElement>) => {
  //   setIsvisible(e.currentTarget.textContent);
  // };

  return (
    <div>
      <ProfileUI/>
    </div>
  );
}
