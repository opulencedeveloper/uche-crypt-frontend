import Image from "next/image";
import ChevronRight from "@/assets/images/contact-dropdown/chevron-right.svg";
import WhatsApp from "@/assets/images/contact-dropdown/whatsapp.svg";

export default function WhatsAppLink() {
  const whatsappURL = `https://api.whatsapp.com/send?phone=+2349030889135&text=${"Hello uchecrypt"}`;
  return (
    <div
      onClick={() => window.open(whatsappURL, "_blank")}
      className="w-full cursor-pointer flex justify-between items-start"
    >
      <div className="flex items-start gap-3">
        <Image src={WhatsApp} alt="" width={15.88} height={16} />
        <div className="flex flex-col gap-0.5">
          <p className="text-dark1 text-sm font-bold leading-[21px]">
            WhatsApp
          </p>
          <p className="text-[#6B7588] text-base font-normal leading-6">
            09030889135
          </p>
        </div>
      </div>
      <Image src={ChevronRight} alt="" />
    </div>
  );
}
