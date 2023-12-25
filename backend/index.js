const express = require("express");
const cors = require("cors"); //to call the server from any other origin.
const axios = require("axios");
const PORT = process.env.PORT || 5173

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;
  try {
    const r = await axios.put(
      "https://api.chatengine.io/users/",
      { username: username, secret: username, first_name: username },
      { headers: { "private-key": "bfa0a9a3-8d3e-47b6-b21e-fdb16d854a71" } }
    );
    return res.status(r.status).json(r.data);
  } catch (e) {
    return res.status(e.response.status).json(e.response.data);
  }
});

app.listen(PORT,()=>{
    console.log(`Server is running at port: ${PORT}`);
});
