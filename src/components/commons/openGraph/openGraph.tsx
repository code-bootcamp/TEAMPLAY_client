interface IPropsOpenGraph {
  title: string;
  description: string;
  url: string;
}

export default function OpenGraph(props: IPropsOpenGraph) {
  return (
    <>
      <meta property="og:title" content={props.title} />
      <meta property="og:description" content={props.description} />
      <meta property="og:image" content="/img/commonsopImage.png" />
      <meta property="og:url" content={props.url} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="팀플레이" />
    </>
  );
}
