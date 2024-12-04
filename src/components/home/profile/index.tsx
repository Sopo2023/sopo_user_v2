import React, { useState } from "react";
import Profile from "src/components/home/profile/profile";
import ProfileEdit from "src/components/home/profile/profileEdit";
import ProfileSetting from "src/components/home/profile/profileSetting";
import Layout from "src/components/common/layout/layout";

const MainProfile: React.FC = () => {
    const [isEditing, setIsEditing] = useState(false);
    const [isSetting, setIsSetting] = useState(false);

    const handleEditToggle = () => {
        setIsEditing(!isEditing);
        setIsSetting(false);
    };

    const handleSettingToggle = () => {
        setIsSetting(!isSetting);
        setIsEditing(false);
    };

    return (
        <Layout>
            {isEditing ? (
                <ProfileEdit onCancel={handleEditToggle} />
            ) : isSetting ? (
                <ProfileSetting onCancel={handleSettingToggle} />
            ) : (
                <Profile onEdit={handleEditToggle} onSetting={handleSettingToggle} />
            )}
        </Layout>
    );
};

export default MainProfile;
