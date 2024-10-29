import { useEffect, useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import ImageGallery from "../ImageGallery/ImageGallery";
import ImageModal from "../ImageModal/ImageModal";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import fetchImages from "../../services/unsplash-api";
import "./App.css";
import { Image } from "../../types/types";

function App() {
  const [images, setImages] = useState<Image[]>([]);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(false);
  const [modal, setModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState<Image | null>(null);

  useEffect(() => {
    const getData = async () => {
      if (!query) return;
      try {
        setError(false);
        setLoader(true);

        const data = await fetchImages(query, page);

        setImages((prevImages) => [...prevImages, ...data.results]);
        setTotalPages(data.total_pages);
      } catch {
        setError(true);
      } finally {
        setLoader(false);
      }
    };
    getData();
  }, [query, page]);

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const handleSearch = (searchQuery: string) => {
    if (searchQuery.toLowerCase() === query.toLowerCase()) return;

    setQuery(searchQuery);
    setImages([]);
    setPage(1);
  };

  const openModal = (image: Image) => {
    setModal(true);
    setSelectedImage(image);
  };

  const closeModal = () => {
    setModal(false);
  };

  return (
    <>
      <SearchBar handleSearch={handleSearch} />

      {loader && <Loader />}
      {error && <ErrorMessage />}
      
      {images.length > 0 && (
        <>
          <ImageGallery images={images} openModal={openModal} />
          <ImageModal
            modalIsOpen={modal}
            closeModal={closeModal}
            image={selectedImage}
          />
          {page < totalPages && <LoadMoreBtn handleLoadMore={handleLoadMore} />}
        </>
      )}
    </>
  );
}

export default App;
