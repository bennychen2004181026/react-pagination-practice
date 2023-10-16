export default function Pagination({ postPerPage, totalPosts, paginate }) {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <nav className="pagination">
      {pageNumbers.map((number) => {
        return (
          <li className="page-item" key={number}>
            {/* eslint-disable-next-line */}
            <a className="page-link" onClick={() => paginate(number)}>{number}</a>
          </li>
        );
      })}
    </nav>
  );
}
