import { PurchaseDetailsModalItemProps } from "@/types/global";

export default function PurchaseDetailsModalItem({
  label,
  value,
}: PurchaseDetailsModalItemProps) {
  return (
    <div className="flex justify-between items-center text-black text-base">
      <span className="font-geist700">{label}</span>
      <span className="font-geistRegular">{value}</span>
    </div>
  );
}
