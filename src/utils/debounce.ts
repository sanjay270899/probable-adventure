export default function debounce(func: unknown, timeout: number = 300) {
  let timer: ReturnType<typeof setTimeout>

  return (...args: unknown) => {
    clearTimeout(timer)

    timer = setTimeout(() => {
      func(args)
    }, timeout)
  }
}
