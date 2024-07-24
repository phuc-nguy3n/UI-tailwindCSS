import SearchIcon from "../assets/icons/Search";
import TabMenu from "../Components/Five/TabMenu";

export type TabMenuType = {
  text: string;
  active: boolean;
};

const tabMenuData: TabMenuType[] = [
  { text: "Reputation", active: false },
  { text: "New users", active: true },
  { text: "Voters", active: false },
  { text: "Editors", active: false },
  { text: "Moderators", active: false },
];

const UserList: React.FC = (): JSX.Element => {
  return (
    <div className="rounded-2xl bg-white p-[100px]">
      <header className="mb-[70px]">
        <h2 className="mb-6 font-merri text-[32px] font-black text-[#151b31]">
          Users
        </h2>
        <div className="flex justify-between gap-[160px]">
          <div className="relative w-[327px] flex-grow">
            <SearchIcon />

            <input
              className="w-full rounded border border-[#bfc7e5] pb-4 pl-12 pr-4 pt-4 font-popi text-[#151b31]"
              type="text"
              placeholder="Search users"
            />
          </div>

          <div className="flex">
            {tabMenuData.map(
              (item: TabMenuType): React.ReactElement => (
                <TabMenu text={item.text} active={item.active} />
              ),
            )}
          </div>
        </div>
      </header>

      <div className="mt-[70px] grid grid-cols-3 gap-4">
        <div className="flex h-52 w-full cursor-pointer gap-4 rounded-2xl bg-[#fafbff] p-6 hover:shadow-md">
          <div className="h-[97px] w-[97px]">
            <img
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="img"
              className="h-full rounded-full object-cover"
            />
          </div>
          <div className="space-y-4">
            <div className="mt-[20px] space-y-1">
              <h3 className="font-merri text-lg font-black text-[#151b31]">
                Lelah Nichols
              </h3>
              <h4 className="font-popi text-sm text-[#151b31]">Troy, MI</h4>
            </div>
            <div className="space-x-1">
              <span className="inline-block rounded-[10px] border border-[#bfc7e5] bg-white px-2 py-0.5 font-popi text-xs text-[#516ed4]">
                clothes
              </span>
              <span className="inline-block rounded-[10px] border border-[#bfc7e5] bg-white px-2 py-0.5 font-popi text-xs text-[#516ed4]">
                stem
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserList;
