export type User = {
  id: number
  email: string
  image_url: string
  name: string
  username: string
  web_active: boolean
  score: null | number
  discord_active: boolean
  github_url: string
  linkedin_url: string
  resume_url: string
  dob: null
  registration_num: null
  college_id: null
  google_id: string
  bot_token: string
  update_count: number
  login_count: number
  discord_id: string
  group_id: null | number
  group_name: null | string
  college_name: null | string
  solved: {}
  total_by_difficulty: {}
  activity: {}
  discord_username: null
  dsa_skill: number
  webd_skill: number
  is_discord_form_filled: boolean
  frontend_activity: {}
  markdown: null | string
}

export type LoginState = {
  isLoggedIn: boolean
  user: null | User
  authorization: null | string
  isLoading: boolean
}
