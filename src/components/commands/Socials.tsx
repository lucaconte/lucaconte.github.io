import { useContext, useEffect } from "react";
import { ProjectsIntro } from "../styles/Projects.styled";
import { Cmd, CmdDesc, CmdList, HelpWrapper } from "../styles/Help.styled";
import {
  checkRedirect,
  generateTabs,
  getCurrentCmdArry,
  isArgInvalid,
} from "../../utils/funcs";
import { termContext } from "../Terminal";
import Usage from "../Usage";

const Socials: React.FC = () => {
  const { arg, history, rerender, index } = useContext(termContext);

  /* ===== get current command ===== */
  const currentCommand = getCurrentCmdArry(history);
  /* ===== check current command makes redirect ===== */
  useEffect(() => {
    if (checkRedirect(rerender, currentCommand, "socials") && index === 0) {
      socials.forEach(({ id, url }) => {
        id === parseInt(arg[1]) && window.open(url, "_blank");
      });
    }
  }, [arg, rerender, currentCommand, index]);

  /* ===== check arg is valid ===== */
  const checkArg = () =>
    isArgInvalid(arg, "go", ["1", "2", "3", "4", "5", "6", "7", "8", "9"]) ? (
      <Usage cmd="socials" />
    ) : null;

  return arg.length > 0 || arg.length > 2 ? (
    checkArg()
  ) : (
    <HelpWrapper data-testid="socials">
      <ProjectsIntro>Here are my social links</ProjectsIntro>
      {socials.map(({ id, title, url, tab }) => (
        <CmdList key={title}>
          <Cmd>{`${id}. ${title}`}</Cmd>
          {generateTabs(tab)}
          <CmdDesc>- {url}</CmdDesc>
        </CmdList>
      ))}
      <Usage cmd="socials" marginY />
    </HelpWrapper>
  );
};

const socials = [
  {
    id: 1,
    title: "Youtube",
    url: "https://youtube.com/@bazu76",
    tab: 3,
  },
  {
    id: 2,
    title: "Soundcloud",
    url: "https://soundcloud.com/marioincandenza",
    tab: 0,
  },
  {
    id: 3,
    title: "Mixcloud",
    url: "https://www.mixcloud.com/incandenza/",
    tab: 2,
  },
  {
    id: 4,
    title: "Mastodon",
    url: "https://mastodon.bida.im/@incandenza",
    tab: 2,
  },
  {
    id: 5,
    title: "Funkwhale",
    url: "https://funkwhale.it/@incandenza/",
    tab: 1,
  },
  {
    id: 6,
    title: "Telegram",
    url: "https://t.me/marioincandenza",
    tab: 2,
  },
  {
    id: 7,
    title: "Bandcamp",
    url: "https://lucaconte.bandcamp.com/",
    tab: 2,
  },
  {
    id: 8,
    title: "Linkedin",
    url: "https://www.linkedin.com/in/luca-conte-b110bb8/",
    tab: 2,
  }
  ,{
    id: 9,
    title: "Email",
    url: "mailto:luca.conte@gmail.com",
    tab: 5,
  }
];

export default Socials;
