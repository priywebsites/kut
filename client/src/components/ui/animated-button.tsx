import { motion } from "framer-motion";
import { Button } from "./button";
import { cn } from "../../lib/utils";
import { LucideIcon } from "lucide-react";

interface AnimatedButtonProps extends React.ComponentProps<typeof Button> {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg" | "xl";
  icon?: LucideIcon;
  children: React.ReactNode;
}

const AnimatedButton = ({ 
  variant = "primary", 
  size = "md", 
  icon: Icon, 
  children, 
  className, 
  ...props 
}: AnimatedButtonProps) => {
  const variants = {
    primary: "bg-black text-white hover:bg-gray-800 border-black",
    secondary: "bg-white text-black hover:bg-gray-100 border-gray-300",
    ghost: "bg-transparent text-gray-600 hover:text-black hover:bg-gray-50 border-transparent"
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
    xl: "px-12 py-4 text-xl"
  };

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      <Button
        className={cn(
          "rounded-full font-medium transition-all duration-300 relative overflow-hidden group border-2",
          variants[variant],
          sizes[size],
          "before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent before:translate-x-[-100%] before:transition-transform before:duration-700 hover:before:translate-x-[100%]",
          className
        )}
        {...props}
      >
        <span className="flex items-center space-x-2 relative z-10">
          {Icon && <Icon size={size === "xl" ? 24 : size === "lg" ? 20 : 18} />}
          <span>{children}</span>
        </span>
      </Button>
    </motion.div>
  );
};

export default AnimatedButton;
