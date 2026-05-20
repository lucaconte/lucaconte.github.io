import { useContext, useEffect, useRef } from "react";
import _ from "lodash";
import { termContext } from "../Terminal";

const Gui: React.FC = () => {
  const { history, rerender, index } = useContext(termContext);
  const linkRef = useRef<HTMLAnchorElement>(null);

  /* ===== get current command ===== */
  const currentCommand = _.split(history[0], " ");

  /* ===== check current command makes redirect ===== */
  useEffect(() => {
    if (rerender && currentCommand[0] === "gui" && index === 0 && linkRef.current) {
      linkRef.current.click();
    }
  }, [rerender, currentCommand, index]);

  return (
    <a
      ref={linkRef}
      href="https://lucaconte.xyz/gui/index.html"
      target="_blank"
      rel="noopener noreferrer"
      style={{ display: 'none' }}
    >
      GUI
    </a>
  );
};

export default Gui;
