import {useEffect, useState} from "react";

function DownButton() {

    const [showButton, setShowButton] = useState(false);

    const scrollToBottom = () => {
        window.scroll({
            top: document.documentElement.scrollHeight,
            behavior: 'smooth'
        });
    }

    useEffect(() => {
        const handleShowButton = () => {
            if (document.documentElement.scrollHeight - window.scrollY > 1200) {
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
        <div className="scroll_down">
            <button id="top_down" onClick={scrollToBottom} type="button" >Down</button>
        </div>
    );
}

export default DownButton;