import React from "react";

const TagItem: React.FC<{ text: string }> = ({ text }): React.ReactElement => {
  return (
    <div className="inline-block cursor-pointer rounded-lg bg-white p-2.5 font-popi font-medium text-slate-900 transition-colors duration-500 ease-in-out hover:bg-slate-300 hover:text-zinc-50">
      {text}
    </div>
  );
};

export default TagItem;
