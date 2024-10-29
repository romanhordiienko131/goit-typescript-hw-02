import { Image } from "../../types/types";
import ImageCard from "../ImageCard/ImageCard";
import s from "./ImageGallery.module.css";

type Props = {
  images: Image[];
  openModal: (image: Image) => void;
}

const ImageGallery = ({ images, openModal }: Props) => {
  return (
    <ul className={s.list}>
      {images.map((image) => (
        <li className={s.card} key={image.id}>
          <ImageCard image={image} openModal={openModal} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
