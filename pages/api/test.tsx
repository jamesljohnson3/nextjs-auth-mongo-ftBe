// pages/api/send-post-request.js

import axios from 'axios';

export default async (req, res) => {
  try {
    const response = await axios.post('https://n8n-production-3398.up.railway.app/webhook-test/555f5534-2ce2-4045-ac21-5a6962b53a62', {
      // add any data to send along with the POST request
    });
    console.log(response.data);
    res.status(200).json({ message: 'POST request sent successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error sending POST request' });
  }
};
