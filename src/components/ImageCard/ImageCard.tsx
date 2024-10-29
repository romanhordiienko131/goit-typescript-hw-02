import { Image } from "../../types/types";

type Props = {
  image: Image;
  openModal: (image: Image) => void;
}

const ImageCard = ({ image, openModal }: Props) => {
  return (
    <div>
      <img
        onClick={() => {
          openModal(image);
        }}
        src={image.urls.small}
        alt={image.alt_description}
      />
    </div>
  );
};

export default ImageCard;
