const MenuItem = ({
  name,
  onMenuItemClick,
}: {
  name: string;
  onMenuItemClick: (str: string) => void;
}): React.ReactElement => {
  return (
    <li
      className="mr-6 py-1 hover:bg-slate-600 cursor-pointer"
      onClick={() => onMenuItemClick(name)}
    >
      <a
        href="#"
        className="px-2 py-2 text-sm font-medium  uppercase text-blue-500 hover:text-blue-800"
      >
        {name}
      </a>
    </li>
  );
};

export default MenuItem;
