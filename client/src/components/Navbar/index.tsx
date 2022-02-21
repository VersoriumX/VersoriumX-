import * as React from 'react';
import {HiMenuAlt4} from "react-icons/hi";
import {AiOutlineClose} from "react-icons/ai";
import i18n from "i18next";
import {useTranslation} from "react-i18next";

import logo from "../../images/logo.png";
import NavBarItem from "../NavBarItem";
import Dropdown from "../Dropdown";
import {ILang} from "../../models/ILang";
import langs from "../../utils/langs";

interface NavbarProps {

}


const Navbar: React.FC<NavbarProps> = ({}) => {
  const {t} = useTranslation("translation", {useSuspense: false});

  const navbarItems = [t("market"), t("exchange"), t("tutorials"), t("wallets")];
  const [toggleMenu, setToggleMenu] = React.useState(false);
  const [lang, setLang] = React.useState<ILang>(langs[0]);

  const setLanguage = React.useCallback(async (code: string) => {
    await i18n.changeLanguage(code ?? "ru")
  }, [lang]);

  React.useEffect(() => {
    setLanguage(lang.code).then(r => r);
  }, [lang])

  return (
    <nav className="w-full flex md:justify-center justify-between items-center p-4">
      <div className="md:flex-[0.5] flex-initial items-center">
        <img src={logo} alt="logo" className="w-32 cursor-pointer"/>
      </div>

      <ul className="text-white md:flex hidden list-none flex-row justify-between items-center flex-initial">
        {navbarItems.map((item, index) => (
          <NavBarItem key={item + index} title={item}/>
        ))}

        <li className="py-2 px-7 mx-4 rounded-full transition-all cursor-pointer bg-[#2952e3] hover:bg-[#2546bd]">
          {t("login")}
        </li>

        <li>
          <Dropdown items={langs} onSelect={setLang} selected={lang}/>
        </li>
      </ul>

      <div className="flex relative">
        {toggleMenu
          ? <AiOutlineClose fontSize={28} className="text-white md:hidden cursor-pointer"
                            onClick={() => setToggleMenu(false)}/>
          : <HiMenuAlt4 fontSize={28} className="text-white md:hidden cursor-pointer"
                        onClick={() => setToggleMenu(true)}/>
        }
        {toggleMenu && (
          <ul
            className="z-10 fixed -top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none
            flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-in"
          >
            <li className="text-xl w-full my-2"><AiOutlineClose onClick={() => setToggleMenu(false)}/></li>
            {navbarItems.map((item, index) => (
              <NavBarItem key={item + index} title={item} classProps="my-2 text-lg"/>
            ))}
          </ul>
        )}
      </div>
    </nav>

  )
};

export default React.memo<NavbarProps>(Navbar);