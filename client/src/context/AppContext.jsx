import { useState, createContext } from "react";
import { useAuth, useClerk, useUser } from "@clerk/clerk-react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const AppContext = createContext();

const AppContextProvider = (props) => {
  const [credit, setCredit] = useState(null);
  const { isSignedIn } = useUser();
  const { openSignIn } = useClerk();
  const [image, setImage] = useState(null);
  const [resultImage, setResultImage] = useState(null);
  const navigate = useNavigate();
  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  const { getToken } = useAuth();

  const loadCreditsData = async () => {
    try {
      const token = await getToken();
      const { data } = await axios.get(
        backendUrl + "/api/user/credits",
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      if (data.success) {
        setCredit(data.credits);
      }

    } catch (error) {
      toast.error(error.message);
    }
  };

const removeBg = async (selectedImage) => {
  try {
    if (!isSignedIn) return openSignIn();
    if (!selectedImage) return toast.error("No image selected");

    // Reset previous result
    setResultImage(null);
    setImage(selectedImage);
    navigate("/result");

    // Fresh token
    const token = await getToken();

    // Only allow File objects from input, never resultImage
    if (!(selectedImage instanceof File)) {
      return toast.error("Please select a new image from your device, not the processed result.");
    }

    const formData = new FormData();
    formData.append("image_file", selectedImage); // must match multer.single('image_file')

    const { data } = await axios.post(
      backendUrl + "/api/image/remove-bg",
      formData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      }
    );

    if (data.success) {
      setResultImage(data.resultImage);
      if (data.creditBalance !== undefined) setCredit(data.creditBalance);
    } else {
      toast.error(data.message);
      if (data.creditBalance !== undefined) setCredit(data.creditBalance);
      if (data.creditBalance === 0) navigate("/buy");
    }

  } catch (error) {
    console.log(error.response?.data || error);
    toast.error("Upload failed. Try again.");
  }
};



  const value = {
    credit,
    setCredit,
    loadCreditsData,
    backendUrl,
    image,
    setImage,
    removeBg,
    resultImage,
    setResultImage,
  };

  return (
    <AppContext.Provider value={value}>
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
