"use client";

interface IconButtonProps {
  className?: string;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

const IconButton: React.FC<React.PropsWithChildren<IconButtonProps>> = ({
  children,
  className = "",
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      className={`cursor-pointer rounded-full p-2 hover:bg-neutral-800 ${className}`}
    >
      {children}
    </div>
  );
};

export default IconButton;
