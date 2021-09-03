export default function debounce(func: any, timeout: number = 300) {
  let timer: ReturnType<typeof setTimeout>

  return (...args: any) => {
    clearTimeout(timer)

    timer = setTimeout(() => {
      func(args)
    }, timeout)
  }
}
