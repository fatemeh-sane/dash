
import { AiFillProject } from "react-icons/ai";
import { GrProjects } from "react-icons/gr";
import { CiUser } from "react-icons/ci";
import { FaUserPlus } from "react-icons/fa";
import ChartOne from "./ChartOne.jsx";
import ChartTwo from "./ChartTwo.jsx";
import { Select } from 'antd';
import { FcComboChart } from "react-icons/fc";
import { IoStatsChart } from "react-icons/io5";
import { PiUsersFill } from "react-icons/pi";
import { BsFillGridFill } from "react-icons/bs";
import { BsPersonCheckFill } from "react-icons/bs";
import { BsPersonXFill } from "react-icons/bs";
import { BsStack } from "react-icons/bs";
import { BsFillPersonLinesFill } from "react-icons/bs";

import { FaPen } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";

import { FaPenToSquare } from "react-icons/fa6";



const Dashboard = () => {
    
    const Option = Select.Option;

    function handleChange(value) {
        console.log(`selected ${value}`);
    }

    function handleBlur() {
        console.log('blur');
    }

    function handleFocus() {
        console.log('focus');
    }
    return (<>
        <div className="container mx-auto px-2 sm:px-4 overflow-visible">

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 relative bg-white font-pinar">

                <div className=" grid-rows-2 shadow rounded-xl"><img src="/images/Top.svg" alt="" />
                    <div className=' bg-red-300'></div>
                    <div className='grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mx-3 sm:mx-6 -mt-7'>

                        <div className=' rounded-xl bg-mainOrange  p-4'>
                            <div className='text-xl text-orange-900  '>۲۰۰,۰۰۰</div>
                            <div className='flex items-center gap-4'>
                                <div className='text-xs text-subOrange'><BsFillGridFill />


                                </div>

                                <div className='text-base	text-subOrange ai'>
                                    تخصیص نشده
                                </div>
                            </div>
                        </div>
                        <div className=' rounded-xl bg-mainBlue  p-4'>
                            <div className='text-xl text-blue-950 '>۲۰۰,۰۰۰</div>
                            <div className='flex items-center gap-4'>
                                <div className='text-base text-subBlue'><FaUserPlus /></div>
                                <div className='text-base	text-subBlue'>تعداد کل تیم ها</div>
                            </div>
                        </div>
                        <div className='  rounded-xl bg-mainPink  p-4'>
                            <div className='text-xl text-pink-900  '>۱۰۰,۰۰۰</div>
                            <div className='flex items-center gap-4'>
                                <div className='text-base text-subPink'><PiUsersFill />

                                </div>
                                <div className='text-base	text-subPink'>تعدادکاربر ها</div>
                            </div>
                        </div>
                        <div className=' rounded-xl bg-mainGreen p-4  '>
                            <div className='text-xl  '>۱۰۰,۰۰۰</div>
                            <div className='flex items-center gap-4'>
                                <div className='text-base'><IoStatsChart />
                                </div>
                                <div className='text-base'> تعداد کل پروژه</div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className='bg-white shadow rounded-xl relative overflow-hidden pb-40 sm:pb-24'>َ
                    <div className="grid gap-4 mt-4 grid-cols-1 sm:grid-cols-2 px-3 sm:px-2">

                        
                        <div className='flex gap-3 items-center'>
                            <div className='bg-mainOrange flex items-center justify-center text-subOrange w-10 h-10 rounded-md flex-shrink-0'>
                                <BsPersonCheckFill className='text-base' />
                            </div>
                            <div className='flex items-start flex-col'>
                                <div className='text-sm font-semibold text-number'>۶۰%</div>
                                <div className='text-sm text-subNumber'>تیم هایی پروژه دارند</div>
                            </div>
                        </div>

                 
                        <div className='flex gap-3 items-center'>
                            <div className='bg-mainBlue flex items-center justify-center text-subBlue1 w-10 h-10 rounded-md flex-shrink-0'>
                                <BsPersonCheckFill className='text-base' />
                            </div>
                            <div className='flex items-start flex-col'>
                                <div className='text-sm font-semibold text-number'>۶۰%</div>
                                <div className='text-sm text-subNumber'>کاربر هایی رزومه دارند</div>
                            </div>
                        </div>

                    
                        <div className='flex gap-3 items-center'>
                            <div className='bg-mainBlue flex items-center justify-center text-subBlue w-10 h-10 rounded-md flex-shrink-0'>
                                <BsPersonXFill className='text-base' />
                            </div>
                            <div className='flex items-start flex-col'>
                                <div className='text-sm font-semibold text-number'>۶۰%</div>
                                <div className='text-sm text-subNumber'>تیم هایی پروژه ندارند</div>
                            </div>
                        </div>

                   
                        <div className='flex gap-3 items-center'>
                            <div className='bg-mainBlue flex items-center justify-center text-subBlue w-10 h-10 rounded-md flex-shrink-0'>
                                <BsPersonXFill className='text-base' />
                            </div>
                            <div className='flex items-start flex-col'>
                                <div className='text-sm font-semibold text-number'>۶۰%</div>
                                <div className='text-sm text-subNumber'>کاربر هایی رزومه ندارند</div>
                            </div>
                        </div>

                   
                        <div className='flex gap-3 items-center'>
                            <div className='bg-mainGreen flex items-center justify-center text-subGreen w-10 h-10 rounded-md flex-shrink-0'>
                                <BsPersonXFill className='text-base' />
                            </div>
                            <div className='flex items-start flex-col'>
                                <div className='text-sm font-semibold text-number'>۶۰%</div>
                                <div className='text-sm text-subNumber'>کاربر هایی پروژه ندارند</div>
                            </div>
                        </div>

                    
                        <div className='flex gap-3 items-center'>
                            <div className='bg-mainPink flex items-center justify-center text-subPink w-10 h-10 rounded-md flex-shrink-0'>
                                <BsPersonCheckFill className='text-base' />
                            </div>
                            <div className='flex items-start flex-col'>
                                <div className='text-sm font-semibold text-number'>۶۰%</div>
                                <div className='text-sm text-subNumber'>کاربر هایی پروژه دارند</div>
                            </div>
                        </div>

                    </div>

                 
                    <img
                        className='absolute bottom-0 left-0 w-full h-20 md:h-auto object-cover'
                        src="/images/Vector 11.svg"
                        alt=""
                        data-aos="fade-up"
                    />
                </div>

                <div className='shadow rounded-xl'>
                    <div className='relative md:absolute md:top-0 md:right-0 mb-2 md:mb-0'>

                        <Select
                            showSearch
                            className="w-full md:w-[385px]"
                            style={{ height: 30 }}

                            placeholder="انتخاب رشته"
                            optionFilterProp="children"
                            onChange={handleChange}
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                            filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                        >
                            <Option value="jack">علوم تجربی</Option>
                            <Option value="lucy">کامپیوتر</Option>
                            <Option value="tom">علوم انسانی</Option>
                        </Select>
                    </div>
                    <div className='m-2'><ChartTwo /></div>


                </div>
                <div className="bg-white shadow rounded-xl">
                    <div className="flex flex-col gap-1 p-3">

                   
                        <div className="flex items-center justify-between py-2 px-3">
                            <div className="flex-shrink-0">
                                <label className="relative inline-flex cursor-pointer items-center">
                                    <input id="switch-1" type="checkbox" className="peer sr-only" />
                                    <label htmlFor="switch-1" className="hidden"></label>
                                    <div className="shadow peer h-6 w-11 rounded-full border bg-colorInactive after:absolute after:left-[2px] after:top-0.5 after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-colorActive peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:ring-green-300"></div>
                                </label>
                            </div>
                            <div className='flex flex-row-reverse items-center gap-2 min-w-0'>
                                <div className='flex-shrink-0 bg-mainPurple flex items-center justify-center text-subPurple w-9 h-9 rounded-md'>
                                    <BsFillPersonLinesFill className='text-xl' />
                                </div>
                                <div className='text-sm text-black truncate'>رزومه</div>
                            </div>
                        </div>

                      
                        <div className="flex items-center justify-between py-2 px-3">
                            <div className="flex-shrink-0">
                                <label className="relative inline-flex cursor-pointer items-center">
                                    <input id="switch-2" type="checkbox" className="peer sr-only" />
                                    <label htmlFor="switch-2" className="hidden"></label>
                                    <div className="shadow peer h-6 w-11 rounded-full border bg-colorInactive after:absolute after:left-[2px] after:top-0.5 after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-colorActive peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:ring-green-300"></div>
                                </label>
                            </div>
                            <div className='flex flex-row-reverse items-center gap-2 min-w-0'>
                                <div className='flex-shrink-0 bg-mainBlue text-subBlue flex items-center justify-center w-9 h-9 rounded-md'>
                                    <BsStack className='text-xl' />
                                </div>
                                <div className='text-sm text-black truncate'>الویت بندی</div>
                            </div>
                        </div>

                        <div className="flex items-center justify-between py-2 px-3">
                            <div className="flex-shrink-0">
                                <label className="relative inline-flex cursor-pointer items-center">
                                    <input id="switch-3" type="checkbox" className="peer sr-only" />
                                    <label htmlFor="switch-3" className="hidden"></label>
                                    <div className="shadow peer h-6 w-11 rounded-full border bg-colorInactive after:absolute after:left-[2px] after:top-0.5 after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-colorActive peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:ring-green-300"></div>
                                </label>
                            </div>
                            <div className='flex flex-row-reverse items-center gap-2 min-w-0'>
                                <div className='flex-shrink-0 bg-mainGreen text-subGreen flex items-center justify-center w-9 h-9 rounded-md'>
                                    <FaUsers className='text-xl' />
                                </div>
                                <div className='text-sm text-black truncate'>تیم سازی</div>
                            </div>
                        </div>

             
                        <div className="flex items-center justify-between py-2 px-3">
                            <div className="flex-shrink-0">
                                <label className="relative inline-flex cursor-pointer items-center">
                                    <input id="switch-4" type="checkbox" className="peer sr-only" />
                                    <label htmlFor="switch-4" className="hidden"></label>
                                    <div className="shadow peer h-6 w-11 rounded-full border bg-colorInactive after:absolute after:left-[2px] after:top-0.5 after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-colorActive peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:ring-green-300"></div>
                                </label>
                            </div>
                            <div className='flex flex-row-reverse items-center gap-2 min-w-0'>
                                <div className='flex-shrink-0 bg-mainPink text-subPink flex items-center justify-center w-9 h-9 rounded-md'>
                                    <FaPen className='text-xl' />
                                </div>
                                <div className='text-sm text-black truncate'>ازمون ها</div>
                            </div>
                        </div>

    
                        <div className="flex items-center justify-between py-2 px-3">
                            <div className="flex-shrink-0">
                                <label className="relative inline-flex cursor-pointer items-center">
                                    <input id="switch-5" type="checkbox" className="peer sr-only" />
                                    <label htmlFor="switch-5" className="hidden"></label>
                                    <div className="shadow peer h-6 w-11 rounded-full border bg-colorInactive after:absolute after:left-[2px] after:top-0.5 after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-colorActive peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:ring-green-300"></div>
                                </label>
                            </div>
                            <div className='flex flex-row-reverse items-center gap-2 min-w-0'>
                                <div className='flex-shrink-0 bg-mainOrange flex items-center justify-center text-subOrange w-9 h-9 rounded-md'>
                                    <FaPen className='text-xl' />
                                </div>
                                <div className='text-sm text-black truncate'>ازمون دلوین</div>
                            </div>
                        </div>

                     

                  
                        <div className="flex items-center justify-between py-2 px-3">
                            <div className="flex-shrink-0">
                                <label className="relative inline-flex cursor-pointer items-center">
                                    <input id="switch-7" type="checkbox" className="peer sr-only" />
                                    <label htmlFor="switch-7" className="hidden"></label>
                                    <div className="shadow peer h-6 w-11 rounded-full border bg-colorInactive after:absolute after:left-[2px] after:top-0.5 after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-colorActive peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:ring-green-300"></div>
                                </label>
                            </div>
                            <div className='flex flex-row-reverse items-center gap-2 min-w-0'>
                                <div className='flex-shrink-0 bg-mainPurple flex items-center justify-center text-subPurple w-9 h-9 rounded-md'>
                                    <FaPen className='text-xl' />
                                </div>
                                <div className='text-sm text-black truncate'>ازمون عمومی</div>
                            </div>
                        </div>

                        <div className="flex items-center justify-between py-2 px-3">
                            <div className="flex-shrink-0">
                                <label className="relative inline-flex cursor-pointer items-center">
                                    <input id="switch-8" type="checkbox" className="peer sr-only" />
                                    <label htmlFor="switch-8" className="hidden"></label>
                                    <div className="shadow peer h-6 w-11 rounded-full border bg-colorInactive after:absolute after:left-[2px] after:top-0.5 after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-colorActive peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:ring-green-300"></div>
                                </label>
                            </div>
                            <div className='flex flex-row-reverse items-center gap-2 min-w-0'>
                                <div className='flex-shrink-0 bg-mainGreen text-subGreen flex items-center justify-center w-9 h-9 rounded-md'>
                                    <IoStatsChart className='text-xl' />
                                </div>
                                <div className='text-sm text-black truncate'>تعداد کل پروژه ها</div>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="lg:col-span-2 shadow rounded-xl">
                    <ChartOne /></div>
            </div>


        </div>

    </>)
}
export default Dashboard

