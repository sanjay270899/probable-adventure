import { User } from 'interfaces'

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

export type LeaderboardResponse = {
  type: 'leaderboard'
  count: number
  id: number
  user: {
    name: string
    rank: number
    score: number
  }
  scoreboard: Array<{ name: string; rank: number; score: number }>
}

export type SubmissionParams = DSASubmissionParams | FrontendSubmissionParams

export type UserUpdateParams = Partial<Omit<User, 'id'>>
