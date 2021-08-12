export default function logger(module: string, ...message: any[]) {
  if (!import.meta.env.PROD) {
    console.log(`[${module}] `, ...message)
  }
}
