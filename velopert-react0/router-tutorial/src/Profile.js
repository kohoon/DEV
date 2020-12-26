import React from "react";

const profileData = {
    velopert: {
        name: "고훈",
        desc: "FE engineer"
    },
    homer: {
        name: "강윤구",
        desc: "BE engineer"
    }
};

const Profile = ({ match }) => {
    const { username } = match.params;
    const profile = profileData[username];

    if (!profile) {
        return <div>존재하지 않는 사용자입니다.</div>;
    }

    return (
        <div>
            <h3>
                {username} ({profile.name})
            </h3>
            {profile.desc}
        </div>
    );
};

export default Profile;
