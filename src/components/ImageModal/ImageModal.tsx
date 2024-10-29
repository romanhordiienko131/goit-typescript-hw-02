import Modal from "react-modal";
import { Image } from "../../types/types";

Modal.setAppElement("#root");

type Props = {
  modalIsOpen: boolean;
  closeModal: () => void;
  image: Image | null;
}

const ImageModal = ({ modalIsOpen, closeModal, image }: Props) => {
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={{
        overlay: {
          backgroundColor: "rgba(0, 0, 0, 0.75)",
        },
      }}
    >
      {image && <img src={image.urls.regular} alt={image.alt_description} />}
    </Modal>
  );
};

export default ImageModal;
