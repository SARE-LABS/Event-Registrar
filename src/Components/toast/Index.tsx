import type { ToastProps } from "../../types/Toast"
import Error from "../../assets/gifs/Error.gif"
import Success from "../../assets/gifs/Success.gif"

export const Toast: React.FC<ToastProps> = ({ message, type }) => {
  const baseStyle =
    "fixed bottom-4 right-4 h-[100px] w-[400px] flex items-center gap-3 p-4 rounded-lg shadow-lg transition-opacity duration-300 bg-[#FFFFFF] z-50";

  const typeStyles = [
    {
      type: "success",
      style: "text-[#0FC99F]",
      icon: <Success />,
    },
    {
      type: "error",
      style: "text-[#EF4444]",
      icon: <Error />,
    },
  ];

  const styleConfig = typeStyles.find((t) => t.type === type);

  return (
    <div className={`${baseStyle} ${styleConfig?.style}`}>
      <div>
        <h2 className="text-[12px] font-medium">
          {type.charAt(0).toUpperCase() + type.slice(1)}
        </h2>
        <p className="text-[15px] font-medium text-[#1F2937]">{message}</p>
      </div>
      {styleConfig?.icon && (
        <div className="ml-4">
          {styleConfig.icon}
        </div>
      )}
    </div>
  );
};
