import bgImage from "./assets/images/rsabhk-view.jpg";
import Logo from "./assets/images/logo-rsabhk.png";
import { useState } from "react";
import Card from "./components/Card";
import { MdOndemandVideo, MdMiscellaneousServices } from "react-icons/md";
import { RiCustomerService2Fill } from "react-icons/ri";
import { BiSolidDashboard } from "react-icons/bi";
import { BsFillInfoSquareFill, BsFillHeartPulseFill } from "react-icons/bs";
import { FaAmbulance, FaProcedures } from "react-icons/fa";
import { TbDeviceAnalytics, TbChartInfographic } from "react-icons/tb";
import { LuListVideo } from "react-icons/lu";

const tabsLink = [
  // { id: 0, text: "SEMUA APLIKASI" },
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

  function element1() {
    return (
      <>
        <Card
          title={"PELAYANAN"}
          category={"Pelayanan"}
          link={"https://smart.rsabhk.co.id:2222/"}
          onClick={() => handleTabs(1)}
          icon={<RiCustomerService2Fill />}
        />
        <Card
          title={"DASHBOARD"}
          category={"Pelayanan"}
          link={"https://smart.rsabhk.co.id:2222/"}
          onClick={() => handleTabs(2)}
          icon={<BiSolidDashboard />}
        />
        <Card
          title={"BRIDGING"}
          category={"DOKTER"}
          link={"https://smart.rsabhk.co.id:2222/"}
          onClick={() => handleTabs(3)}
          icon={<BsFillInfoSquareFill />}
        />
        <Card
          title={"TUTORIAL"}
          category={"Pelayanan"}
          link={"https://smart.rsabhk.co.id:2222/"}
          onClick={() => handleTabs(4)}
          icon={<MdOndemandVideo />}
        />
      </>
    );
  }

  function element2() {
    return (
      <>
        <Card
          title={"SIMRS"}
          category={"Pelayanan"}
          link={"https://smart.rsabhk.co.id:2222/"}
          icon={<MdMiscellaneousServices />}
        />
        <Card
          title={"KEPERAWATAN"}
          category={"Pelayanan"}
          link={"https://smart.rsabhk.co.id:2222/"}
          icon={<BsFillHeartPulseFill />}
        />
        <Card
          title={"IGD"}
          category={"Pelayanan"}
          link={"https://smart.rsabhk.co.id:2222/"}
          icon={<FaAmbulance />}
        />
        <Card
          title={"REHAB MEDIK"}
          category={"Pelayanan"}
          link={"https://smart.rsabhk.co.id:2222/"}
          icon={<FaProcedures />}
        />
      </>
    );
  }

  function element3() {
    return (
      <>
        <Card
          title={"EIS"}
          category={"Dashboard"}
          link={"https://smart.rsabhk.co.id:2222/"}
          icon={<TbDeviceAnalytics />}
        />
        <Card
          title={"DASHBOARD"}
          category={"Dashboard"}
          link={"https://smart.rsabhk.co.id:2222/"}
          icon={<TbDeviceAnalytics />}
        />
        <Card
          title={"VEDIKA"}
          category={"Dashboard"}
          link={"https://smart.rsabhk.co.id:2222/"}
          icon={<TbDeviceAnalytics />}
        />
        <Card
          title={"REKAM MEDIK"}
          category={"Dashboard"}
          link={"https://smart.rsabhk.co.id:2222/"}
          icon={<TbDeviceAnalytics />}
        />
      </>
    );
  }

  function element4() {
    return (
      <>
        <Card
          title={"BIOS"}
          category={"Bridging"}
          link={"https://smart.rsabhk.co.id:2222/"}
          icon={<TbChartInfographic />}
        />
        <Card
          title={"SAKTI"}
          category={"Bridging"}
          link={"https://smart.rsabhk.co.id:2222/"}
          icon={<TbChartInfographic />}
        />
        <Card
          title={"SATUSEHAT"}
          category={"Bridging"}
          link={"https://smart.rsabhk.co.id:2222/"}
          icon={<TbChartInfographic />}
        />
        <Card
          title={"KTC"}
          category={"Bridging"}
          link={"https://smart.rsabhk.co.id:2222/"}
          icon={<TbChartInfographic />}
        />
      </>
    );
  }

  function element5() {
    return (
      <>
        <Card
          title={"CARA DAFTAR PASIEN"}
          category={"Tutorial"}
          link={"https://smart.rsabhk.co.id:2222/"}
          icon={<LuListVideo />}
        />
        <Card
          title={"CARA MEMBUAT REKAM MEDIS"}
          category={"Tutorial"}
          link={"https://smart.rsabhk.co.id:2222/"}
          icon={<LuListVideo />}
        />
        <Card
          title={"CARA DAFTAR RAWAT INAP"}
          category={"Tutorial"}
          link={"https://smart.rsabhk.co.id:2222/"}
          icon={<LuListVideo />}
        />
        <Card
          title={"CARA MEMBUAT WEBSITE"}
          category={"Tutorial"}
          link={"https://smart.rsabhk.co.id:2222/"}
          icon={<LuListVideo />}
        />
      </>
    );
  }

  const elements = () => {
    switch (tabs) {
      case 1:
        return element2();
      case 2:
        return element3();
      case 3:
        return element4();
      case 4:
        return element5();
      default:
        return element1();
    }
  };

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
            <h1 className="font-extrabold text-center text-4xl">
              APLIKASI SIMRS
            </h1>
            <p className="text-center font-semibold">
              APLIKASI PENUNJANG PELAYANAN DAN UNIT RS KANKER &quot;RSABHK&quot;
            </p>
          </div>
        </div>

        <div className="custom-shape-divider-bottom-1697618662">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
              opacity=".25"
              className="shape-fill"
            ></path>
            <path
              d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
              opacity=".5"
              className="shape-fill"
            ></path>
            <path
              d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
      </header>

      <section className="container xl:max-w-[1170px] mx-auto">
        <div className="flex-col md:flex-row flex gap-4 mt-16 mb-36">
          <div className="md:w-[250px] flex w-full pl-6 md:ml-0 md:flex-none font-semibold">
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
                      {item.id === 1 && (
                        <RiCustomerService2Fill
                          className={`${
                            active ? "text-white" : ""
                          } text-green-900`}
                        />
                      )}
                      {item.id === 2 && (
                        <BiSolidDashboard
                          className={`${
                            active ? "text-white" : ""
                          } text-green-900`}
                        />
                      )}
                      {item.id === 3 && (
                        <BsFillInfoSquareFill
                          className={`${
                            active ? "text-white" : ""
                          } text-green-900`}
                        />
                      )}
                      {item.id === 4 && (
                        <MdOndemandVideo
                          className={`${
                            active ? "text-white" : ""
                          } text-green-900`}
                        />
                      )}

                      {item.text}
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="flex-1 px-4 md:px-0">
            <div className="grid md:grid-cols-3 gap-8">{elements()}</div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
