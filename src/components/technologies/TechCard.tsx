import type { Dispatch, SetStateAction } from "react";
import star from "../../assets/Symbol.png";
import type { techData } from "../../types";
import { toast } from "react-toastify";

interface TechCardProps {
  tech: techData;
  cart: techData[];
  setCart: Dispatch<SetStateAction<techData[]>>;
  badgeStyle: Record<string, string>;
  textColor: { color: string };
}

const TechCard = ({
  tech,
  cart,
  setCart,
  badgeStyle,
  textColor,
}: TechCardProps) => {
  const handleAddToCart = (item: techData) => {
    if (!cart.some((cartItem) => cartItem.id === item.id)) {
      setCart((currentCart) => [...currentCart, item]);
      toast.success(`${item.name} added to stack!`);
    } else {
      toast.warn(`${item.name} is already in your stack.`);
    }
  };

  const isInCart = (itemId: string) =>
    cart.some((cartItem) => cartItem.id === itemId);

  return (
    <div className="card border-2 border-[#E2E8F0]" key={tech.id}>
      <div className="card-body">
        <div className="flex justify-between">
          <img className="w-10 h-10" src={tech.icon} alt={tech.name} />
          <span
            className={`badge badge-sm rounded-3xl ${badgeStyle[tech.badge] || "bg-[#f1f5f9CC] text-[#1e293b]"}`}
          >
            {tech.badge}
          </span>
        </div>
        <div className="flex justify-between">
          <h2 className="text-2xl font-bold">{tech.name}</h2>
        </div>
        <p className="text-sm" style={textColor}>
          {tech.description}
        </p>
        <div className="flex justify-between items-center mt-4">
          <div className="badge bg-[#f1f5f9CC] rounded-sm">{tech.category}</div>
          <span style={textColor}>{tech.difficulty}</span>
          <div className="flex items-center gap-1">
            <img src={star} alt="Star" />
            <span>{tech.rating}</span>
          </div>
        </div>
        <div className="mt-6">
          <button
            onClick={() => handleAddToCart(tech)}
            disabled={isInCart(tech.id)}
            className={`btn rounded-lg btn-block ${
              isInCart(tech.id)
                ? "btn-success text-white cursor-not-allowed"
                : "btn-neutral"
            }`}
          >
            {isInCart(tech.id) ? "✓ Added to Stack" : "Add to Stack"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default TechCard;
