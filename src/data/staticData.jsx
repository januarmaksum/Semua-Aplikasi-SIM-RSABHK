import {
  MdOndemandVideo,
  MdMiscellaneousServices,
  MdTableView,
  MdMedicalInformation,
} from "react-icons/md";
import {
  FaAmbulance,
  FaProcedures,
  FaUserNurse,
  FaHandHoldingMedical,
} from "react-icons/fa";
import {
  FaHouseMedicalCircleExclamation,
  FaBookMedical,
} from "react-icons/fa6";
import { RiCustomerService2Fill } from "react-icons/ri";
import { BiSolidDashboard } from "react-icons/bi";
import { BsFillInfoSquareFill, BsTable, BsPeopleFill } from "react-icons/bs";
import { TbDeviceAnalytics, TbReportSearch } from "react-icons/tb";
import { CgShutterstock } from "react-icons/cg";

export const dataNavigation = [
  {
    id: 1,
    title: "PELAYANAN",
    icon: <RiCustomerService2Fill />,
    link: null,
  },
  {
    id: 2,
    title: "DASHBOARD",
    icon: <BiSolidDashboard />,
    link: null,
  },
  {
    id: 3,
    title: "BRIDGING",
    icon: <BsFillInfoSquareFill />,
    link: null,
  },
  {
    id: 4,
    title: "TUTORIAL",
    icon: <MdOndemandVideo />,
    link: null,
  },
];

export const dataPelayanan = [
  {
    id: 1,
    title: "SMART RSABHK",
    icon: <MdMiscellaneousServices />,
    link: "https://smart.rsabhk.co.id:2222",
  },
  {
    id: 2,
    title: "KEPERAWATAN",
    icon: <FaUserNurse />,
    link: null,
  },
  {
    id: 3,
    title: "IGD",
    icon: <FaAmbulance />,
    link: null,
  },
  {
    id: 4,
    title: "REHAB MEDIK",
    icon: <FaProcedures />,
    link: null,
  },
];

export const dataDashboard = [
  {
    id: 1,
    title: "EIS",
    icon: <TbDeviceAnalytics />,
    link: "https://eis.rsabhk.co.id",
  },
  {
    id: 2,
    title: "VEDIKA",
    icon: <BsTable />,
    link: "https://vedika.rsabhk.co.id",
  },
  {
    id: 3,
    title: "REKAM MEDIK",
    icon: <TbReportSearch />,
    link: "",
  },
];

export const dataBridging = [
  {
    id: 1,
    title: "BIOS",
    icon: <MdTableView />,
    link: "https://bridge.rsabhk.co.id",
  },
  {
    id: 2,
    title: "SAKTI",
    icon: <CgShutterstock />,
    link: "",
  },
  {
    id: 3,
    title: "SATUSEHAT",
    icon: <FaHandHoldingMedical />,
    link: "",
  },
  {
    id: 4,
    title: "KYC",
    icon: <BsPeopleFill />,
    link: "",
  },
];

export const dataTutorial = [
  {
    id: 1,
    title: "CARA DAFTAR PASIEN",
    icon: <FaHouseMedicalCircleExclamation />,
    link: "",
  },
  {
    id: 2,
    title: "CARA MEMBUAT REKAM MEDIS",
    icon: <MdMedicalInformation />,
    link: "",
  },
  {
    id: 3,
    title: "CARA DAFTAR RAWAT INAP",
    icon: <FaBookMedical />,
    link: "",
  },
];
