export type LoginParams = {
  type: 'google'
  code: string
  googleId: string
}

export type QuestionsParams = {
  difficulty?: string
  question_type?: string
  parent_id?: string
}

export type TopicsParams = {
  parent_id?: string
}

export type FrontendSubmissionParams = {
  type: 'frontend_submissions'
  question_unique_id: string
  submission_link: string
}

export type DSASubmissionParams = {
  type: 'submissions'
  question_unique_id: string
  status: string
}

export type SubmissionParams = DSASubmissionParams | FrontendSubmissionParams
