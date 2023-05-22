import { ReactElement, useCallback } from "react";
import { AiOutlineClose } from "react-icons/ai";
import Button from "../forms/Button";
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
        className="relative w-full my-6 mx-auto max-w-lg h-full lg:h-auto rounded-md"
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
          className="h-14 w-14 p-4 items-center justify-center cursor-pointer transition" style={{ margin: "0 auto" }}>
          <BsTwitter size={40} color="rgb(29, 155, 240)" />
        </div>
        <div className="flex items-center justify-between rounded-t">
          <h3 className="text-3xl font-semibold text-black"
            style={{ margin: "0 auto" }}>
            {title}
          </h3>
        </div>

        <div className="relative flex-auto">{body}</div>
        <div className="flex flex-col gap-2">
          <Button
            disabled={disabled}
            label={actionLabel}
            secondary
            fullWidth
            large
            onClick={handleSubmit}
            color="white"
            backgroundColor="rgb(29, 155, 240)"
            width={300}
          />

          <button disabled type="button" style={{ width: 300, justifyContent: 'center', margin: "0 auto" }}
            className="py-2.5 px-5 mr-2 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 inline-flex items-center">
            <svg aria-hidden="true" role="status" className="inline w-4 h-4 mr-3 text-gray-200 animate-spin dark:text-gray-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
              <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="#1C64F2" />
            </svg>
            Loading...
          </button>
          {footer}
        </div>
      </div>
    </div>
  );
};

export default Modal;
