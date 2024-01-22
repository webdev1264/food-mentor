// const goalToSelect = ["Lose weight", "Get perfect fit body", "Tone muscles", "Be healthier"];
import loseWeight from "../assets/goal/lose-weight.png";
import perfectBody from "../assets/goal/perfect-body.png";
import toneMuscles from "../assets/goal/tone-muscles.png";
import beHealthier from "../assets/goal/be-healthier.png";

export const goalToSelect: Record<string, string>[] = [
  {
    id: "0",
    text: "Lose weight",
    img: loseWeight,
    color: "pale-purple",
  },
  {
    id: "1",
    text: "Get perfect fit body",
    img: perfectBody,
    color: "pale-green",
  },
  {
    id: "2",
    text: "Tone muscles",
    img: toneMuscles,
    color: "pale-blue",
  },
  {
    id: "3",
    text: "Be healthier",
    img: beHealthier,
    color: "pale-yellow",
  },
];
