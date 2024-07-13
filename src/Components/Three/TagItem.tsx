import React from "react";

const TagItem: React.FC<{ text: string }> = ({ text }): React.ReactElement => {
  return (
    <div className="inline-block cursor-pointer rounded-lg bg-white p-2.5 font-popi font-medium text-slate-900">
      {text}
    </div>
  );
};

export default TagItem;
