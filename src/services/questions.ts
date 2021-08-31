import { QuestionsParams, SubmissionParams } from 'interfaces'
import { useMutation, useQuery } from 'react-query'
import { API_ENDPOINTS, toApiFilterParams } from 'utils'

import axios from 'config/axios'
import { queryClient } from 'config/query'

const fetchQuestionsProgress = async () => {
  const response = await axios.get(API_ENDPOINTS.REPORT)
  return response.data
}

/**
 * Used to fetch progress of questions
 */
export const useQuestionsProgress = () => {
  return useQuery('questions/progress', fetchQuestionsProgress)
}

export const fetchQuestions = async (options: QuestionsParams = {}) => {
  const params = toApiFilterParams({ ...options, data_type: 'question' })
  const response = await axios.get(`${API_ENDPOINTS.CONTENTS}?${params}`)
  return response.data.data
}

/**
 * Used to fetch questions
 */
export const useQuestions = (params?: QuestionsParams) => {
  return useQuery(['questions', params], () => fetchQuestions(params))
}

export const fetchTopics = async (options: { parent_id?: string } = {}) => {
  const params = toApiFilterParams({ ...options, data_type: 'subtopic' })
  const response = await axios.get(`${API_ENDPOINTS.CONTENTS}?${params}`)
  return response.data
}

/**
 * Used to fetch topics
 */
export const useTopics = (params?: QuestionsParams) => {
  return useQuery(['topics', params], () => fetchQuestions(params))
}

export const fetchSubmitQuestion = async (params: SubmissionParams) => {
  const { type, ...attributes } = params
  if (type === 'submissions') {
    await axios.post(API_ENDPOINTS.SUBMISSIONS, {
      data: {
        type: 'submissions',
        attributes
      }
    })
  } else {
    await axios.post(API_ENDPOINTS.FRONTEND_SUBMISSIONS, {
      data: {
        type: 'frontend_submissions',
        attributes
      }
    })
  }
}

/**
 * Used to submit a question, invalidates questions query
 */
export const useSubmissionMutation = () => {
  return useMutation(fetchSubmitQuestion, {
    onSuccess: () => {
      queryClient.invalidateQueries('questions')
      queryClient.invalidateQueries('questions/progress')
    }
  })
}
