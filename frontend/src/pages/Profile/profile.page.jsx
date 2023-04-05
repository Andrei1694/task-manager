import React, { useState } from "react";
import UserDetailsForm from "./user-details.form.jsx";

const Profile = () => {
  const [editing, setEditing] = useState(false);

  const handleEditClick = () => {
    setEditing(true);
  };

  const handleCancelClick = () => {
    setEditing(false);
  };

  const handleSaveClick = (values) => {
    // handle save logic here
    setEditing(false);
  };

  return (
    <div className="mx-auto max-w-2xl py-8">
      {editing ? (
        <UserDetailsForm
          onCancelClick={handleCancelClick}
          onSaveClick={handleSaveClick}
        />
      ) : (
        <>
          <div className="mb-4">
            <h1 className="text-3xl font-semibold mb-2">Profile</h1>
            <p className="text-gray-600">View and edit your profile details</p>
          </div>
          <div className="border-t border-gray-200 pt-4">
            <div className="flex mb-4">
              <div className="w-1/3 font-medium">Name</div>
              <div className="w-2/3">John Doe</div>
            </div>
            <div className="flex mb-4">
              <div className="w-1/3 font-medium">Email</div>
              <div className="w-2/3">johndoe@example.com</div>
            </div>
            <div className="flex mb-4">
              <div className="w-1/3 font-medium">Bio</div>
              <div className="w-2/3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </div>
            </div>
            <div className="flex justify-end">
              <button
                className="bg-gray-200 hover:bg-gray-300 text-gray-800 py-2 px-4 mr-2 rounded"
                onClick={handleEditClick}
              >
                Edit
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Profile;
