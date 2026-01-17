import Image from "next/image";

type ClickHintProps = {
  imageSrc: string;
};

export default function ClickHint({ imageSrc }: ClickHintProps) {
  return <Image src={imageSrc} alt="" width={140} height={60} />;
}
