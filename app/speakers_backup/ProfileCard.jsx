import { useState } from "react";
import Image from "next/image";

const ProfileCard = ({ name, designation, description, image }) => {
  const [hovered, setHovered] = useState(false);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  const handleMouseEnter = (e) => {
    setHovered(true);
    handleMouseMove(e); // Immediately position info when hover starts
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  const handleMouseMove = (e) => {
    const offsetX = 15; // offset for tooltip from cursor
    const offsetY = 15;

    setCursorPos({
      x: e.clientX + offsetX,
      y: e.clientY + offsetY,
    });
  };

  return (
    <div className="relative group">
      <Image
        src={image}
        alt={name}
        width={300}
        height={300}
        draggable={false}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseMove}
        className="rounded-lg shadow-lg cursor-pointer transition-transform transform"
      />

      {hovered && (
        <div
          className="absolute text-white bg-black bg-opacity-75 rounded-lg p-4 pointer-events-none z-50"
          style={{
            top: `${cursorPos.y}px`,
            left: `${cursorPos.x}px`,
          }}
        >
          <h2 className="text-lg font-bold">{name}</h2>
          <p className="text-sm">Designation: {designation}</p>
          <p className="text-xs">{description}</p>
        </div>
      )}
    </div>
  );
};

export default ProfileCard;
