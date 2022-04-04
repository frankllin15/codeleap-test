import { useEffect, useState } from "react";
import styled from "styled-components";
import { ChevronDoubleUp } from "./icons/Chevron";

const ScrollWrapper = styled.div`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  z-index: 1000;
  display: ${({ showScroll }) => (showScroll ? "flex" : "none")};
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  background-color: #fff;
  box-shadow: 0 0 0.5rem 0 rgba(0, 0, 0, 0.2);
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  :hover {
    box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.2);
  }
`;

export const ScrollToTop = () => {
  const [showScroll, setShowScroll] = useState(false);
  const checkScrollTop = () => {
    const { pageTop, height } = window.visualViewport;
    if (pageTop > height && pageTop > 933) setShowScroll(true);
    else setShowScroll(false);
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", checkScrollTop);
    return () => window.removeEventListener("scroll", checkScrollTop);
  }, []);

  return (
    <ScrollWrapper showScroll={showScroll} onClick={scrollTop}>
      <ChevronDoubleUp />
    </ScrollWrapper>
  );
};
