import { Fragment } from 'react'

import { stakingMultiplier } from '@/utils/stakingMultiplier'

export function TrypMultiplier({ tokens, multiplier }) {
  return (
    <tbody>
      {tokens.map((token) => (
        <tr key={token.name}>
          <td>{token.name}</td>
          {multiplier.map((value, index) => (
            <td key={index}>{stakingMultiplier(token.tryp, value)}</td>
          ))}
        </tr>
      ))}
    </tbody>
  )
}
