import Link from "next/link";
import Image from "next/image";
import { category } from "../constants";

interface Props {
    label: string;
    icon: string;
    amount: number;
    route: string;
    index: number;
}

const CategoryCard = ({ label, icon, amount, route, index }: Props) => {
    return (
        <div className={`category_card ${index === 0 ? "bg-[#F0FEEB]" : index === 1 ? "bg-[#E6F3F5]" : index === 2 ? "bg-[#EAEEFA]" : index === 3 ? "bg-[#F9EEF3]" : "bg-[#F3F7D9]"}`}>
            <Link href="/" className="flex flex-col justify-center items-center gap-2">
                <div className="w-[47px] h-[52px]">
                    <Image
                        src={icon}
                        alt={label}
                        width={100}
                        height={100}
                        className='object-contain'
                    />
                </div>

                <div className="flex flex-col justify-center items-center">
                    <h6 className="text-[#333333] font-medium">{label}</h6>
                    <p className="text-sm text-[#333333]">{amount} Items</p>
                </div>
            </Link>
        </div>
    )
}

const Category = () => {
    return (
        <section className="category">
            <h1 className="category_headText">
                Browser Our Category
                <br />
                <span className='text-[#8BAC3E]'>Receipt</span>
            </h1>

            <div className="category_cardContainer">
                {category.map((item, index) => (
                    <CategoryCard
                        key={index}
                        index={index}
                        label={item.label}
                        icon={item.icon}
                        amount={item.amount}
                        route={item.route}
                    />
                ))}
            </div>

            {/* Desktop Carousel Button */}
            <div className="flex gap-3 justify-end max-lg:hidden mt-5">
                <div className="flex">
                    <button className="category_button ">
                        <Image
                            src="/assets/icons/prev.svg"
                            alt="prev"
                            width={24}
                            height={24}
                            className="object-contain py-1 px-1 rounded-full bg-white"
                        />
                        PREV
                    </button>
                </div>

                <div className="flex">
                    <button className="category_button">
                        NEXT
                        <Image
                            src="/assets/icons/next.svg"
                            alt="next"
                            width={24}
                            height={24}
                            className="object-contain py-1 px-1 rounded-full bg-white"
                        />
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Category;