import User from "../models/User.js";
import formData from "form-data";
import axios from "axios";

const generateImage = async (req, res) => {
  try {
    const { userId } = req;
    const { prompt } = req.body;
    const user = await User.findById(userId);
    if (!user || !prompt) {
      return res
        .status(404)
        .json({ success: false, message: "User or prompt not found" });
    }
    if (user.credits <= 0) {
      return res.status(400).json({
        success: false,
        message: "You don't have enough credits to generate an image",
      });
    }
    const form = new FormData();
    form.append("prompt", prompt);
    const { data } = await axios.post(
      "https://clipdrop-api.co/text-to-image/v1",
      form,
      {
        headers: {
          "x-api-key": process.env.CLIPDROP_API_KEY,
        },
        responseType: "arraybuffer",
      }
    );
    const imageBuffer = Buffer.from(data, "binary").toString("base64");
    const imageUrl = `data:image/png;base64,${imageBuffer}`;
    await User.findByIdAndUpdate(userId, {
      credits: user.credits - 1,
    });
    return res.status(200).json({
      success: true,
      message: "Image generated successfully",
      credits: user.credits - 1,
      imageUrl,
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

export { generateImage };
