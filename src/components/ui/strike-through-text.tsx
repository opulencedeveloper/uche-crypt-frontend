export default function StrikeThroughText() {
  return (
    <div className="relative w-[89px] flex justify-center">
      <h3 className="text-[32px] leading-[48px] text-[#F13562] font-normal">
        $50
      </h3>
      <div className="absolute left-0 w-full h-1 bg-[#F13562] top-[calc(50%-2px)]"></div>
    </div>
  );
}
