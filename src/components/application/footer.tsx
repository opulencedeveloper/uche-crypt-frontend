import Link from "next/link";
import Image from "next/image";

import { socialLinks } from "@/resources/social-links";
import SectionTitle from "../ui/section-title";

export default function Footer() {
  return (
    <footer className="w-full tablet:py-[65px] py-[34px] flex flex-col items-center">
      <SectionTitle background="#CFD3A9" color="#006633" title="Link me up" />
      <h2 className="mt-4 text-center tablet:max-w-[532px] max-w-full leading-[40px] text-[28px] font-bold text-primarygreen1 mb-8">
        Let’s stay connected, follow me for more updates
      </h2>
      <div className="flex items-center gap-6 mb-8">
        {socialLinks.map((item) => {
          return (
            <Link href={item.path} key={crypto.randomUUID()}>
              <Image
                src={item.image}
                alt=""
                className="w-6 h-6 object-contain"
              />
            </Link>
          );
        })}
      </div>
      <p className="text-dark1 text-lg font-normal leading-[27px]">
        © 2023 - all rights reserved
      </p>
    </footer>
  );
}
