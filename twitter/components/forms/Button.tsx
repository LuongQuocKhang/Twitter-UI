interface ButtonProps {
  label: string;
  secondary?: boolean;
  fullWidth?: boolean;
  large?: boolean;
  onClick: () => void;
  disabled?: boolean;
  outline?: boolean;
  color?: string,
  backgroundColor?: string;
  width?: number;
}

const Button: React.FC<ButtonProps> = ({
  label,
  secondary,
  fullWidth,
  large,
  disabled,
  outline,
  onClick,
  color,
  backgroundColor,
  width
}) => {
  return (
    <>
      <button
        disabled={disabled}
        onClick={onClick}
        className={`disabled:opacity-70
          disabled:cursor-not-allowed
          rounded-full
          font-semibold
          hover:opacity-80
          transition
          ${fullWidth ? "w-full" : "w-fit"}
          ${secondary ? "bg-white" : "rgb(29, 155, 240)"}
          ${secondary ? "text-black" : "text-white"}
          ${secondary ? "border-black" : "border-sky-500"}
          ${large ? "text-xl" : "text-md"}
          ${large ? "px-5" : "px-4"}
          ${large ? "py-3" : "py-2"}
          ${outline ? "bg-transparent" : ""}
          ${outline ? "border-white" : ""}
          ${outline ? "text-white" : ""}
          `}
          style={{backgroundColor: backgroundColor, color: color, width: width, justifyContent: 'center', margin: "0 auto"}}
      >
        {label}
      </button>
    </>
  );
};

export default Button;