import { Fragment, useContext } from "react";
import dump from "../../../commons/json/tendency.json";
import { v4 as uuidv4 } from "uuid";
// import { Wrapper } from "../../../commons/styles/commonStyls";
import MultiSlide2 from "../../commons/slider/component/multislide/multislide2.container";
import { RecruitContext } from "./recruit.container";
import * as S from "./recruit.styles";
import SideBarBasic from "./sidebar/sidebarBasic";
import PropsProfileCard from "../../commons/profileCard/profileCard";
import { gql, useQuery } from "@apollo/client";
// import FilterTendency from "./sidebar/tendency";
// import userListDummy from "../../../commons/json/userList.json";
// import MultiSlide from "../../commons/slider/component/multislide/multislide.container";

const FETCH_USER = gql`
  query fetchUsers($page: Float!) {
    fetchUsers(page: $page) {
      id
      name
      imgUrl
      tendencys {
        name
      }
      position {
        name
      }
    }
  }
`;

export default function RecruitUI() {
  const {
    tendency,
    isVisible,
    isSearchBar,
    onClickSearchImg,
    onClickSearchfilter,
    onClickDeleteTendencyTag,
  } = useContext(RecruitContext);

  const { data } = useQuery(FETCH_USER, {
    variables: {
      page: 1,
    },
  });

  return (
    <S.MainBox>
      <S.TopText>
        <span>모든 팀원</span>
      </S.TopText>
      {/* <MultiSlide/> */}
      <S.Wrapper>
        {isVisible && <SideBarBasic />}
        {/* <S.Opacity isVisible={isVisible} onClick={onClickSearchfilter}/> */}
        <div>
          <S.SearchBarWrapper>
            <S.SearchBar>
              <img
                onClick={onClickSearchfilter}
                src="../img/filter.svg"
                alt="search bar filter"
              />
              <S.TagArea>
                {tendency?.length ? (
                  <>
                    {tendency.map((name) => {
                      return (
                        <S.Tag
                          bgColor={
                            dump.tendency.name.indexOf(name) > 0
                              ? dump.tendency.color[
                                  dump.tendency.name.indexOf(name)
                                ]
                              : "#0D223A"
                          }
                          key={uuidv4()}
                          onClick={
                            onClickDeleteTendencyTag &&
                            onClickDeleteTendencyTag(name)
                          }
                        >
                          <span>{name}</span>
                          <div>x</div>
                        </S.Tag>
                      );
                    })}
                  </>
                ) : (
                  <></>
                )}
              </S.TagArea>
              {isSearchBar ? (
                <Fragment>
                  <S.SearchInputBar>
                    <img
                      onClick={onClickSearchImg}
                      src="../img/search.svg"
                      alt="search icon"
                    />
                    <input placeholder="검색어를 입력해주세요." />
                  </S.SearchInputBar>
                  <>
                    <img
                      onClick={onClickSearchImg}
                      src="../img/preview/Xmark.svg"
                      alt="Xmark Icon"
                    />
                  </>
                </Fragment>
              ) : (
                <>
                  <img
                    onClick={onClickSearchImg}
                    src="../img/search.svg"
                    alt="search icon"
                  />
                </>
              )}
            </S.SearchBar>
          </S.SearchBarWrapper>
          <S.RecruitTop>
            <S.Contents>
              <h3>
                서울시 강남구 팀원을 구해요!
                <img src="../img/req.svg" alt="req title" />
              </h3>
            </S.Contents>
            <S.MultiSlide2>
              <MultiSlide2 slideToShow={5} />
            </S.MultiSlide2>
            <S.WebSlideList>
              {data?.fetchUsers &&
                data?.fetchUsers?.map((el: any) => {
                  return (
                    <>
                      <PropsProfileCard
                        key={uuidv4()}
                        img={el?.imgUrl || "/img/noimage.jpg"}
                        name={el?.name}
                        position={el?.position?.name || "미정"}
                        tendency={el?.tendencys}
                        fontSize={14}
                      />
                    </>
                  );
                })}
              {/* {userListDummy.userList.map((el) => {
                            return (
                                <> 
                                <PropsProfileCard key={uuidv4()} 
                                img={el.img} 
                                name={el.name} 
                                position={el.position} 
                                tendency={el.tendency} 
                                fontSize={14}
                                />
                                <PropsProfileCard key={uuidv4()} 
                                img={"../img/user01.png"} 
                                name={"스바스키"} 
                                position={"기획자"} 
                                tendency={el.tendency} 
                                fontSize={14}
                                    />
                                    </>
                                    )
                                })} */}
            </S.WebSlideList>
          </S.RecruitTop>
          <S.RecruitBottom>
            <S.Contents>
              <h3>팀원을 구해요!</h3>
            </S.Contents>
            <S.MultiSlide2>
              <MultiSlide2 slideToShow={5} />
            </S.MultiSlide2>
          </S.RecruitBottom>
        </div>
      </S.Wrapper>
    </S.MainBox>
  );
}
