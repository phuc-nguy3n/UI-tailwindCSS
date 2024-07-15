type RadioFieldProps = {
  id: string;
  name: string;
  value: string;
  label: string;
  href?: string;
};

const RadioField: React.FC<RadioFieldProps> = ({
  id,
  name,
  value,

  label,
  href,
}: RadioFieldProps): React.ReactElement => {
  return (
    <label htmlFor={id} className="inline-flex items-center gap-2">
      <input
        id={id}
        type="radio"
        name={name}
        value={value}
        className="h-7 w-7 cursor-pointer border-2 accent-slate-900"
      />
      <span className="font-popi font-medium text-slate-900">
        {label}{" "}
        {href ? (
          <a className="underline" href={href}>
            terms and conditions
          </a>
        ) : (
          ""
        )}
      </span>
    </label>
  );
};

export default RadioField;
