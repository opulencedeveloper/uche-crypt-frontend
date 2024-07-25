import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

import WhatsAppLink from "./whatsapp-link";
import EmailLink from "./email-link";

export default function ContactHovermenu() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-transparent">
            <p className="font-normal text-base text-dark1">Contact</p>
          </NavigationMenuTrigger>
          <NavigationMenuContent className="navigation-menu-card md:w-[280px] border-none h-max bg-white rounded-xl p-6 flex flex-col gap-6">
            <p className="text-xs text-[#6B7588] leading-[18px] font-normal">
              Contact me
            </p>
            <div className="w-full border-b border-[#E9E9E9]"></div>
            <WhatsAppLink />
            <EmailLink />
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
