import { use } from "react";
import type { techData } from "../../types";

interface TechnologiesProps {
  data: Promise<techData[]>;
}

const Technologies = ({ data }: TechnologiesProps) => {
  const textColor = { color: "#94a3b8FF" };
  const datas = use(data);
  console.log(datas);
  return (
    <div className=" px-2 lg:px-0">
      <h2 className="font-extrabold text-4xl">
        Explore the{" "}
        <span className="text-transparent bg-clip-text bg-[linear-gradient(to_bottom,rgba(216,27,126,1)_100%,rgba(124,58,237,1)_0%)]">
          Technologies
        </span>
      </h2>
      <p className="text-lg mb-10" style={textColor}>
        Pick one technology per category to build your ideal stack.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-9 bg-amber-100">
          <div className="grid grid-cols-3 gap-3">
            {datas.map((items) => {
              return (
                <div className="card bg-base-100 shadow-sm">
  <div className="card-body">
    <span className="badge badge-xs badge-warning">Most Popular</span>
    <div className="flex justify-between">
      <h2 className="text-3xl font-bold">Premium</h2>
      <span className="text-xl">$29/mo</span>
    </div>
    <ul className="mt-6 flex flex-col gap-2 text-xs">
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>High-resolution image generation</span>
      </li>
    </ul>
    <div className="mt-6">
      <button className="btn btn-neutral rounded-lg btn-block">Add to Stack</button>
    </div>
  </div>
</div>
              );
            })}
          </div>
        </div>
        <div className="lg:col-span-3">
          <div className=" rounded-2xl border-2 border-[#E2E8F0] p-4">
            <h3 className="font-bold text-lg">Your Stack</h3>
            <p className="text-sm" style={textColor}>
              No technologies selected yet.
            </p>
            <div className="py-6 px-16 outline-2 outline-offset-2 outline-dashed outline-[#E2E8F0] rounded-2xl text-center my-4">
              <p style={textColor}>Your stack is empty.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technologies;
