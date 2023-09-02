import Image from "next/image";

type AvatarProps = {
  size: number;
};

function Avatar({ size }: AvatarProps) {
  return (
    <span className="  flex items-center justify-center rounded-full bg-neutral-500 p-1">
      <Image src="/userAva.png" width={size} height={size} alt="User avatar" />
    </span>
  );
}

export default Avatar;
