import { useEffect, useState } from "react";
import {
  useLazyGetMyProfileQuery,
  useUploadAvatarMutation,
} from "../../store/user/user.api";

function ProfileImage({ user }) {
  const [uploadAvatar] = useUploadAvatarMutation();
  const [url, setUrl] = useState(
    `http://localhost:4000/users/${user?._id}/avatar`
  );
  const [imgKey, setImgKey] = useState(0);
  const [avatar, setAvatar] = useState(null);
  const [getUserQuery, { data }] = useLazyGetMyProfileQuery();
  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("avatar", avatar);

    try {
      console.log("uploading");
      const response = await uploadAvatar(formData).unwrap();
      const copyUrl = url;
      setUrl(`${copyUrl}?ceva=${imgKey}`);
      getUserQuery();
      setImgKey((prevKey) => prevKey + 1);
    } catch (error) {
      console.error("Image upload failed:", error);
    }
  };
  useEffect(() => {
    console.log(imgKey);
  }, [imgKey]);
  const handleFileInputChange = (event) => {
    const file = event.target.files[0];
    setAvatar(file);
  };
  return (
    <div className="mb-4" id="upload">
      <img src={url} alt="" key={imgKey} />
      <form encType="multipart/form-data" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="avatar">Avatar Image</label>
          <input
            type="file"
            id="avatar"
            name="avatar"
            className="border p-2"
            onChange={handleFileInputChange}
          />
        </div>

        <button type="submit">Upload</button>
      </form>
    </div>
  );
}

export default ProfileImage;
