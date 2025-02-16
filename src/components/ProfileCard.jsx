import React from "react";

const ProfileCard = ({ profile }) => {
  const colors = ["#427AA1", "#064789", "#EBF2FA"];
  return (
    <div className="profile-card">
      <img
        src={profile.image}
        alt={`${profile.name}`}
        className="profile-image"
      />
      <h3 className="profile-name font-color">{profile.name}</h3>
      <div className="profile-schedule">
        {profile.schedule.map((slot, index) => (
          <div key={index} className="schedule-slot">
            <span
              className="days"
              style={{
                backgroundColor:
                  (index === 0 && colors[index]) ||
                  (index === 1 && colors[index]) ||
                  (index === 2 && colors[index]),
                color: index === 2 && colors[1],
              }}
            >
              {slot.days}
            </span>
            {slot.time && <span className="time">{slot.time}</span>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfileCard;
