import React, { useState } from "react";
import UserDetailsForm from "./UserDetailsForm.jsx";
import { useSelector } from "react-redux";
import { useUpdateUserMutation } from "../../store/user/user.api.jsx";
import ProfileImage from "./ProfileImage.jsx";
import { selectUserFromState } from "../../store/user/user.selector.jsx";

export default function ProfilePage() {
  const [editing, setEditing] = useState(false);
  const user = useSelector(selectUserFromState);
  const { name, email, age } = user ?? {};
  const [updateUser] = useUpdateUserMutation();

  const handleEditClick = () => {
    setEditing(true);
  };

  const handleCancelClick = () => {
    setEditing(false);
  };

  const handleSaveClick = (values) => {
    setEditing(false);
  };

  return (
    <div className="mx-auto max-w-2xl py-8">
      {editing ? (
        <UserDetailsForm
          onCancelClick={handleCancelClick}
          handleRequest={updateUser}
          user={user}
        />
      ) : (
        <>
          <ProfileImage user={user} />
          <div className="mb-4">
            <h1 className="text-3xl font-semibold mb-2">Profile</h1>
            <p className="text-gray-600">View and edit your profile details</p>
          </div>
          <div className="border-t border-gray-200 pt-4">
            <div className="flex mb-4">
              <div className="w-1/3 font-medium">Name</div>
              <div className="w-2/3">{name}</div>
            </div>
            <div className="flex mb-4">
              <div className="w-1/3 font-medium">Email</div>
              <div className="w-2/3">{email}</div>
            </div>
            <div className="flex mb-4">
              <div className="w-1/3 font-medium">Age</div>
              <div className="w-2/3">{age}</div>
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
}
