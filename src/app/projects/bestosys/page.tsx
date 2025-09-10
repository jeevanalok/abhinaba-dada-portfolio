"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import loader from "@/assets/loader.gif";
import Image from "next/image";

function BestosysPage() {
  const router = useRouter();
  useEffect(() => {
    router.push(
      "https://www.behance.net/gallery/231095521/UniNet-Connecting-College-Students"
    );
  }, [router]);
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <Image
        src={loader.src}
        alt="Loading..."
        className="w-16 h-16"
        width={64}
        height={64}
      />
    </div>
  );
}
export default BestosysPage;
