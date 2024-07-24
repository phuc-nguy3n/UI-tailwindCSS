const UserProfile: React.FC = (): JSX.Element => {
  return (
    <div className="relative">
      <div className="relative z-10 flex w-[562px] gap-4 rounded-[25px] bg-white p-[50px]">
        <img
          className="h-[114px] w-[114px] rounded-full border-8 border-sky-100"
          src="https://scontent.fsgn24-2.fna.fbcdn.net/v/t39.30808-6/333607104_745610830256840_8305920233952491423_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=S1PjhLI7Mf8Q7kNvgGyMh0I&_nc_ht=scontent.fsgn24-2.fna&oh=00_AYBIKd8p2dPtJaphgyaOSs_h9iKTk-Yj2dp_2xHlU4e2pw&oe=669675FC"
          alt="avatar"
        />
        <div className="inline-flex grow flex-col gap-7">
          <div className="pt-[24px]">
            <h1 className="font-merri text-[26px] font-bold text-blue-950">
              Funkie Nguyen
            </h1>
            <h2 className="font-popi text-base font-normal text-blue-950">
              3D Artist
            </h2>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                />
              </svg>

              <span className="inline font-popi text-base font-normal text-blue-950">
                4.7 Rating
              </span>
            </div>

            <div className="flex items-center gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25"
                />
              </svg>

              <span className="inline font-popi text-base font-normal text-blue-950">
                4,447 Reviews
              </span>
            </div>

            <div className="flex items-center gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                />
              </svg>

              <span className="inline font-popi text-base font-normal text-blue-950">
                478 Students
              </span>
            </div>
          </div>
          <div className="description font-popi text-lg font-normal text-blue-950">
            David Grant has been making video games for a living for more than
            14 years as a Designer, Producer, Creative Director, and Executive
            Producer, creating games for console, mobile, PC and Facebook.
          </div>

          <div className="">
            <button className="rounded border-2 border-slate-300 p-2.5 font-popi font-medium text-blue-950">
              Show more
            </button>
          </div>
        </div>
      </div>

      <div className="absolute left-cusTome top-[20px] z-0 h-[599px] w-[511px] translate-x-1/2 rounded-[25px] bg-sky-100"></div>
    </div>
  );
};

export default UserProfile;
