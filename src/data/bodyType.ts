import regular from "../assets/body-type/regular.png";
import plumb from "../assets/body-type/plumb.png";
import extraPlumb from "../assets/body-type/extra-plumb.png";

export const bodyTypeToSelect: Record<string, string>[] = [
  {
    id: "0",
    text: "Regular",
    img: regular,
    color: "pale-green",
  },
  {
    id: "1",
    text: "Plumb",
    img: plumb,
    color: "pale-purple",
  },
  {
    id: "2",
    text: "Extra-plumb",
    img: extraPlumb,
    color: "pale-yellow",
  },
];
