"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import loader from "@/assets/loader.gif";
function BestosysPage() {
  const router = useRouter();
  useEffect(() => {
    router.push(
      "https://www.behance.net/gallery/231095521/UniNet-Connecting-College-Students"
    );
  }, []);
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <img src={loader.src} alt="Loading..." className="w-16 h-16" />
    </div>
  );
}
export default BestosysPage;
