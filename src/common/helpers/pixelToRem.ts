export function pixelToRem(pixel: number): string {
  const remValue = pixel / 16
  return `${remValue}rem`
}