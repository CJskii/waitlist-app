const Toast: React.FC<{ message: string; onClose: () => void }> = ({
  message,
  onClose,
}) => {
  return (
    <div className="fixed right-0 top-[10%] mt-4 mr-4 p-4 bg-error text-error-content rounded-lg shadow-md z-50">
      {message}
      <button onClick={onClose} className="ml-4">
        x
      </button>
    </div>
  );
};

export default Toast;
