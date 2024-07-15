import "./ReviewForm.css";

type Props = {};

const ReviewForm = (props: Props) => {
  const handleSubmit = () => {
    console.log("Handle submit");
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="relative my-[64px] w-[658px] space-y-8 rounded-3xl bg-white p-16"
    >
      <div>
        <h2 className="font-merri text-2xl font-black text-slate-900">
          Overall rating
        </h2>
        <div className="mt-4 flex gap-1">
          <div className="cursor-pointer rounded-md border-2 border-indigo-50 p-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-8 text-gray-400"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
              />
            </svg>
          </div>

          <div className="cursor-pointer rounded-md border-2 border-indigo-50 p-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-8 text-gray-400"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
              />
            </svg>
          </div>

          <div className="cursor-pointer rounded-md border-2 border-indigo-50 p-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-8 text-gray-400"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
              />
            </svg>
          </div>

          <div className="cursor-pointer rounded-md border-2 border-indigo-50 p-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-8 text-gray-400"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
              />
            </svg>
          </div>

          <div className="cursor-pointer rounded-md border-2 border-indigo-50 p-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-8 text-gray-400"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
              />
            </svg>
          </div>
        </div>
        <div className="mt-2 font-popi text-sm text-slate-900">
          Click to rate
        </div>
      </div>

      <div className="space-y-1">
        <label
          className="font-popi text-sm font-semibold text-slate-900"
          htmlFor="title"
        >
          Review title
        </label>
        <input
          id="title"
          type="text"
          placeholder="Example: Easy to use"
          className="w-full rounded-[6px] border-2 p-4 font-popi text-slate-900"
        />
      </div>

      <div className="space-y-6">
        <h3 className="font-popi font-medium text-slate-900">
          Would you recommend this product to a friend?
        </h3>
        <div className="space-x-6">
          <label htmlFor="yes" className="inline-flex items-center gap-2">
            <input
              id="yes"
              type="radio"
              name="isRecommend"
              className="h-7 w-7 cursor-pointer border-2 accent-slate-900"
              checked
            />
            <span className="font-popi font-medium text-slate-900">Yes</span>
          </label>

          <label htmlFor="no" className="inline-flex items-center gap-2">
            <input
              id="no"
              type="radio"
              name="isRecommend"
              className="h-7 w-7 cursor-pointer border-2 accent-slate-900"
            />
            <span className="font-popi font-medium text-slate-900">No</span>
          </label>
        </div>
      </div>

      <div className="space-y-1">
        <label
          htmlFor="message"
          className="font-popi text-sm font-semibold text-slate-900"
        >
          Product review
        </label>
        <textarea
          id="message"
          rows={2}
          className="h-fit w-full rounded-md border-2 border-indigo-50 p-4 font-popi font-medium text-slate-900"
          placeholder="Example: Since I bought this a month ago, it has been used a lot. What I like best/what is worst about this product is ..."
        ></textarea>
      </div>

      <div className="grid grid-cols-2 gap-2">
        <div className="space-y-1">
          <label
            htmlFor="nickname"
            className="font-popi text-sm font-semibold text-slate-900"
          >
            Nickname
          </label>
          <input
            type="text"
            id="nickname"
            placeholder="Example: bob27"
            className="w-full rounded-[6px] border-2 p-4 font-popi text-slate-900"
          />
        </div>
        <div className="space-y-1">
          <label
            htmlFor="email"
            className="font-popi text-sm font-semibold text-slate-900"
          >
            Email address (not published)
          </label>
          <input
            type="email"
            id="email"
            placeholder="Example: your@email.com"
            className="w-full rounded-[6px] border-2 p-4 font-popi text-slate-900"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="termsConditions"
          className="inline-flex items-center gap-2"
        >
          <input
            id="termsConditions"
            type="radio"
            name="termsConditions"
            className="h-7 w-7 cursor-pointer border-2 accent-slate-900"
            value="yes"
          />
          <span className="font-popi font-medium text-slate-900">
            I accept the{" "}
            <a className="underline" href="#">
              terms and conditions
            </a>
          </span>
        </label>
      </div>

      <p className="font-popi text-sm font-medium text-slate-900">
        You will be able to receive emails in connection with this review (eg if
        others comment on your review). All emails contain the option to
        unsubscribe. We can use the text and star rating from your review in
        other marketing.
      </p>

      <button className="rounded bg-slate-900 p-4 font-popi font-medium text-white">
        Submit product review
      </button>

      <div className="custom-my-0 absolute right-[16px] top-[16px] rounded-full bg-violet-50 p-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-8 cursor-pointer opacity-50"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18 18 6M6 6l12 12"
          />
        </svg>
      </div>
    </form>
  );
};

export default ReviewForm;
