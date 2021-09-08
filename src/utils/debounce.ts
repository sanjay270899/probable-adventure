export default function debounce<T extends (..._params: any[]) => any>(
  func: T,
  timeout: number = 300
) {
  let timer: ReturnType<typeof setTimeout>

  return (...args: Parameters<T>) => {
    clearTimeout(timer)

    timer = setTimeout(() => {
      func(args)
    }, timeout)
  }
}
