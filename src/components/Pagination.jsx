import { useEffect, useState } from "react";
import styled from "styled-components";
import { ChevronLeft, ChevronRight } from "./icons/Chevron";

const Wrapper = styled.div`
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  align-items: center;
  font-size: 1.2rem;
`;

const Button = styled.button`
  border: none;
  background-color: #fff;
  min-width: 12px;
  border-radius: 4px;
  padding: 4px 8px;
  margin: 2px 4px;
  vertical-align: middle;
  font-size: 1.2rem;
  :hover {
    background-color: rgba(0, 0, 0, 0.05);
    transition: box-shadow 0.1s ease-in-out 0s, border 0.1s ease 0s,
      background-color 0.1s ease 0s;
  }
  cursor: pointer;
  svg,
  span {
    vertical-align: middle;
  }
`;

export const Pagination = ({ setOffset, itemsPerPage = 10, totalItems }) => {
  const [currentPage, setCurrentPage] = useState(1);
  // const [offset, setOffset] = useState(0);
  // const itemsPerPage = 10;
  const totalPages = Math.floor(totalItems / itemsPerPage);
  const scrollTop = () => {
    window.scrollTo({ top: 200, behavior: "smooth" });
  };
  const handleClick = (e) => {
    if (currentPage + e > totalPages) {
      setCurrentPage(totalPages);
    } else if (currentPage + e < 1) {
      setCurrentPage(1);
    } else {
      setCurrentPage(currentPage + e);
      scrollTop();
    }
  };

  useEffect(() => {
    setOffset((currentPage - 1) * itemsPerPage);
  }, [currentPage]);

  return (
    <Wrapper>
      <Button onClick={() => handleClick(-1)}>
        <ChevronLeft />
        <span>Prev</span>
      </Button>

      <p>
        {currentPage} of {totalPages}
      </p>
      <Button onClick={() => handleClick(1)}>
        <span>Next</span>
        <ChevronRight />
      </Button>
    </Wrapper>
  );
};
