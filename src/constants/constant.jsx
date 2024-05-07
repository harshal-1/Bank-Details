import { AiOutlineLink, AiOutlineBank } from 'react-icons/ai';
import { HiOutlineViewGrid, HiOutlineDocumentText } from 'react-icons/hi';

export const navLinks = [
  {
    key: "Dashboard",
    label: "My Dashboard",
    path: "/dashboard",
    icon: <HiOutlineViewGrid/>,
  },
  {
    key: "Links",
    label: "TOTM Links",
    path: "/links",
    icon: <AiOutlineLink/>,
  },
  {
    key: "Summary",
    label: "Daily Summary",
    path: "/summary",
    icon: <HiOutlineDocumentText/>,
  },
  {
    key: "Bank",
    label: "Bank Details",
    path: "/",
    icon: <AiOutlineBank/>,
  },
 
];

export const inputs = [
  {
    key: "aname",
    label: "ACCOUNT HOLDER NAME",
    placeholder: "Account Holder Name",
  },
  {
    key: "anum",
    label: "ACCOUNT NUMBER",
    placeholder: "Account Number",
  },
  {
    key: "ifsc",
    label: "IFSC CODE",
    placeholder: "IFSC Code",
  },
  {
    key: "bname",
    label: "BANK NAME",
    placeholder: "Bank Name",
  },
  {
    key: "bcity",
    label: "BANK CITY",
    placeholder: "Bank City",
  },
  {
    key: "brname",
    label: "BRANCH NAME",
    placeholder: "Branch Name",
  },
  {
    key: "relation",
    label: "RELATION WITH ACCOUNT HOLDER",
    placeholder: "Relation with Account Holder",
  },
   
];

