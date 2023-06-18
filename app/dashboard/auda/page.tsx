export default function audaiq() {
  return (
    <div className="px-12 grid grid-cols-3 gap-6 pb-12">
      <div className="col-span-3 lg:col-span-2 h-[680px] rounded-[36px] bg-black p-6">
        <div className="flex flex-row justify-between items-baseline mb-6">
          <h3 className="text-xl font-medium">Sentiment Overview</h3>
          <a href="" className="text-xs capitalize text-right">
            view less
          </a>
        </div>
      </div>

      <div className="col-span-3 lg:col-span-1 min-w-330 h-[680px] rounded-[36px] bg-black p-6">
        <div className="flex flex-row justify-between items-baseline mb-6">
          <h3 className="text-xl font-medium">Sentiment by Channel</h3>
          <a href="" className="text-xs capitalize text-right">
            view less
          </a>
        </div>
      </div>
    </div>
  );
}
