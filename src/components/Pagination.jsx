// extract the page generation logic into single function
const generatePageNumbersArray = (totalPosts, postsPerPage) => {
  const totalPages = Math.ceil(totalPosts / postsPerPage);
  //Sequence generator function (commonly referred to as "range"
  //Array.from(arrayLike, mapFn, thisArg){length:n} indicates a array of 5 elements. _represent undefined value of the element.
  return Array.from({ length: totalPages }, (_, index) => index + 1);
};

export default function Pagination({
  postPerPage,
  totalPosts,
  paginate,
  currentPage,
}) {
  const pageNumbers = generatePageNumbersArray(totalPosts, postPerPage);
  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map((number) => (
          <li
            className={`page-item ${number === currentPage ? "active" : ""}`}
            key={number}
          >
            <button className="page-link" onClick={() => paginate(number)}>
              {number}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
