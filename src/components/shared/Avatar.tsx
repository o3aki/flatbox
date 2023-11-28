import Image from "next/image";

export enum AvatarSize {
  extraSmall = 24,
  small = 32,
  medium = 40,
  large = 128,
}

interface AvatarProps {
  className?: string;
  onClick?: () => void;
  size?: AvatarSize;
  imageSrc?: string | null;
}

const Avatar: React.FC<AvatarProps> = ({
  className,
  onClick,
  imageSrc,
  size = AvatarSize.medium,
}) => {
  return (
    <Image
      alt="avatar"
      className={`rounded-full aspect-square object-contain ${
        onClick && "cursor-pointer"
      } ${className}`}
      width={size}
      height={size}
      onClick={onClick}
      src={imageSrc || "/images/avatar.png"}
    />
  );
};

export default Avatar;
