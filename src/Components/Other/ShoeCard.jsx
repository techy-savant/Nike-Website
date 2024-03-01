const ShoeCard = ({ imgURL, bigShoeImg, changeBigShoeImage }) => {
  const clickHandler = () => {
    if (bigShoeImg !== imgURL.bigShoe) {
      changeBigShoeImage(imgURL.bigShoe);
    }
  };

  return (
    <div
      className={`border-2 rounded-xl 
    ${
      bigShoeImg === imgURL.bigShoe ? "border-coral-red" : "border-transparent"
    } cursor pointer max-sm:flex-1 min-w-16 min-h-16
    `}
      onClick={clickHandler}
    >
      <div className=" flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-2">
        <img
          src={imgURL.thumbnail}
          alt="shoes"
          width={120}
          height={103}
          className=" object-contain"
        />
      </div>
    </div>
  );
};

export default ShoeCard;
