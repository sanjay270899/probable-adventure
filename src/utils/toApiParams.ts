/**
 * Returns the filters in a string format to be used in url
 * @param options Object of the filters
 * @returns a string of format filter[key]=val&filter[key2]=val2
 */
export const toApiFilterParams = (params: Record<string, string>): string => {
  return Object.keys(params)
    .map((key) => `filter[${key}]=${params[key]}`)
    .join('&')
}
