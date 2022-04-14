import { useRouter } from "next/router";
import { createContext, useRef, useState } from "react";
import ProfileEditUI from "./profileEdit.presenter";
import { IPropsProfileEditContext } from "./profileEdit.types";

export const ProfileEditContext = createContext<IPropsProfileEditContext>({})

export default function ProfileEdit(){
    const router = useRouter();
    const [tendency, setTendency] = useState<string[]>([])
    const [position, setPosition] = useState("")
    const [interest, setInterest] = useState<string[]>([])
    const [technic, setTechnic] = useState<string[]>([])
    const [isTendency, setIsTendency] = useState(false)
    const [isPosition, setIsPosition] = useState(false)
    const [isInterest, setIsInterest] = useState(false)
    const [isTechnic, setIsTechnic] = useState(false)
    const [isAdd, setIsAdd] = useState(false)
    // const [tag, setTag] = useState("");
    const [area, setArea] = useState(0);
    const tagInputRef = useRef<HTMLInputElement>(null);

    const onClickChangeInput = () => {
        setIsAdd(true)
        tagInputRef.current?.click()
    }

    const onClickPushTag = (name: string) => () => {
        let temp: string[] = [];

        if(tendency){
            if(tendency.includes(name)){
                return;
            }
            if (tendency.length === 3) {
                const temp = tendency;
                temp.shift();
                setTendency([...temp, name]);
              } else {
                setTendency((prev) => [...prev, name]);
            }
            return
        }

        if(position){
            if(position.includes(name)) {
                return
            } 
            // if (position.length === 3) {
            //     const temp = position;
            //     temp.shift();
            //     setPosition([...temp, name]);
            //   } else {
            //     setPosition((prev) => [...prev, name]);
            // }
            // return
        }

        if (interest.includes(name)) {
            temp = interest.filter((el) => el !== name);
            setInterest([...temp]);
          } else {
            if (interest.length === 3) {
              temp = interest;
              temp.shift();
              setInterest([...temp, name]);
            } else {
              setInterest((prev) => [...prev, name]);
            }
          }
    }

    const onClickEditTendency = () => {
        if(area === -220){
            setArea(-60)
            setIsTendency(true)
        } else {
            setArea(-220)
            setIsTendency(false)
        }
    }

    const onClickEditPosition = () => {
        if(area === -220){
            setArea(-60)
            setIsPosition(true)
        } else {
            setArea(-220)
            setIsPosition(false)
        }
    }

    const onClickEditInterest = () => {
        if(area === -220){
            setArea(-60)
            setIsInterest(true)
        } else {
            setArea(-220)
            setIsInterest(false)
        }
    }

    const onClickEditTechnic = () => {
        if(area === -220){
            setArea(-60)
            setIsTechnic(true)
        } else {
            setArea(-220)
            setIsTechnic(false)
        }
    }

    const onClickDeleteTendencyTag = (name: string) => () => {
        const temp = tendency.filter((el) => el !== name);
        setTendency([...temp]);
    };

    const onClickDeletePositionTag = (name: string) => {
        // const temp = position[name]
        setPosition(name);
    };

    const onClickDeleteInterestTag = (name: string) => () => {
        const temp = interest.filter((el) => el !== name);
        setTendency([...temp]);
    };

    const onClickDeleteTechnicTag = (name: string) => () => {
        const temp = technic.filter((el) => el !== name);
        setTechnic([...temp]);
    };


    const onClickChangeTagButton = () => {
        setArea(-220)
    }

    const onClickEditButton = () => {
        router.push('/profile')
    }

    const onClickBasicInfoEdit = () => {
        router.push('/signup/edit')
    }

    const value = {
        tendency,
        position,
        interest,
        technic,
        isAdd,
        // isOk,
        isTendency,
        isPosition,
        isInterest,
        isTechnic,
        area,
        onClickChangeInput,
        onClickPushTag,
        onClickEditTendency,
        onClickEditPosition,
        onClickEditInterest,
        onClickEditTechnic,
        onClickDeleteTendencyTag,
        onClickDeletePositionTag,
        onClickDeleteInterestTag,
        onClickDeleteTechnicTag,
        onClickChangeTagButton,
        onClickEditButton,
        onClickBasicInfoEdit
    }


    return(
        <ProfileEditContext.Provider value={value}>
            <ProfileEditUI/>
        </ProfileEditContext.Provider>
    )
}