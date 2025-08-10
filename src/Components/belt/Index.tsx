import { useState, useEffect } from "react"
import { RegisterButton } from "../button/Register"
import { ShareButton } from "../button/Share"
import SARE from "../../assets/images/S.A.R.E. is Cooking 2.svg";

export const Belt = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      // Show when scrolled down from the top
      if (currentScrollY > 100) {
        setIsVisible(true)
      }
      // Hide only when at the top
      else if (currentScrollY <= 100) {
        setIsVisible(false)
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [lastScrollY])

  return (
    <div 
      className={`w-full h-max flex items-center justify-between flex-col md:flex-row gap-4 md:px-16 px-4 py-4 md:py-2 rounded-2xl bg-[#FFFFFF] fixed bottom-0 z-50 transition-transform duration-300 ease-in-out  shadow-2xl ${
        isVisible ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
        <div className="h-max flex justify-between items-center md:px-0 px-4 py-4 gap-4">
            <div className="w-[200px] h-[100px] relative">
                <img src={SARE} alt="S.A.R.E. is Cooking" className="object-contain w-full h-auto absolute top-0 rounded-lg" />
                <img src={SARE} alt="S.A.R.E. is Cooking" className="object-contain w-full h-auto absolute top-0 rounded-lg rotate-[-8deg] shadow-2xl" />
            </div>
            <div className="h-max flex flex-col gap-1">
                <small className="text-[12px] font-normal text-[#4B5563]">Register now for:</small>
                <h1 className="text-[24px] font-medium text-[#1F2937]">How to Git Started</h1>
                <p className="text-[14px] font-normal text-[#4B5563]">A beginners guide on the Easiest Way to Connect Your IDE to GitHub</p>
            </div>
        </div>
        <div className="h-max flex justify-between items-center gap-2">
            <RegisterButton/>
            <ShareButton/>
        </div>
    </div>
  )
}
