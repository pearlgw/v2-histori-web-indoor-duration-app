"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { getDecryptedImage } from "@/lib/personService";

type Props = {
  filename: string;
  token: string;
  alt: string;
};

const DecryptedImage = ({ filename, token, alt }: Props) => {
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  useEffect(() => {
    getDecryptedImage(filename, token)
      .then(setImageUrl)
      .catch((err) => console.error("Failed to load decrypted image", err));
  }, [filename, token]);

  if (!imageUrl) {
    return <Image src="/loading.svg" alt="Loading..." width={100} height={100} />;
  }

  return (
      <Image
        src={imageUrl}
        alt={alt}
        width={200}
        height={200}
        className="object-fill rounded-lg"
        />
  );
};

export default DecryptedImage;
