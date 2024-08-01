import React, { useState } from "react";
import Profile from "src/components/home/profile/profile";
import ProfileEdit from "src/components/home/profile/profileEdit";

const MainProfile: React.FC = () => {
    const [isEditing, setIsEditing] = useState(false);

    const handleEditToggle = () => {
        setIsEditing(!isEditing);
    };

    return (
        <div>
            {isEditing ? (
                <ProfileEdit onCancel={handleEditToggle} />
            ) : (
                <Profile onEdit={handleEditToggle} />
            )}
        </div>
    );
};

export default MainProfile;
