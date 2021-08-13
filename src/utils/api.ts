import logger from '../utils/logger'

export const API_BASE_URL = import.meta.env.VITE_API_URL
export const CLIENT_ID = import.meta.env.VITE_DISCORD_CLIENT_ID
logger('api', `base url:`, API_BASE_URL)

const discordRedirectUri = window.origin

export const API_ENDPOINTS = {
  DISCORD_LOGIN_REDIRECT: `https://discordapp.com/api/oauth2/authorize?client_id=${CLIENT_ID}&scope=identify%20email&response_type=code&redirect_uri=${discordRedirectUri}`,
  LOGOUT: `api/v1/users/logout`,
  LOGIN: `api/v1/users/login`,
  CURRENT_USER: 'api/v1/users/me',
  USER: `api/v1/users`,
  CONTENTS: `api/v1/contents`,
  SUBMISSIONS: `api/v1/submissions`,
  FRONTEND_SUBMISSIONS: 'api/v1/frontend-submissions',
  REPORT: `api/v1/users/report`,
  LEADERBOARD: `api/v1/users/leaderboard`,
  GROUPS: `api/v1/groups`,
  SCRUMS: `api/v1/scrums`,
  BATCH_LEADER_SHEET: `api/v1/batch-leader-sheet`,
  CONNECT_DISCORD: `/api/v1/users/connect_discord`,
  WEEKLY_TODO: `/api/v1/weekly-todo`,
  ONBOARDING: `/api/v1/users/onboard`,
  REPORT_AN_ISSUE: `api/v1/internal-feedback`,
  ADMIN_PANEL: `api/v1/admin/`
}
