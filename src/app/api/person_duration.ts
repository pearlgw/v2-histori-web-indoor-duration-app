// pages/api/person_duration.ts

import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const response = await axios.get('person_duration/');
    res.status(200).json(response.data);
  } catch (error: any) {
    res.status(error.response?.status || 500).json({
      message: 'Failed to fetch data',
      error: error.message,
    });
  }
}
