import MenuItem from "./MenuItem";

const Sidebar = ({
  setCurrentMainView,
}: {
  setCurrentMainView: (str: string) => void;
}) => {
  return (
    <div className="flex flex-col flex-shrink-0 w-80 transition duration-200 transform bg-gray-800 translate-x-0">
      {/* Sidebar header */}
      <div className="flex items-center justify-center h-16 px-4 text-white bg-gray-900">
        <span className="text-lg font-semibold tracking-wider uppercase">
          <h2>Maca Screener</h2>
        </span>
      </div>
      {/* Sidebar links */}
      <nav className="flex-1 overflow-y-auto bg-gray-800">
        <ul className="px-2 py-4">
          <MenuItem name="card gallery" onMenuItemClick={setCurrentMainView} />
          <MenuItem name="tooltip" onMenuItemClick={setCurrentMainView} />
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
