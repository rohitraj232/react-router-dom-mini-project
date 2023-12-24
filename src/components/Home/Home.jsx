import React from 'react'
import { Link } from 'react-router-dom';
import Newsletter from '../Newsletter/Newsletter';

export default function Home() {
    return (
        <div className='flex justify-between w-full h-screen'>
            <div className='w-[40%] ml-24'>
                <h1 className='mt-24 font-medium'>Lorem ipsum dolor</h1>
                <h1 className='text-5xl leading-tight font-bold'>Lorem ipsum dolor sit amet elit Unde fuga consectetur </h1>
                <h1 className='mt-5 text-md font-medium text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit Unde voluptatibus ex deserunt fuga</h1>
                <button
                    type="button"
                    className="mt-10 mr-5 inline-flex items-center rounded-md bg-[#FCA11B] px-3 py-2 text-sm font-semibold text-white hover:bg-black/80"
                    >
                    Explore Now
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="ml-2 h-4 w-4"
                    >
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                </button>
                <button
                    type="button"
                    className="mt-10 mr-5 inline-flex items-center rounded-md bg-[#224068] px-3 py-2 text-sm font-semibold text-white hover:bg-black/80"
                    >
                    Learn For Free
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="ml-2 h-4 w-4"
                    >
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                </button>
            </div>

            <div className='w-[60%] flex justify-center items-center'>
                <img className='mt-[-40px]' src="https://img.freepik.com/premium-vector/programmer-developer-engineer-with-laptop-sitting-office-desk-holding-pen-while-coding-developing-concept-illustration_270158-427.jpg?size=626&ext=jpg&uid=R119023841&ga=GA1.1.1074883898.1697271655&semt=sph" alt="" />
            </div>

            {/* <Newsletter /> */}
        </div>
    );
}

