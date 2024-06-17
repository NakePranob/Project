'use client'
import { useState } from "react";

// Components
import Doritems from "./components/homePage/Doritems";

// Icons
import { VscSettings } from "react-icons/vsc";

function page() {
    const [filter, setFilter] = useState(false);

    return (
        <div className="pb-12">
            <span onClick={()=>setFilter(false)}
                className={`fixed h-screen w-screen left-0 top-0 z-999 bg-black/30 dark:bg-black-50
                ${!filter && "hidden"}`}>
            </span>
            <div className={`w-72 sm:w-[26rem] top-0 left-0 z-999 p-4 bg-base transition-500
            fixed border-e-items h-screen overflow-y-auto
            ${!filter && "-left-72 sm:-left-[26rem]"}`}>
                <div className="text-xl flex-y-center gap-2 mb-6">
                    <VscSettings/> กรองรายการ
                </div>
                <div className="grid grid-cols-2 gap-2 pb-4 border-b-items">
                    <div className='relative col-span-1'>
                        <input type='text' id="lastname" required spellCheck='false' className="input-form py-2 w-full bg-base" />
                        <label htmlFor="lastname" className='label-form transition-150'>ราคาต่ำสุด</label>
                    </div>
                    <div className='relative col-span-1'>
                        <input type='text' id="lastname" required spellCheck='false' className="input-form py-2 w-full bg-base" />
                        <label htmlFor="lastname" className='label-form transition-150'>ราคาสูงสุด</label>
                    </div>
                </div>
                <div className="flex flex-col sm:flex-row">
                <div className="pt-4 flex flex-col gap-2 border-b-items sm:border-0 pb-4">
                    <div className="checkbox-wrapper-1">
                        <input id="example-1" className="substituted" type="checkbox" aria-hidden="true" />
                        <label htmlFor="example-1">ที่พักชาย</label>
                    </div>
                    <div className="checkbox-wrapper-1">
                        <input id="example-2" className="substituted" type="checkbox" aria-hidden="true" />
                        <label htmlFor="example-2">ที่พักหญิง</label>
                    </div>
                    <div className="checkbox-wrapper-1">
                        <input id="example-3" className="substituted" type="checkbox" aria-hidden="true" />
                        <label htmlFor="example-3">วายฟาย</label>
                    </div>
                    <div className="checkbox-wrapper-1">
                        <input id="example-4" className="substituted" type="checkbox" aria-hidden="true" />
                        <label htmlFor="example-4">ลานจอดรถยนต์</label>
                    </div>
                    <div className="checkbox-wrapper-1">
                        <input id="example-5" className="substituted" type="checkbox" aria-hidden="true" />
                        <label htmlFor="example-5">ลานจอดรถมอเตอร์ไซค์</label> 
                    </div>
                    <div className="checkbox-wrapper-1">
                        <input id="example-6" className="substituted" type="checkbox" aria-hidden="true" />
                        <label htmlFor="example-6">ลิฟท์</label>
                    </div>
                    <div className="checkbox-wrapper-1">
                        <input id="example-7" className="substituted" type="checkbox" aria-hidden="true" />
                        <label htmlFor="example-7">ประตูนิรภัย</label>
                    </div>
                    <div className="checkbox-wrapper-1">
                        <input id="example-8" className="substituted" type="checkbox" aria-hidden="true" />
                        <label htmlFor="example-8">ระบบลายนิ้วมือ</label>
                    </div>
                    <div className="checkbox-wrapper-1">
                        <input id="example-9" className="substituted" type="checkbox" aria-hidden="true" />
                        <label htmlFor="example-9">ระบบ keycard </label>
                    </div>
                    <div className="checkbox-wrapper-1">
                        <input id="example-10" className="substituted" type="checkbox" aria-hidden="true" />
                        <label htmlFor="example-10">เลี้ยงสัตว์ได้</label>
                    </div>
                    <div className="checkbox-wrapper-1">
                        <input id="example-11" className="substituted" type="checkbox" aria-hidden="true" />
                        <label htmlFor="example-11">ฟิตเนส</label>
                    </div>
                    <div className="checkbox-wrapper-1">
                        <input id="example-12" className="substituted" type="checkbox" aria-hidden="true" />
                        <label htmlFor="example-12">กล้องวงจรปิด</label>
                    </div>
                    <div className="checkbox-wrapper-1">
                        <input id="example-13" className="substituted" type="checkbox" aria-hidden="true" />
                        <label htmlFor="example-13">เจ้าหน้าที่รักษาความปลอดภัย</label>
                    </div>
                    <div className="checkbox-wrapper-1">
                        <input id="example-14" className="substituted" type="checkbox" aria-hidden="true" />
                        <label htmlFor="example-14">ที่สูบบุหรี่</label>
                    </div>
                    <div className="checkbox-wrapper-1">
                        <input id="example-15" className="substituted" type="checkbox" aria-hidden="true" />
                        <label htmlFor="example-15">ร้านอาหาร</label>
                    </div>
                    <div className="checkbox-wrapper-1">
                        <input id="example-16" className="substituted" type="checkbox" aria-hidden="true" />
                        <label htmlFor="example-16">ร้านสะดวกซื้อ</label> 
                    </div>
                    <div className="checkbox-wrapper-1">
                        <input id="example-17" className="substituted" type="checkbox" aria-hidden="true" />
                        <label htmlFor="example-17">เครื่องซักผ้า</label>
                    </div>
                </div>
                <div className="pt-4 flex flex-col gap-2">
                    <div className="checkbox-wrapper-1">
                        <input id="example-18" className="substituted" type="checkbox" aria-hidden="true" />
                        <label htmlFor="example-18">พัดลม</label>
                    </div>
                    <div className="checkbox-wrapper-1">
                        <input id="example-19" className="substituted" type="checkbox" aria-hidden="true" />
                        <label htmlFor="example-19">เครื่องปรับอากาศ</label>
                    </div>
                    <div className="checkbox-wrapper-1">
                        <input id="example-20" className="substituted" type="checkbox" aria-hidden="true" />
                        <label htmlFor="example-20">ตู้เสื้อผ้า</label>
                    </div>
                    <div className="checkbox-wrapper-1">
                        <input id="example-21" className="substituted" type="checkbox" aria-hidden="true" />
                        <label htmlFor="example-21">เครื่องทำน้ำอุ่น</label>
                    </div>
                    <div className="checkbox-wrapper-1">
                        <input id="example-22" className="substituted" type="checkbox" aria-hidden="true" />
                        <label htmlFor="example-22">โต๊ะทำงาน</label>
                    </div>
                    <div className="checkbox-wrapper-1">
                        <input id="example-23" className="substituted" type="checkbox" aria-hidden="true" />
                        <label htmlFor="example-23">โต๊ะเครื่องแป้ง</label>
                    </div>
                    <div className="checkbox-wrapper-1">
                        <input id="example-24" className="substituted" type="checkbox" aria-hidden="true" />
                        <label htmlFor="example-24">ตู้เย็น</label>
                    </div>
                    <div className="checkbox-wrapper-1">
                        <input id="example-25" className="substituted" type="checkbox" aria-hidden="true" />
                        <label htmlFor="example-25">เตียงนอน</label>
                    </div>
                    <div className="checkbox-wrapper-1">
                        <input id="example-26" className="substituted" type="checkbox" aria-hidden="true" />
                        <label htmlFor="example-26">โทรทัศน์</label>
                    </div>
                </div>
                </div>
            </div>
            <div className="flex justify-end">
                <button onClick={()=>setFilter(true)} 
                className="flex-y-center gap-2 rounded-full px-4 py-2 transition-300
                border border-indigo-500 hover:border-indigo-400 hover:bg-indigo-400 
                hover:text-white">
                    กรองรายการ: <VscSettings/>
                </button>
            </div>
            <div className=" grid grid-cols-12 gap-4 pt-4">
                <Doritems/><Doritems/><Doritems/><Doritems/><Doritems/><Doritems/>
                <Doritems/><Doritems/><Doritems/><Doritems/><Doritems/><Doritems/>
            </div>
        </div>
    )
}

export default page