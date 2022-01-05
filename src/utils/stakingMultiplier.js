export function stakingMultiplier(base, multiplier) {
  return Math.round(base * multiplier * 100) / 100
}
