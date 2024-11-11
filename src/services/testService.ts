import axios from "./axiosInstance"

// lấy danh sách test theo id
export const getTestById = async (test_id: any) => {
  return axios.get(`/test/${test_id}`)
}

export const createTest = async (data: any) => {
  return axios.post("/test", data)
}

export const addQuestionToTest = async (
  test_id: string,
  question_id: string,
) => {
  return axios.post(`/test/addQuestion/${test_id}`, {
    question: question_id,
  })
}

export const updateTest = async (data: any) => {
  return axios.put(`/test/${data?.id}`, data)
}

export const deleteTest = async (id: string) => {
  return axios.delete(`/test/${id}`)
}
export const addTestToLesson = async (lesson_id: string, test_id: string) => {
  return axios.post(`/lesson/addTest/${lesson_id}`, {
    test: test_id,
  })
}
