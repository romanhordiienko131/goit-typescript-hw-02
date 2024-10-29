import toast, { Toaster } from "react-hot-toast";
import s from "./SearchBar.module.css";
import { FormEvent } from "react";

type Props = {
  handleSearch: (searchQuery: string) => void;
}

const SearchBar = ({ handleSearch }: Props) => {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const searchQuery = form.elements.namedItem('search') as HTMLInputElement;

    if (searchQuery.value.trim() === "") {
      toast("Search query cannot be empty");
      return;
    }

    handleSearch(searchQuery.value);
  };

  return (
    <header className={s.header}>
      <form onSubmit={handleSubmit}>
        <input
          className={s.input}
          type="text"
          name="search"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
      <Toaster />
    </header>
  );
};

export default SearchBar;
