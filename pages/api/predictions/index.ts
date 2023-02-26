import type { NextApiRequest, NextApiResponse } from 'next'
import { Prediction } from '../../../types/prediction'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Prediction | { detail: string }>,
) {
  const response = await fetch('https://api.replicate.com/v1/predictions', {
    method: 'POST',
    headers: {
      Authorization: `Token ${process.env.REPLICATE_API_TOKEN}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      // Pinned to a specific version of Stable Diffusion
      // See https://replicate.com/stability-ai/stable-diffusion/versions
      version: '6359a0cab3ca6e4d3320c33d79096161208e9024d174b2311e5a21b6c7e1131c',
      input: { prompt: req.body.prompt },
    }),
  })

  if (response.status !== 201) {
    const error = await response.json()
    res.status(500).json({ detail: error.detail })
  }

  const prediction = await response.json()
  res.status(201).json(prediction)
}
