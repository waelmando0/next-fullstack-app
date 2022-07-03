export interface ICatCard {
  tag: string;
  title: string;
  body: string;
  author: string;
  time: string;
}

const CatCard: React.FC<ICatCard> = ({ tag, title, body, author, time }) => {
  return (
    <>
      <h1>{tag}</h1>
      <h1>{title}</h1>
    </>
  );
};

export default CatCard;
