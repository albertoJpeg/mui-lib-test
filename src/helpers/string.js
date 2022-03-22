export const capitalizeWord = (msg) =>
  `${msg.charAt(0).toUpperCase()}${msg.slice(1)}`

export const capitalize = (msg, separator = ' ') => {
  return msg.toLowerCase().split(separator).map(capitalizeWord).join(separator)
}
