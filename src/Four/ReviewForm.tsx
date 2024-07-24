import InputField from "../Components/Four/InputField";
import RadioField from "../Components/Four/RadioField";
import StarRating from "../Components/Four/StarRating";
import "./ReviewForm.css";

const ReviewForm: React.FC = (): JSX.Element => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
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
        <StarRating />

        <div className="mt-2 font-popi text-sm text-slate-900">
          Click to rate
        </div>
      </div>

      <InputField
        id="title"
        label="Review title"
        type="text"
        placeholder="Example: Easy to use"
      />

      <div className="space-y-6">
        <h3 className="font-popi font-medium text-slate-900">
          Would you recommend this product to a friend?
        </h3>
        <div className="space-x-6">
          <RadioField id="yes" name="isRecommend" value="yes" label="Yes" />

          <RadioField id="no" name="isRecommend" value="no" label="No" />
        </div>
      </div>

      <InputField
        id="message"
        label="Product review"
        type="textarea"
        placeholder="Example: Since I bought this a month ago, it has been used a lot. What I like best/what is worst about this product is ..."
      />

      <div className="grid grid-cols-2 gap-2">
        <InputField
          id="nickname"
          label="Nickname"
          type="text"
          placeholder="Example: bob27"
        />

        <InputField
          id="email"
          label="Email address (not published)"
          type="text"
          placeholder="Example: your@email.com"
        />
      </div>

      <div>
        <RadioField
          id="termsConditions"
          name="termsConditions"
          value="accept"
          label="I accept the"
          href="#"
        />
      </div>

      <p className="font-popi text-sm font-medium text-slate-900">
        You will be able to receive emails in connection with this review (eg if
        others comment on your review). All emails contain the option to
        unsubscribe. We can use the text and star rating from your review in
        other marketing.
      </p>

      <button
        type="submit"
        className="rounded bg-slate-900 p-4 font-popi font-medium text-white"
      >
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
