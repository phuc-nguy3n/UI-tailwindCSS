import React from "react";

export type JobProps = {
  bgClass: string;
  icon: React.ReactNode;
  title: string;
};

const ItemJobList: React.FC<JobProps> = ({
  bgClass,
  icon,
  title,
}: JobProps): React.ReactElement => {
  return (
    <div
      className={`item flex cursor-pointer flex-col items-center gap-1 rounded-lg ${bgClass} p-6 hover:shadow-lg`}
    >
      {icon}
      <span>{title}</span>
    </div>
  );
};

export default ItemJobList;
