import { OrbitingCircles } from "./OrbitingCircles";

export function Palestien() {
  const skills = [
    "FREE1",
    "FREE2",
    "FREE3",
    "FREE4",
    "FREE5",
    "FREE6",
    "FREE7",
    "FREE8",
    "FREE9",
    "FREE10",
    "FREE11",
    "FREE12",
    "FREE13",
  ];
  return (
    <div className="relative flex h-[15rem] w-full flex-col items-center justify-center">
      <OrbitingCircles iconSize={50}>
        {skills.map((skill, index) => (
          <Icon key={index} src={`assets/logos/${skill}.png`} />
        ))}
      </OrbitingCircles>
      <OrbitingCircles iconSize={25} radius={100} reverse speed={2}>
        {skills.reverse().map((skill, index) => (
          <Icon key={index} src={`assets/logos/${skill}.png`} />
        ))}
      </OrbitingCircles>
    </div>
  );
}

const Icon = ({ src }) => (
  <img src={src} className="duration-200 rounded-sm hover:scale-110" />
);
