import { ReactElement, useCallback } from "react";
import { AiOutlineClose } from "react-icons/ai";
import Button from "../components/Button";
import { BsTwitter } from "react-icons/bs";

interface ModelProps {
  isOpen?: boolean;
  onClose: () => void;
  onSubmit: () => void;
  title?: string;
  body?: ReactElement;
  footer?: ReactElement;
  actionLabel: string;
  disabled?: boolean;
}

const Modal: React.FC<ModelProps> = ({
  isOpen,
  onClose,
  onSubmit,
  title,
  body,
  footer,
  actionLabel,
  disabled,
}) => {
  const handleClose = useCallback(() => {
    if (disabled) {
      return;
    }

    onClose();
  }, [disabled, onClose]);

  const handleSubmit = useCallback(() => {
    if (disabled) {
      return;
    }
    onSubmit();
  }, [disabled, onSubmit]);

  if (!isOpen) {
    return null;
  }

  return (
    <div
      className="justify-center items-center flex overflow-x-hidden
        overflow-y-auto fixed inset-0 z-50 outline-none
        focus-outline-none bg-neutral-800 bg-opacity-70"
    >
      <div
        className="relative w-full lg:w-3/6 my-6 mx-auto lg:max-w-3xl h-full lg:h-auto rounded-md"
        style={{ backgroundColor: "#ffffff", padding: "20px" }}
      >
		 <button
            className="p-1 ml-auto border-0 text-black hover:opacity-70 transition rounded-full hover:bg-grey-300"
            onClick={handleClose}
          >
            <AiOutlineClose size={20} />
          </button>
        {/* Content */}
        <div
          className="h-14 w-14 p-4 items-center justify-center cursor-pointer transition" style={{margin: "0 auto"}}>
          <BsTwitter size={40} color="rgb(29, 155, 240)" />
        </div>
        <div className="flex items-center justify-between p-10 rounded-t">
          <h3 className="text-3xl font-semibold text-black"
		  style={{margin: "0 auto"}}>
			{title}
		</h3>
        </div>

        <div className="relative p-10 flex-auto">{body}</div>
        <div className="flex flex-col gap-2 p-10">
          <Button
            disabled={disabled}
            label={actionLabel}
            secondary
            fullWidth
            large
            onClick={handleSubmit}
          />
        </div>
      </div>
    </div>
  );
};

export default Modal;
