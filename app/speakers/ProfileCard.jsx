import { useState } from "react";
import Image from "next/image";

const ProfileCard = ({ name, designation, description, image }) => {
  const [hovered, setHovered] = useState(false);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  const handleMouseEnter = (e) => {
    setHovered(true);
    handleMouseMove(e); // Position the details box immediately
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  const handleMouseMove = (e) => {
    // Set cursor position for the details box
    setCursorPos({
      x: e.clientX,
      y: e.clientY,
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
        className="rounded-lg cursor-pointer transition-transform transform"
      />

      {hovered && (
        <div
          className="absolute text-white bg-black bg-opacity-75 p-4 pointer-events-none z-50 bottom-0 w-full transition-all duration-300"
        >
          <h2 className="text-lg font-bold text-red-500">{name}</h2>
          <p className="text-sm">{designation}</p>
          <p className="text-xs">{description}</p>
        </div>
      )}
    </div>
  );
};

export default ProfileCard;
