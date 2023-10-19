import { useState } from "react";
import bgImage from "./assets/images/rsabhk-view.jpg";
import Logo from "./assets/images/logo-rsabhk.png";
import Card from "./components/Card";
import ShapeHeader from "./components/ShapeHeader";
import { MdOndemandVideo } from "react-icons/md";
import { RiCustomerService2Fill } from "react-icons/ri";
import { BiSolidDashboard } from "react-icons/bi";
import { BsFillInfoSquareFill } from "react-icons/bs";
import {
  dataBridging,
  dataDashboard,
  dataNavigation,
  dataPelayanan,
  dataTutorial,
} from "./data/staticData";

function App() {
  const [tabs, setTabs] = useState(0);
  const [activeTabs, setActiveTabs] = useState(0);

  function handleTabs(current) {
    setTabs(current);
    setActiveTabs(current);
  }

  function navigationElement() {
    return (
      <div className="grid grid-cols-2 gap-2 md:gap-8">
        {dataNavigation.map((item) => (
          <Card
            key={item.id}
            title={item.title}
            onClick={() => handleTabs(item.id)}
            icon={item.icon}
          />
        ))}
      </div>
    );
  }

  function pelayananElement() {
    return (
      <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-8">
        {dataPelayanan.map((item) => (
          <Card
            key={item.id}
            title={item.title}
            icon={item.icon}
            onClick={() => (item.link ? window.open(item.link) : undefined)}
          />
        ))}
      </div>
    );
  }

  function dashboardElement() {
    return (
      <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-8">
        {dataDashboard.map((item) => (
          <Card
            key={item.id}
            title={item.title}
            icon={item.icon}
            onClick={() => (item.link ? window.open(item.link) : undefined)}
          />
        ))}
      </div>
    );
  }

  function bridgingElement() {
    return (
      <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-8">
        {dataBridging.map((item) => (
          <Card
            key={item.id}
            title={item.title}
            icon={item.icon}
            onClick={() => (item.link ? window.open(item.link) : undefined)}
          />
        ))}
      </div>
    );
  }

  function tutorialElement() {
    return (
      <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-8">
        {dataTutorial.map((item) => (
          <Card
            key={item.id}
            title={item.title}
            icon={item.icon}
            onClick={() => (item.link ? window.open(item.link) : undefined)}
          />
        ))}
      </div>
    );
  }

  function applicationElements() {
    switch (tabs) {
      case 1:
        return pelayananElement();
      case 2:
        return dashboardElement();
      case 3:
        return bridgingElement();
      case 4:
        return tutorialElement();
      default:
        return navigationElement();
    }
  }

  return (
    <>
      <header
        className="h-[30rem] relative bg-no-repeat bg-cover bg-center"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="header-gradient">
          <div className="relative z-10 flex w-full">
            <div className="container xl:max-w-[1170px] mx-auto mt-3">
              <img
                src={Logo}
                alt="logo rsabhk"
                className="mx-auto md:mx-0 w-72"
              />
            </div>
          </div>
          <div className="px-4 md:px-0 relative z-10 flex justify-center flex-col items-center centering text-neutral-800">
            <h1 className="font-extrabold text-center text-3xl md:text-5xl">
              APLIKASI SIMRS
            </h1>
            <p className="text-center font-semibold mt-2">
              APLIKASI PENUNJANG PELAYANAN DAN UNIT RS &quot;RSABHK&quot;
            </p>
          </div>
        </div>

        {<ShapeHeader />}
      </header>

      <section className="container xl:max-w-[1170px] mx-auto">
        <div className="flex-col md:flex-row flex gap-4 md:mt-16 mt-5 mb-36">
          <div className="md:w-[250px] flex w-full px-4 md:ml-0 md:flex-none font-semibold">
            <ul className="grid grid-cols-2 md:grid-cols-none md:flex md:flex-col w-full gap-2">
              {dataNavigation.map((item) => {
                const active = activeTabs === item.id;
                const iconActive = `${
                  active ? "text-white" : ""
                } text-green-900`;
                const bgActive = `${
                  active ? "bg-green-900 text-white" : ""
                } flex md:inline-flex px-3 py-1 rounded-[3px] items-center gap-2 cursor-pointer`;

                return (
                  <li key={item.id}>
                    <div
                      className={bgActive}
                      onClick={() => handleTabs(item.id)}
                    >
                      {item.id === 1 && (
                        <RiCustomerService2Fill className={iconActive} />
                      )}
                      {item.id === 2 && (
                        <BiSolidDashboard className={iconActive} />
                      )}
                      {item.id === 3 && (
                        <BsFillInfoSquareFill className={iconActive} />
                      )}
                      {item.id === 4 && (
                        <MdOndemandVideo className={iconActive} />
                      )}

                      {item.title}
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="flex-1 px-4 md:px-0">{applicationElements()}</div>
        </div>
      </section>
    </>
  );
}

export default App;
