import { aboutUsNav, category } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
    return (
        <section className='footer'>
            {/* Mobile Footer */}
            <div className="footer_mobile">
                <div className='flex flex-col justify-end items-center'>
                    <div className='w-[39px] h-[39px]'>
                        <Image
                            src="assets/icons/hamburger.svg"
                            alt="Home"
                            width={50}
                            height={50}
                            sizes="100vw"
                            style={{
                                width: '100%',
                                height: 'auto',
                            }}
                            className='object-contain'
                        />
                    </div>
                    <p className='text-sm text-[#757575] font-normal'>Home</p>
                </div>
                <div className='flex flex-col justify-end items-center'>
                    <div className='w-[39px] h-[39px]'>
                        <Image
                            src="assets/icons/hamburger.svg"
                            alt="Promotions"
                            width={50}
                            height={50}
                            sizes="100vw"
                            style={{
                                width: '100%',
                                height: 'auto',
                            }}
                            className='object-contain'
                        />
                    </div>
                    <p className='text-sm text-[#757575] font-normal'>Promotions</p>
                </div>
                <div className='flex flex-col justify-end items-center'>
                    <div className='w-[39px] h-[39px]'>
                        <Image
                            src="assets/icons/hamburger.svg"
                            alt="Others"
                            width={50}
                            height={50}
                            sizes="100vw"
                            style={{
                                width: '100%',
                                height: 'auto',
                            }}
                            className='object-contain'
                        />
                    </div>
                    <p className='text-sm text-[#757575]'>Others</p>
                </div>
            </div>

            {/* Desktop Footer */}
            <div className='footer_desktop'>
                <div className='p-7 flex flex-col gap-8'>
                    <Image
                        src={"/assets/images/logo.svg"}
                        alt='logo'
                        width={207}
                        height={207}
                        className='object-contain'
                    />
                    <p className='text-sm font-normal text-[#757575] leading-5'>
                        Jl. Prof. DR. Satrio No.7, RT.3/RW.3, Karet Kuningan,
                        <br />
                        Kecamatan Setiabudi, Kota Jakarta Selatan,
                        <br />
                        Daerah Khusus Ibukota Jakarta 12950
                    </p>
                    <div className='flex gap-7'>
                        <Image
                            src={"/assets/icons/mail.svg"}
                            alt='mail'
                            width={25}
                            height={25}
                            className='footer_icon'
                        />
                        <Image
                            src={"/assets/icons/phone.svg"}
                            alt='phone'
                            width={25}
                            height={25}
                            className='footer_icon'
                        />
                        <Image
                            src={"/assets/icons/instagram.svg"}
                            alt='instagram'
                            width={25}
                            height={25}
                            className='footer_icon'
                        />
                    </div>

                </div>

                <div className='p-7'>
                    <h4 className='font-medium font-[#333333] text-lg leading-6'>Categories</h4>
                    <div className='flex flex-col gap-5 mt-8'>
                        {category.map((item, index) => (
                            <Link
                                key={index}
                                href={item.route}
                                className='text-sm font-normal text-[#757575]'
                            >
                                {item.label}
                            </Link>
                        ))}
                    </div>
                </div>

                <div className='p-7'>
                    <h4 className='font-medium font-[#333333] text-lg leading-6'>About Us</h4>
                    <div className='flex flex-col gap-5 mt-8'>
                        {aboutUsNav.map((item, index) => (
                            <Link
                                key={index}
                                href={`/${item.id}`}
                                className='text-sm font-normal text-[#757575]'
                            >
                                {item.title}
                            </Link>
                        ))}
                    </div>
                </div>

                <div className='p-7 flex flex-col gap-8'>
                    <h4 className='font-medium font-[#333333] text-lg leading-6'>Newsletter</h4>
                    <p className='text-sm font-normal text-[#757575] leading-5'>
                        Get now free 50% discount for all
                        <br />
                        products on your first order
                    </p>
                    <div className='flex items-center'>
                        <input
                            placeholder='Your email address'
                            type="text"
                            className='w-[190px] rounded-l-lg border border-black py-1.5 pl-4'
                        />
                        <button className='bg-[#8BAC3E] text-white rounded-r-lg text-sm py-[10px] px-2'>SEND</button>
                    </div>

                    <div className='flex flex-col gap-2.5'>
                        <div className='flex items-center gap-1'>
                            <Image
                                src={"/assets/icons/mail.svg"}
                                alt='mail'
                                width={25}
                                height={25}
                                className='object-contain'
                            />
                            <p className='text-sm font-normal leading-5'>elemesid@gmail.com</p>
                        </div>
                        <div className='flex items-center gap-1'>
                            <Image
                                src={"/assets/icons/phone.svg"}
                                alt='phone'
                                width={25}
                                height={25}
                                className='object-contain'
                            />
                            <p className='text-sm font-normal leading-5'>0888 1111 2222</p>
                        </div>
                    </div>
                </div>
            </div>

            <p className='footer_copyright'>© 2021 Elemes id. All rights reserved</p>
        </section>
    )
}

export default Footer