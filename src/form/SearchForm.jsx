export default function SearchForm() {
  return (
    <form>
      <input type="text" />
      <button
        onClick={(e) => {
          e.preventDefault();
          alert("You serach");
        }}
      >
        Search
      </button>
    </form>
  );
}
