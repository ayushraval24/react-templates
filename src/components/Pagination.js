import React, { useEffect, useState } from "react";
import axios from "axios";
import ReactPaginate from "react-paginate";

export default function Pagination() {
  const [items, setItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  const [currentPage, setCurrentPage] = useState(0);
  const [data, setData] = useState([]);

  let limit = 5;

  useEffect(() => {
    const getData = async () => {
      const res = axios.post(`http://localhost:5000/api/questions/page`, {
        page: pageCount,
        itemsPerPage: limit,
      });
      //   const total = 12;
      setPageCount(Math.ceil(12 / limit));
      // console.log(Math.ceil(total/12));
      setItems(data);
    };
    getData();
  }, [limit]);

  const handlePageClick = ({ selected: selectedPage }) => {
    setCurrentPage(selectedPage);
  };

  return (
    <div>
      <ReactPaginate
        previousLabel={"Previouse"}
        nextLabel={"Next"}
        pageCount={pageCount}
        onPageChange={handlePageClick}
        containerClassName={"pagination justify-content-center"}
        pageClassName={"page-item"}
        pageLinkClassName={"page-link"}
        previousClassName={"page-item"}
        nextClassName={"page-item"}
        previousLinkClassName={"page-link"}
        nextLinkClassName={"page-link"}
        activeClassName={"active"}
      />
    </div>
  );
}
