export default function Stake() {
  // TODO: replace with actual fetched value
  const stakedEVOL = 12345;
  const sEVOLBalance = 9876;
  const sEVOLInterest = 123.45;
  const currentEVOL = 10000;
  const depositEVOL = 1000;

  return (
    <div className="w-full flex flex-col items-center gap-20">
      <div className="w-1/3">
        <div className="flex justify-between">
          <div className="grid gap-2">
            <div className="text-sm text-slate-400 font-bold">Staked EVOL</div>
            <div className="font-bold text-xl text-slate-700">
              {stakedEVOL.toLocaleString()}{" "}
              <span className="text-sm text-slate-500">EVOL</span>
            </div>
            <div className="text-sm text-slate-400 font-bold">
              {sEVOLInterest} sEVOL per day
            </div>
          </div>

          <div className="grid gap-2 auto-rows-min">
            <div className="text-sm text-slate-400 font-bold">
              sEVOL balance
            </div>
            <div className="font-bold text-xl text-slate-700">
              {sEVOLBalance.toLocaleString()}{" "}
              <span className="text-sm text-slate-500">sEVOL</span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center gap-5 shadow w-1/2 pb-10">
        <div className="flex divide-x-2 divide">
          {/* TODO: toggle styles and menus */}
          <div className="px-2 font-bold text-cyan-500">Stake</div>
          <div className="px-2 font-bold">Unstake</div>
        </div>

        <div className="font-bold text-sm">Balance: {currentEVOL} EVOL</div>
        <div className="flex gap-10">
          <button className="button secondary text-xs">Max</button>
          {/* TODO: replace with input */}
          <div className="font-bold text-xl text-slate-700">
            {depositEVOL.toLocaleString()}{" "}
            <span className="text-sm text-slate-500">EVOL</span>
          </div>
        </div>
        <button className="button primary">Stake</button>
      </div>
    </div>
  );
}
