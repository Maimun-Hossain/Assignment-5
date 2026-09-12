import { use } from "react";
import type { techData } from "../../types";
import star from "../../assets/Symbol.png";
import cross from "../../assets/xmark.png";
import { toast } from "react-toastify";

interface TechnologiesProps {
  data: Promise<techData[]>;
  cart: techData[];
  setCart: React.Dispatch<React.SetStateAction<techData[]>>;
}

const Technologies = ({ data, cart, setCart }: TechnologiesProps) => {
  const textColor = { color: "#94a3b8FF" };
  const datas = use(data);
  const handleAddToCart = (item: techData) => {
    if (!cart.some((cartItem) => cartItem.id === item.id)) {
      setCart([...cart, item]);
      toast.success(`${item.name} added to stack!`);
    }
  };

  const isInCart = (itemId: string) =>
    cart.some((cartItem) => cartItem.id === itemId);

  const handleRemoveFromCart = (id: string) => {
    setCart((currentCart) => currentCart.filter((item) => item.id !== id));
    toast.error(
      `${cart.find((item) => item.id === id)?.name} removed from stack!`,
    );
  };

  const handleRemoveAll = () => {
    setCart([]);
    toast.error("All technologies removed from stack!");
  };
  // console.log(datas);
  const badgeStyle: Record<string, string> = {
    Popular: "bg-[#e0f2feFF] text-[#0ea5e9FF]",
    Versatile: "bg-[#dbeafeFF] text-[#2563ebFF]",
    Fast: "bg-[#ffedd5FF] text-[#ea580cFF]",
    Cache: "bg-[#fee2e2FF] text-[#dc2626FF]",
    Standard: "bg-[#f3e8ffFF] text-[#7e22ceFF]",
    Essential: "bg-[#fef3c7FF] text-[#ca8a04FF]",
    Container: "bg-[#d1fae5FF] text-[#059669FF]",
  };
  return (
    <div className=" px-2 lg:px-0">
      <h2 className="font-extrabold text-4xl text-center md:text-start">
        Explore the{" "}
        <span className="text-transparent bg-clip-text bg-[linear-gradient(to_bottom,rgba(216,27,126,1)_100%,rgba(124,58,237,1)_0%)]">
          Technologies
        </span>
      </h2>
      <p className="text-lg mb-10 text-center md:text-start" style={textColor}>
        Pick one technology per category to build your ideal stack.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-9">
          <div className="grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-3">
            {datas.map((items) => {
              return (
                <div className="card border-2 border-[#E2E8F0]" key={items.id}>
                  <div className="card-body">
                    <div className="flex justify-between">
                      <img
                        className="w-10 h-10"
                        src={items.icon}
                        alt={items.name}
                      />
                      <span
                        className={`badge badge-sm rounded-3xl ${badgeStyle[items.badge] || "bg-[#f1f5f9CC] text-[#1e293b]"}`}
                      >
                        {items.badge}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <h2 className="text-2xl font-bold">{items.name}</h2>
                    </div>
                    <p className="text-sm" style={textColor}>
                      {items.description}
                    </p>
                    <div className="flex justify-between items-center mt-4">
                      <div className="badge bg-[#f1f5f9CC] rounded-sm">
                        {items.category}
                      </div>
                      <span style={textColor}>{items.difficulty}</span>
                      <div className="flex items-center gap-1">
                        <img src={star} alt="Star" />
                        <span>{items.rating}</span>
                      </div>
                    </div>
                    <div className="mt-6">
                      <button
                        onClick={() => handleAddToCart(items)}
                        disabled={isInCart(items.id)}
                        className={`btn rounded-lg btn-block ${
                          isInCart(items.id)
                            ? "btn-success text-white cursor-not-allowed"
                            : "btn-neutral"
                        }`}
                      >
                        {isInCart(items.id)
                          ? "✓ Added to Stack"
                          : "Add to Stack"}
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="lg:col-span-3">
          <div className="rounded-2xl border-2 border-[#E2E8F0] p-4">
            <h3 className="font-bold text-lg">Your Stack</h3>

            {cart.length > 0 ? (
              // If there are items in the cart then display
              <>
                <p style={textColor} className="text-sm">
                  {cart.length} Technology Selected
                </p>

                <div className="mt-4 space-y-2">
                  {cart.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-center justify-between rounded-xl border-2 border-[#E2E8F0] p-3"
                    >
                      <div className="flex items-center gap-3">
                        <div className="flex items-center justify-center">
                          <img
                            src={item.icon}
                            alt={item.name}
                            className="h-7 w-7"
                          />
                        </div>
                        <div>
                          <p className="text-xs font-bold">{item.name}</p>
                          <p
                            className="text-[10px] font-semibold"
                            style={textColor}
                          >
                            {item.category}
                          </p>
                        </div>
                      </div>

                      <button
                        onClick={() => handleRemoveFromCart(item.id)}
                        className="cursor-pointer"
                      >
                        <img src={cross} alt="Remove" className="h-5 w-5" />
                      </button>
                    </div>
                  ))}
                </div>

                <button
                  onClick={handleRemoveAll}
                  className="mt-4 w-full rounded-xl border border-[#ed8c85FF] py-2 text-sm font-semibold text-[#d82c20FF] cursor-pointer hover:bg-[#d82c20FF] hover:text-white"
                >
                  Remove All
                </button>
              </>
            ) : (
              // If there are no items in the cart then display
              <>
                <p className="text-sm" style={textColor}>
                  No technologies selected yet.
                </p>
                <div className="py-4 outline-2 outline-offset-2 outline-dashed outline-[#E2E8F0] rounded-2xl text-center my-4">
                  <p style={textColor}>Your stack is empty.</p>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technologies;
