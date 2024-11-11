import type { TabsProps } from "antd"
import { FC } from "react"
import Lesson from "./components/Lesson"
import Toturials from "./components/Toturial"
import Tips from "./components/Tips"

interface TestProps {}

export const items: (
  category_id: string,
  type_category: string,
) => TabsProps["items"] = (category_id: string, type_category: string) => [
  {
    key: "1",
    label: "Bài học",
    children: (
      <Lesson category_id={category_id} type_category={type_category} />
    ),
  },

  {
    key: "2",
    label: "Mẹo",
    children: <Tips category_id={category_id} />,
  },
  {
    key: "3",
    label: "Hướng dẫn",
    children: <Toturials category_id={category_id} />,
  },
]
