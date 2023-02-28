// pages/api/send-post-request.js

import axios from 'axios';

export default async (req, res) => {
  try {
    const response = await axios.post('https://connect.unlimitednow.site', {
      // add any data to send along with the POST request
    });
    console.log(response.data);
    res.status(200).json({ message: 'POST request sent successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error sending POST request' });
  }
};
