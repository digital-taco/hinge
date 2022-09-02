export default function cx(...classNames: Array<string | false | void | null | 0>): string {
  const filtered = classNames.filter(
    (className) => className && typeof className === 'string'
  ) as string[]
  return filtered.join(' ')
}
