import Main from "../../src/components/units/main/main.container";
import Head from "next/head";
import OpenGraph from "../../src/components/commons/openGraph/openGraph";

export default function MainPage() {
  return (
    <>
      <Head>
        <OpenGraph
          title="팀플레이 | 학생과 주니어를 위한 사이드 프로젝트! 팀플레이에서 함께하세요."
          description="팀 프로젝트가 필요한 분들을 위한 팀 프로젝트 팀 빌딩 서비스입니다. 프로젝트를 생성하여 같이 프로젝트를 만들어갈 사람을 구하거나 등록된 프로젝트를 보고 참여신청을 할 수 있습니다. 인원을 다 모으고 프로젝트를 시작할 경우 해당 프로젝트에 대한 챌린저스가 시작되어 프로젝트 완성에 대한 의지와 집중력을 높일 수 있습니다. 챌린저스가 진행되는 동안 프로젝트 관리페이지에서 Todo 리스트, 알림 게시판 등의 서비스를 이용할 수 있습니다."
          url="https://www.teamplay.store/main"
        />
      </Head>
      <Main />
    </>
  );
}
