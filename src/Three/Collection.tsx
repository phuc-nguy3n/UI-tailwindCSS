import TagItem from "../Components/Three/TagItem";
import CardItem, { CardItemProps } from "../Components/Three/CardItem";

const tagList: string[] = [
  "Profile",
  "New York",
  "Relaxing",
  "Person",
  "Fashion",
];

const carList: CardItemProps[] = [
  {
    imgs: [
      {
        id: "1",
        src: "https://images.unsplash.com/photo-1544957992-20514f595d6f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        id: "2",
        src: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        id: "3",
        src: "https://images.unsplash.com/photo-1538329972958-465d6d2144ed?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        id: "4",
        src: "https://images.unsplash.com/photo-1538330627166-33d1908c210d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
    ],
    tagName: "People",
    photoQuantity: 144,
  },

  {
    imgs: [
      {
        id: "1",
        src: "https://images.unsplash.com/photo-1519092503391-16a955fda811?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        id: "2",
        src: "https://images.unsplash.com/photo-1525498128493-380d1990a112?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        id: "3",
        src: "https://images.unsplash.com/photo-1527903789995-dc8ad2ad6de0?q=80&w=2020&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        id: "4",
        src: "https://images.unsplash.com/photo-1517416451146-496a3e48ab6b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
    ],
    tagName: "Nature",
    photoQuantity: 1000,
  },

  {
    imgs: [
      {
        id: "1",
        src: "https://bvhttdl.mediacdn.vn/2020/10/27/5-15875454604011998230042-16036836450041268704454-1603763865239-1603763866080171610522.jpg",
      },
      {
        id: "2",
        src: "https://cafebiz.cafebizcdn.vn/zoom/700_438/162123310254002176/2021/9/2/photo1630582485475-1630582485646648525402.jpg",
      },
      {
        id: "3",
        src: "https://images.unsplash.com/photo-1641893588018-b958a5845cab?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        id: "4",
        src: "https://images.unsplash.com/photo-1541873676-a18131494184?q=80&w=1918&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
    ],
    tagName: "History",
    photoQuantity: 431,
  },
];

const Collection: React.FC = (): JSX.Element => {
  return (
    <div className="rounded-[26px] bg-gray-100 p-6 lg:p-10">
      <h2 className="font-merri text-[28px] font-bold text-slate-900 sm:text-[32px]">
        Popular Collections
      </h2>

      <div className="mt-6 flex flex-wrap gap-2">
        {tagList.map(
          (tag: string): React.ReactElement => (
            <TagItem text={tag} />
          ),
        )}
      </div>

      <div className="mt-12 grid grid-cols-1 gap-6 sm:mt-14 sm:grid-cols-2 sm:gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-3 lg:gap-8">
        {carList.map(
          (item: CardItemProps): React.ReactElement => (
            <CardItem
              imgs={item.imgs}
              tagName={item.tagName}
              photoQuantity={item.photoQuantity}
            />
          ),
        )}
      </div>
    </div>
  );
};

export default Collection;
