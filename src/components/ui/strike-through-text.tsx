export default function StrikeThroughText() {
  return (
    <div className="relative w-[89px] flex justify-center">
      <h3 className="tablet:text-[32px] mini:text-[24px] text-[20px] tablet:leading-[48px] text-[#F13562] font-normal">
        $50
      </h3>
      <div className="absolute left-0 w-full h-0.5 mini:h-1 bg-[#F13562] top-[calc(50%-2px)]"></div>
    </div>
  );
}
