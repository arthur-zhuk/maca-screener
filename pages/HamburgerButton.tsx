const HamburgerButton = ({
  sidebarHidden,
  setSidebarHidden,
}: {
  sidebarHidden: boolean;
  setSidebarHidden: (sidebarHidden: boolean) => void;
}) => {
  return (
    <button
      onClick={() => setSidebarHidden(!sidebarHidden)}
      className="p-1 text-gray-400 rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
    >
      <span className="sr-only">Open sidebar</span>
      <svg
        className="w-6 h-6"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>
    </button>
  );
};

export default HamburgerButton;
