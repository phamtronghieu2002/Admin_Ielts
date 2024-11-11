import axios from "./axiosInstance"

export const createQuestion = async (data: any) => {
  return axios.post("/question", data)
}

export const getQuestionById = async (question_id: any) => {
  return axios.get(`/question/${question_id}`)
}

export const updateQuestionById = async (question_id: any, data: any) => {
  return axios.put(`/question/${question_id}`, data)
}

export const deleteQuestionById = async (
  question_id: string,
  sub_q_id: string,
  lesson_id: string,
) => {
  return axios.delete(
    `/question/?q_id=${question_id}&sub_q_id=${sub_q_id}&lesson_id=${lesson_id}`,
  )
}
