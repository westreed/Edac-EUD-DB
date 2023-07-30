import {useEffect, useState} from "react";

function TopButton() {

  const [showButton, setShowButton] = useState(false);

  const scrollToTop = () => {
    window.scroll({
      top: 0,
      behavior: 'smooth'
    });
  }

  useEffect(() => {
    const handleShowButton = () => {
      if (window.scrollY > 500) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    }

    window.addEventListener("scroll", handleShowButton);
    return () => {
      window.removeEventListener("scroll", handleShowButton);
    }
  }, [])

  return showButton && (
    <div className="scroll_up">
      <button id="top_down" onClick={scrollToTop} type="button" > Top</button>
    </div>
  );
}

export default TopButton;