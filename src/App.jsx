import bgImage from "./assets/images/rsabhk-view.jpg";
import Logo from "./assets/images/logo-rsabhk.png";
import { useState } from "react";
import Card from "./components/Card";
import { FiChevronsRight } from "react-icons/fi";

const tabsLink = [
  { id: 0, text: "SEMUA APLIKASI" },
  { id: 1, text: "PELAYANAN" },
  { id: 2, text: "DASHBOARD" },
  { id: 3, text: "BRIDGING" },
  { id: 4, text: "TUTORIAL" },
];

function App() {
  const [tabs, setTabs] = useState(0);
  const [activeTabs, setActiveTabs] = useState(0);

  const handleTabs = (current) => {
    console.log(current);

    setTabs(current);
    setActiveTabs(current);
  };

  const elements = () => {
    switch (tabs) {
      case 1:
        return <Element2 />;
      case 2:
        return <Element3 />;
      case 3:
        return <Element4 />;
      case 4:
        return <Element5 />;
      default:
        return <Element1 />;
    }
  };

  return (
    <>
      <header
        className="h-[23rem] relative bg-no-repeat bg-cover bg-center"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="header-gradient">
          <div className="relative z-10 flex w-full">
            <div className="container xl:max-w-[1170px] mx-auto mt-3">
              <img src={Logo} alt="logo rsabhk" className="w-72" />
            </div>
          </div>
          <div className="relative z-10 flex justify-center flex-col items-center centering text-neutral-800">
            <h1 className="font-extrabold text-4xl">APLIKASI SIMRS</h1>
            <p className="font-semibold">
              APLIKASI PENUNJANG PELAYANAN DAN UNIT RS KANKER &quot;RSABHK&quot;
            </p>
          </div>
        </div>
      </header>

      <section className="container xl:max-w-[1170px] mx-auto">
        <div className="flex gap-4 mt-16 mb-36">
          <div className="w-[250px] flex-none font-semibold">
            <ul className="flex flex-col gap-2">
              {tabsLink.map((item) => {
                const active = activeTabs === item.id;
                return (
                  <li key={item.id}>
                    <div
                      className={`${
                        active ? "bg-green-900 text-white" : ""
                      } inline-flex px-3 py-1 rounded-[3px] items-center gap-2 cursor-pointer`}
                      onClick={() => handleTabs(item.id)}
                    >
                      <FiChevronsRight
                        className={`${
                          active ? "text-white" : ""
                        } text-green-900`}
                      />
                      {item.text}
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="flex-1">
            <div className="grid grid-cols-3 gap-8">{elements()}</div>
          </div>
        </div>
      </section>
    </>
  );
}

export function Element1() {
  return (
    <>
      <Card
        title={"SIMRS"}
        category={"Pelayanan"}
        link={"https://smart.rsabhk.co.id:2222/"}
      />
      <Card
        title={"KEPERAWATAN"}
        category={"Pelayanan"}
        link={"https://smart.rsabhk.co.id:2222/"}
      />
      <Card
        title={"SIMRS"}
        category={"DOKTER"}
        link={"https://smart.rsabhk.co.id:2222/"}
      />
      <Card
        title={"IGD"}
        category={"Pelayanan"}
        link={"https://smart.rsabhk.co.id:2222/"}
      />
      <Card
        title={"REHAB MEDIK"}
        category={"Pelayanan"}
        link={"https://smart.rsabhk.co.id:2222/"}
      />
      <Card
        title={"EIS"}
        category={"Dashboard"}
        link={"https://smart.rsabhk.co.id:2222/"}
      />
      <Card
        title={"DASHBOARD"}
        category={"Dashboard"}
        link={"https://smart.rsabhk.co.id:2222/"}
      />
      <Card
        title={"VEDIKA"}
        category={"Dashboard"}
        link={"https://smart.rsabhk.co.id:2222/"}
      />
      <Card
        title={"REKAM MEDIK"}
        category={"Dashboard"}
        link={"https://smart.rsabhk.co.id:2222/"}
      />
      <Card
        title={"BIOS"}
        category={"Bridging"}
        link={"https://smart.rsabhk.co.id:2222/"}
      />
      <Card
        title={"SAKTI"}
        category={"Bridging"}
        link={"https://smart.rsabhk.co.id:2222/"}
      />
      <Card
        title={"SATUSEHAT"}
        category={"Bridging"}
        link={"https://smart.rsabhk.co.id:2222/"}
      />
      <Card
        title={"KTC"}
        category={"Bridging"}
        link={"https://smart.rsabhk.co.id:2222/"}
      />
    </>
  );
}

export function Element2() {
  return (
    <>
      <Card
        title={"SIMRS"}
        category={"Pelayanan"}
        link={"https://smart.rsabhk.co.id:2222/"}
      />
      <Card
        title={"KEPERAWATAN"}
        category={"Pelayanan"}
        link={"https://smart.rsabhk.co.id:2222/"}
      />
      <Card
        title={"SIMRS"}
        category={"DOKTER"}
        link={"https://smart.rsabhk.co.id:2222/"}
      />
      <Card
        title={"IGD"}
        category={"Pelayanan"}
        link={"https://smart.rsabhk.co.id:2222/"}
      />
      <Card
        title={"REHAB MEDIK"}
        category={"Pelayanan"}
        link={"https://smart.rsabhk.co.id:2222/"}
      />
    </>
  );
}

export function Element3() {
  return (
    <>
      <Card
        title={"EIS"}
        category={"Dashboard"}
        link={"https://smart.rsabhk.co.id:2222/"}
      />
      <Card
        title={"DASHBOARD"}
        category={"Dashboard"}
        link={"https://smart.rsabhk.co.id:2222/"}
      />
      <Card
        title={"VEDIKA"}
        category={"Dashboard"}
        link={"https://smart.rsabhk.co.id:2222/"}
      />
      <Card
        title={"REKAM MEDIK"}
        category={"Dashboard"}
        link={"https://smart.rsabhk.co.id:2222/"}
      />
    </>
  );
}

export function Element4() {
  return (
    <>
      <Card
        title={"BIOS"}
        category={"Bridging"}
        link={"https://smart.rsabhk.co.id:2222/"}
      />
      <Card
        title={"SAKTI"}
        category={"Bridging"}
        link={"https://smart.rsabhk.co.id:2222/"}
      />
      <Card
        title={"SATUSEHAT"}
        category={"Bridging"}
        link={"https://smart.rsabhk.co.id:2222/"}
      />
      <Card
        title={"KTC"}
        category={"Bridging"}
        link={"https://smart.rsabhk.co.id:2222/"}
      />
    </>
  );
}

export function Element5() {
  return (
    <>
      <Card
        title={"CARA DAFTAR PASIEN"}
        category={"Tutorial"}
        link={"https://smart.rsabhk.co.id:2222/"}
      />
      <Card
        title={"CARA MEMBUAT REKAM MEDIS"}
        category={"Tutorial"}
        link={"https://smart.rsabhk.co.id:2222/"}
      />
      <Card
        title={"CARA DAFTAR RAWAT INAP"}
        category={"Tutorial"}
        link={"https://smart.rsabhk.co.id:2222/"}
      />
      <Card
        title={"CARA MEMBUAT WEBSITE"}
        category={"Tutorial"}
        link={"https://smart.rsabhk.co.id:2222/"}
      />
    </>
  );
}

export default App;
