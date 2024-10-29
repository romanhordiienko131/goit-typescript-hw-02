import s from "./LoadMoreBtn.module.css";

type Props = {
  handleLoadMore: () => void;
}

const LoadMoreBtn = ({ handleLoadMore }: Props) => {
  return (
    <button className={s.button} onClick={handleLoadMore} type="button">
      Load More
    </button>
  );
};

export default LoadMoreBtn;
