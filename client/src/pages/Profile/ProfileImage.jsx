import { useEffect, useState } from "react";
import {
  useLazyGetMyProfileQuery,
  useUploadAvatarMutation,
} from "../../store/user/user.api";

function ProfileImage({ user }) {
  const [uploadAvatar, { isLoading }] = useUploadAvatarMutation();
  const [url, setUrl] = useState("");
  const [imgKey, setImgKey] = useState(0);
  const [avatar, setAvatar] = useState(null);
  const [getUserQuery, { data }] = useLazyGetMyProfileQuery();
  const baseUrl = `http://localhost:4000/users/${user?._id}/avatar`;

  useEffect(() => {
    user && setUrl(`http://localhost:4000/users/${user?._id}/avatar`);
  }, [user]);
  const handleFileInputChange = (event) => {
    const file = event.target.files[0];
    setAvatar(file);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("avatar", avatar);
    try {
      await uploadAvatar(formData).unwrap();
      setUrl(`${baseUrl}?ceva=${imgKey}`);
      getUserQuery();
      setImgKey((prevKey) => prevKey + 1);
    } catch (error) {
      console.error("Image upload failed:", error);
    }
  };

  return (
    <div className="mb-4" id="upload">
      {!isLoading ? (
        <img
          src={url}
          alt=""
          key={imgKey}
          className="rounded-full object-cover h-20 w-20 sm:h-24 sm:w-24 md:h-32 md:w-32 lg:h-40 lg:w-40"
        />
      ) : (
        <h5>Loading</h5>
      )}
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
