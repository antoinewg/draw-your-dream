import type { NextApiRequest, NextApiResponse } from 'next'
import { Prediction } from '../../../types/prediction'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Prediction | { detail: string }>,
) {
  const response = await fetch('https://api.replicate.com/v1/predictions/' + req.query.id, {
    headers: {
      Authorization: `Token ${process.env.REPLICATE_API_TOKEN}`,
      'Content-Type': 'application/json',
    },
  })
  if (response.status !== 200) {
    const error = await response.json()
    res.status(500).json({ detail: error.detail })
  }

  const prediction = await response.json()
  res.status(200).json(prediction)
}
