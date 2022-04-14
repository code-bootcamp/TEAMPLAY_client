import { useState } from "react";
import SearchBarUI from "./searchbar.presenter";

interface IPropsSearchBar{
  fetchProjectCount?:number
}

export default function SearchBar(props:IPropsSearchBar) {
  const [isSearchBar, setIsSearchBar] = useState(false);
  const onClickSearchOn = () => {
    setIsSearchBar(true);
  };

  const onClickSearchOff = () => {
    setIsSearchBar(false);
  };

  return (
    <SearchBarUI
      isSearchBar={isSearchBar}
      onClickSearchOn={onClickSearchOn}
      onClickSearchOff={onClickSearchOff}
      fetchProjectCount={props.fetchProjectCount}
    />
  );
}
