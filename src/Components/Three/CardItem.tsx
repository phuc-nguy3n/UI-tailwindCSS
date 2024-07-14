type ImgType = {
  id: string;
  src: string;
};

export type CardItemProps = {
  imgs: ImgType[];
  tagName: string;
  photoQuantity: number;
};

const CardItem: React.FC<CardItemProps> = ({
  imgs,
  tagName,
  photoQuantity,
}: CardItemProps): React.ReactElement => {
  const generatePhotoQuantity = (quantity: number): string => {
    if (quantity >= 1000) {
      return `${(quantity / 1000).toFixed(1)}k`;
    }
    return quantity.toString();
  };
  return (
    <div className="w-full rounded-3xl bg-white p-6 transition-shadow duration-500 ease-in-out hover:shadow-lg">
      <img
        className="h-[268px] w-full rounded-3xl object-cover"
        src={imgs[0].src}
        alt={`${tagName}-img-${imgs[0].id}`}
      />
      <div className="mt-4 grid grid-cols-3 gap-4 sm:grid-cols-2 md:grid-cols-3">
        <img
          className="h-[97px] w-full rounded-3xl object-cover"
          src={imgs[1].src}
          alt={`${tagName}-img-${imgs[1].id}`}
        />

        <div className="relative inline-block">
          <img
            className="h-[97px] w-full rounded-3xl object-cover"
            src={imgs[2].src}
            alt={`${tagName}-img-${imgs[2].id}`}
          />

          <div className="absolute inset-0 hidden items-center justify-center rounded-3xl bg-black bg-opacity-50 sm:flex sm:cursor-pointer md:hidden md:cursor-none">
            <p className="text-xl font-bold text-white">. . .</p>
          </div>
        </div>

        <div className="relative inline-block sm:hidden md:inline-block">
          <img
            className="h-[97px] w-full rounded-3xl object-cover"
            src={imgs[3].src}
            alt={`${tagName}-img-${imgs[3].id}`}
          />

          <div className="absolute inset-0 flex cursor-pointer items-center justify-center rounded-3xl bg-black bg-opacity-50">
            <p className="text-xl font-bold text-white">. . .</p>
          </div>
        </div>
      </div>

      <div className="mt-6 flex gap-4">
        <span className="flex-grow font-popi text-2xl font-medium text-slate-900">
          {tagName}
        </span>
        <div className="flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="mr-2 size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
            />
          </svg>
          <span className="font-popi font-medium text-slate-900">
            {generatePhotoQuantity(photoQuantity)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default CardItem;
