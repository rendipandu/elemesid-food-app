import Image from "next/image";
import { trending } from "@/constants"
import RatingStars from "./rating";


interface Props {
    imageURL: string;
    label: string;
    category: string;
    rating: number;
    index: number;
};

const TrendingCard = ({ imageURL, label, category, rating, index }: Props) => {
    return (
        <div className={`trending_card ${index === 0 ? "bg-[#E6F3F5]" : index === 1 ? "bg-[#E6F3F5]" : index === 2 ? "bg-[#EAEEFA]" : index === 3 ? "bg-[#F9EEF3]" : index === 4 ? "bg-[#F0FEEB]" : index === 5 ? "bg-[#F3F7D9]" : index === 6 ? "bg-[#F3F7D9]" : "bg-[#EAEEFA]"}`}>
            <div className="flex flex-col gap-4 ml-6 mt-6">
                <div className="w-[118.15px] h-[114.31px] rounded-md">
                    <Image
                        src={imageURL}
                        alt={label}
                        width={118}
                        height={114}
                        sizes="100vw"
                        style={{
                            width: '100%',
                            height: 'auto',
                        }}
                        className='object-contain rounded-md'
                    />
                </div>

                <div className="flex flex-col">
                    <h1 className="trending_cardHeadText">{label}</h1>
                    <p className="trending_cardSubText">{category}</p>
                </div>
            </div >

            <div className="ml-6">
                <RatingStars rating={rating} />
            </div>
        </div >
    )
}

const Trending = () => {
    return (
        <section className="trending">
            <div>
                <h1 className="trending_headText">
                    Browser Our Trending
                    <br />
                    <span className='text-[#8BAC3E]'>Receipt</span>
                </h1>
            </div>

            <div className="trending_cardContainer">
                {trending.map((item, index) => (
                    <TrendingCard
                        key={index}
                        imageURL={item.imageURL}
                        label={item.label}
                        category={item.category}
                        rating={item.rating}
                        index={index}
                    />
                ))}
            </div>
        </section>
    )
}

export default Trending