'use client'
import React, { useLayoutEffect, useRef, useState } from 'react'

const Sidekick = () => {
  const [show, setShow] = useState(true)
  const [menu, setMenu] = useState(false)

  const wrapperRef = useRef(null)
  const stripRef = useRef(null)

  const [menuTop, setMenuTop] = useState(0)

  const updateMenuTop = () => {
    if (!wrapperRef.current || !stripRef.current) return

    const wrapperRect = wrapperRef.current.getBoundingClientRect()
    const stripRect = stripRef.current.getBoundingClientRect()

    const offset = 16
    setMenuTop(stripRect.bottom - wrapperRect.top + offset)
  }

  useLayoutEffect(() => {
    updateMenuTop()
    window.addEventListener('resize', updateMenuTop)
    return () => window.removeEventListener('resize', updateMenuTop)
  }, [show])

  const openMenu = () => {
    updateMenuTop()
    setShow(false)
    setMenu(true)
  }

  return (
    <div ref={wrapperRef} className='fixed right-0 bottom-[170px] z-20'>
      {show && (
        <div className='relative cursor-pointer hover:scale-[1.01] transition-all duration-200'>
          <div
            ref={stripRef}
            onClick={openMenu}
            className='hidden sm:flex flex-col justify-center items-center gap-2 rounded-tl-xl rounded-bl-xl sidekick px-3 py-3'
          >
            <div onClick={() => window.open('https://sriyog.com', '_blank')} className='flex flex-col items-center justify-center gap-1'>
              <img src='/icons/whatsapp.svg' alt='' height='26px' width='26px' className='hover:scale-[1.15] transition-all duration-200' />
              <p className='text-[9px] font-bold text-[#888888]'>Whatsapp</p>
            </div>

            <img src='/icons/line.svg' className='h-1 w-[52px]' alt='' />

            <div onClick={() => window.open('https://sriyog.com', '_blank')} className='flex flex-col items-center justify-center gap-1'>
              <img src='/icons/messenger.svg' alt='' height='26px' width='26px' className='hover:scale-[1.15] transition-all duration-200' />
              <p className='text-[9px] font-bold text-[#888888]'>Messenger</p>
            </div>

            <img src='/icons/line.svg' className='h-1 w-[52px]' alt='' />

            <div onClick={() => window.open('https://sriyog.com', '_blank')} className='flex flex-col items-center justify-center gap-1'>
              <img src='/icons/phone.svg' alt='' height='26px' width='26px' className='hover:scale-[1.15] transition-all duration-200' />
              <p className='text-[9px] font-bold text-[#888888]'>Phone</p>
            </div>
          </div>
        </div>
      )}

      {show && (
        <div
          ref={stripRef}
          onClick={openMenu}
          className='flex sm:hidden flex-col justify-center items-center gap-2 rounded-tl-xl rounded-bl-xl sidekick px-5 py-3'
        >
          <div className='flex flex-col items-center justify-center gap-1'>
            <img src='/icons/Frame.svg' alt='' height='40px' width='40px' className='hover:scale-[1.15] transition-all duration-200' />
            <p className='text-[9px] font-bold text-[#888888]'>Support</p>
          </div>
        </div>
      )}

      <div
        style={{ top: `${menuTop}px` }}
        className={`absolute w-[250px] transition-transform duration-300 ${menu ? '-translate-x-[270px]' : 'translate-x-80'}`}
      >
        <button
          onClick={() => {
            setMenu(false)
            setTimeout(() => setShow(true), 200)
          }}
          className='absolute top-2 right-4 bg-[#888888] rounded-full p-1'
        >
          <img src='/icons/cross.svg' className='w-5 h-5' alt='' />
        </button>

        <div className='flex flex-col justify-center items-center sidekick py-4 rounded-xl w-[250px]'>
          <div className='flex items-center gap-3 justify-start'>
            <img src='/icons/info.svg' alt='' className='w-[25px] h-[25px]' />
            <p className='text-[#888888] font-semibold'>Quick Contact</p>
          </div>

          <div className='my-3 bg-[#888888] w-[225px] h-[1.5px]'></div>

          <div onClick={() => window.open('https://sriyog.com', '_blank')} className='flex items-center gap-3'>
            <img src='/icons/phone.svg' alt='' className='cursor-pointer w-[30px] h-[30px] hover:scale-[1.1] transition-all duration-200' />
            <p className='text-[#888888] py-2 font-semibold cursor-pointer'>Hotline Number</p>
          </div>

          <p onClick={() => window.open('https://sriyog.com', '_blank')} className='font-semibold text-[#888888] text-center'>
            +977-01-4548068
          </p>

          <div onClick={() => window.open('https://sriyog.com', '_blank')} className='cursor-pointer flex items-center w-fit justify-center gap-3 p-1 my-2 rounded-md border-[1.5px] border-[#B3ADAD]'>
            <img src='/icons/email2.svg' alt='' className='h-5 w-5' />
            <p className='text-xs text-[#888888] pt-1'>info@thecompanyname.com</p>
          </div>

          <div className='flex items-center justify-center gap-4 py-2'>
            <div onClick={() => window.open('https://sriyog.com', '_blank')} className='flex flex-col justify-center items-center'>
              <img src='/icons/messenger.svg' alt='' className='cursor-pointer w-7 h-7 hover:scale-[1.1] transition-all duration-200' />
              <p className='text-[10px] font-semibold text-[#888888]'>Messenger</p>
            </div>

            <div className='flex items-center w-fit justify-center gap-3 p-1 my-2 rounded-md border-[1.5px] border-[#B3ADAD] cursor-pointer'>
              <img onClick={() => window.open('https://sriyog.com', '_blank')} src='/icons/whatsapp.svg' alt='' className='w-4 h-4' />
              <p onClick={() => window.open('https://sriyog.com', '_blank')} className='text-xs text-[#888888] pt'>
                +977 98520-24-365
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidekick
