import imgLogo from "../assets/react-core-concepts.png";

const reactDescriptions = ["Fundamental", "Crucial", "Important", "Key"];

function getRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

export default function Header() {
  const description = reactDescriptions[getRandomInt(reactDescriptions.length)];

  return (
    <header>
      <img src={imgLogo} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {description} React concepts you will need for almost any app you are going to
        build!
      </p>
    </header>
  );
}
