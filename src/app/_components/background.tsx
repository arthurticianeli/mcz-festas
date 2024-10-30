import "./background.css";

const imgs = [
  "/assets/mirrorball.svg",
  "/assets/confetti.svg",
  "/assets/drinks.svg",
];

const getRandomPosition = (min: number, max: number) =>
  Math.random() * (max - min) + min;

const generateUniquePositions = () => {
  let count = getRandomPosition(15, 30);

  const positions: { top: number; left: number; rotation: number }[] = [];
  const halfCount = Math.ceil(count / 2);

  while (positions.length < count) {
    const top = getRandomPosition(15, 90);
    let left;
    if (positions.length < halfCount) {
      // Colunas 1 e 2
      left = getRandomPosition(2, 16.66); // 1/6 da tela para colunas 1 e 2
    } else {
      // Colunas 11 e 12
      left = getRandomPosition(80, 98); // Último 1/6 da tela para colunas 11 e 12
    }
    const rotation = getRandomPosition(-20, 20);
    const position = { top, left, rotation };

    if (
      !positions.some(
        (pos) => Math.abs(pos.top - top) < 5 && Math.abs(pos.left - left) < 5
      )
    ) {
      positions.push(position);
    }
  }

  return positions;
};

const Background = () => {
  const positions = generateUniquePositions();

  return (
    <div className="background-container">
      {positions.map((pos, index) => (
        <img
          key={index}
          src={imgs[Math.floor(Math.random() * imgs.length)]}
          alt={`Decorative background ${index}`}
          className="background-image "
          style={{
            top: `${pos.top}%`,
            left: `${pos.left}%`,
            transform: `rotate(${pos.rotation}deg)`,
          }}
        />
      ))}
    </div>
  );
};

export default Background;
