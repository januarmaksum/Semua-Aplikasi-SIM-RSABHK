import bgImage from "./assets/images/rsabhk-view.jpg";
import Logo from "./assets/images/logo-rsabhk.png";
import { useState } from "react";
import Card from "./components/Card";
import {
  MdOndemandVideo,
  MdMiscellaneousServices,
  MdTableView,
  MdMedicalInformation,
} from "react-icons/md";
import { RiCustomerService2Fill } from "react-icons/ri";
import { BiSolidDashboard } from "react-icons/bi";
import { BsFillInfoSquareFill, BsTable, BsPeopleFill } from "react-icons/bs";
import {
  FaAmbulance,
  FaProcedures,
  FaUserNurse,
  FaHandHoldingMedical,
} from "react-icons/fa";
import { TbDeviceAnalytics, TbReportSearch } from "react-icons/tb";
import { CgShutterstock } from "react-icons/cg";
import {
  FaHouseMedicalCircleExclamation,
  FaBookMedical,
} from "react-icons/fa6";

const tabsLink = [
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
        <div className="grid grid-cols-2 gap-2 md:gap-8">
          <Card
            title={"PELAYANAN"}
            onClick={() => handleTabs(1)}
            icon={<RiCustomerService2Fill />}
          />
          <Card
            title={"DASHBOARD"}
            onClick={() => handleTabs(2)}
            icon={<BiSolidDashboard />}
          />
          <Card
            title={"BRIDGING"}
            onClick={() => handleTabs(3)}
            icon={<BsFillInfoSquareFill />}
          />
          <Card
            title={"TUTORIAL"}
            onClick={() => handleTabs(4)}
            icon={<MdOndemandVideo />}
          />
        </div>
      </>
    );
  }

  function element2() {
    return (
      <>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-8">
          <Card
            title={"SMART RSABHK"}
            icon={<MdMiscellaneousServices />}
            onClick={() => window.open("https://smart.rsabhk.co.id:2222/")}
          />
          <Card title={"KEPERAWATAN"} icon={<FaUserNurse />} />
          <Card title={"IGD"} icon={<FaAmbulance />} />
          <Card title={"REHAB MEDIK"} icon={<FaProcedures />} />
        </div>
      </>
    );
  }

  function element3() {
    return (
      <>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-8">
          <Card
            title={"EIS"}
            icon={<TbDeviceAnalytics />}
            onClick={() => window.open("https://eis.rsabhk.co.id/auth/login")}
          />
          <Card
            title={"VEDIKA"}
            icon={<BsTable />}
            onClick={() => window.open("https://vedika.rsabhk.co.id/")}
          />
          <Card title={"REKAM MEDIK"} icon={<TbReportSearch />} />
        </div>
      </>
    );
  }

  function element4() {
    return (
      <>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-8">
          <Card
            title={"BIOS"}
            icon={<MdTableView />}
            onClick={() =>
              window.open("https://bridge.rsabhk.co.id/auth/login")
            }
          />
          <Card title={"SAKTI"} icon={<CgShutterstock />} />
          <Card title={"SATUSEHAT"} icon={<FaHandHoldingMedical />} />
          <Card title={"KYC"} icon={<BsPeopleFill />} />
        </div>
      </>
    );
  }

  function element5() {
    return (
      <>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-8">
          <Card
            title={"CARA DAFTAR PASIEN"}
            icon={<FaHouseMedicalCircleExclamation />}
          />
          <Card
            title={"CARA MEMBUAT REKAM MEDIS"}
            icon={<MdMedicalInformation />}
          />
          <Card title={"CARA DAFTAR RAWAT INAP"} icon={<FaBookMedical />} />
        </div>
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
            <h1 className="font-extrabold text-center text-3xl md:text-5xl">
              APLIKASI SIMRS
            </h1>
            <p className="text-center font-semibold mt-2">
              APLIKASI PENUNJANG PELAYANAN DAN UNIT RS &quot;RSABHK&quot;
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
        <div className="flex-col md:flex-row flex gap-4 md:mt-16 mt-5 mb-36">
          <div className="md:w-[250px] flex w-full px-4 md:ml-0 md:flex-none font-semibold">
            <ul className="grid grid-cols-2 md:grid-cols-none md:flex md:flex-col w-full gap-2">
              {tabsLink.map((item) => {
                const active = activeTabs === item.id;
                return (
                  <li key={item.id}>
                    <div
                      className={`${
                        active ? "bg-green-900 text-white" : ""
                      } flex md:inline-flex px-3 py-1 rounded-[3px] items-center gap-2 cursor-pointer`}
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
          <div className="flex-1 px-4 md:px-0">{elements()}</div>
        </div>
      </section>
    </>
  );
}

export default App;
