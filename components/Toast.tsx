import { motion } from "framer-motion";
import { IoMdCloseCircleOutline } from "react-icons/io";

const Toast: React.FC<{ message: string; onClose: () => void }> = ({
  message,
  onClose,
}) => {
  const variants = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={variants}
      className="fixed right-0 top-[15%] mt-4 mr-4 p-4 bg-warning text-warning-content rounded-lg shadow-md z-50 flex justify-center items-center"
    >
      {message}

      <button onClick={onClose} className="ml-4">
        <IoMdCloseCircleOutline />
      </button>
    </motion.div>
  );
};

export default Toast;
