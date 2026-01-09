import fs from 'fs'
import axios from 'axios';
import FormData from 'form-data';
import userModel from '../models/userModel.js';



//remove bg from image 

const removeBgImage = async (req, res) => {
  try {
    const clerkId = req.clerkId;
    const user = await userModel.findOne({ clerkId });
    if (!user) {
      return res.json({ success: false, message: "User not found" });
    }
    
    if (user.creditBalance <= 0) {
      return res.json({ 
        success: false, 
        message: "Insufficient credits, please recharge" 
      });
    }

    const imagePath = req.file.path;

    // reading image file 
    const imageFile = fs.createReadStream(imagePath);
    const formData = new FormData();
    formData.append('image_file', imageFile);
    
    const { data } = await axios.post(
      'https://clipdrop-api.co/remove-background/v1', 
      formData, 
      {
        headers: {
          'x-api-key': process.env.CLIPDROP_API,
        },
        responseType: 'arraybuffer'
      }
    );
    
    const base64Image = Buffer.from(data, 'binary').toString('base64');
    const resultImage = `data:${req.file.mimetype};base64,${base64Image}`;
    
    // deduct user credit by 1
    await userModel.updateOne(
      { clerkId }, 
      { $inc: { creditBalance: -1 } }
    );

    // Clean up the uploaded file
    fs.unlink(imagePath, (err) => {
      if (err) console.error('Error deleting file:', err);
    });

    res.json({
      success: true,
      resultImage: resultImage,
      creditBalance: user.creditBalance - 1,
    });

  } catch (error) {
    console.log(error.message);
    
    // Clean up file even on error
    if (req.file && req.file.path) {
      fs.unlink(req.file.path, (err) => {
        if (err) console.error('Error deleting file on error:', err);
      });
    }
    
    res.json({ 
      success: false, 
      message: error.message 
    });
  }
};
export {removeBgImage}