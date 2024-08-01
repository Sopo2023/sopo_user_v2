import React, { useState } from "react";
import Profile from "src/components/home/profile/profile";
import ProfileEdit from "src/components/home/profile/profileEdit";
import Layout from "src/components/common/layout/layout";

const MainProfile: React.FC = () => {
    const [isEditing, setIsEditing] = useState(false);

    const handleEditToggle = () => {
        setIsEditing(!isEditing);
    };

    return (
        <Layout>
            {isEditing ? (
                <ProfileEdit onCancel={handleEditToggle} />
            ) : (
                <Profile onEdit={handleEditToggle} />
            )}
        </Layout>
    );
};

export default MainProfile;
