type InputFieldProps = {
  id: string;
  label: string;
  type: string;
  placeholder: string;
};

enum InputType {
  TEXT = "text",
  TEXTAREA = "textarea",
}

const InputField: React.FC<InputFieldProps> = ({
  id,
  label,
  type,
  placeholder,
}: InputFieldProps): React.ReactElement => {
  return (
    <div className="space-y-1">
      <label
        className="font-popi text-sm font-semibold text-slate-900"
        htmlFor={id}
      >
        {label}
      </label>

      {type === InputType.TEXT && (
        <input
          id={id}
          type="text"
          placeholder={placeholder}
          className="w-full rounded-[6px] border-2 p-4 font-popi text-slate-900"
        />
      )}

      {type === InputType.TEXTAREA && (
        <textarea
          id={id}
          rows={2}
          className="h-fit w-full rounded-md border-2 border-indigo-50 p-4 font-popi font-medium text-slate-900"
          placeholder={placeholder}
        ></textarea>
      )}
    </div>
  );
};

export default InputField;
