import { TabMenuType } from "../../Five/UserList";

const TabMenu: React.FC<TabMenuType> = ({
  text,
  active,
}: TabMenuType): JSX.Element => {
  return (
    <div
      className={`cursor-pointer rounded-lg p-4 font-popi ${active ? "bg-[#839fff] text-white" : "bg-white text-[#151b31]"}`}
    >
      {text}
    </div>
  );
};

export default TabMenu;
