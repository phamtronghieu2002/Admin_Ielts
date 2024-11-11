import { FC } from "react"

interface IntroductionProps {}

const Introduction: FC<IntroductionProps> = () => {
  return (
    <div className="h-full flex justify-center items-center">
      <h1 className="text-[20px]">
        Chào mừng đến với trang quản lý app học tiếng anh Ielts
      </h1>
    </div>
  )
}

export default Introduction
