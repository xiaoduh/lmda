export default async function ContentArticle({ data }) {
//   console.log(data[0].attributes.content);
  return (
    <article className="body-content">
      {data[0].attributes.content.map((content) => {
        if (content.type === "paragraph") {
          return <p className="p-article">{content.children[0].text}</p>;
        } else if (content.type === "heading") {
          return <h2 className="article-h2">{content.children[0].text}</h2>;
        } else if (content.type === "list") {
          return (
            <ul className="ul-article">
              {content.children.map((item) => {
                return (
                  <li className="bullet-point">{item.children[0].text}</li>
                );
              })}
            </ul>
          );
        }
      })}
    </article>
  );
}
