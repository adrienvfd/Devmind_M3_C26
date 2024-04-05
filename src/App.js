import './App.css';
import React from "react";
import Badge from "./components/Badge.jsx";

const badges = [
  {
    firstName: "Johhny",
    lastName: "Depp",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIMJf32XCdIMPR005aLZbkk5TldBubjW2CfA&usqp=CAU",
    description: "Famous actor",
    hobbies: ["Acting"],
    birthday: "01/01/2003",
  },
  {
    firstName: "Tony",
    lastName: "Hawks",
    img: "https://thumbs.dreamstime.com/b/default-avatar-photo-placeholder-profile-icon-eps-file-easy-to-edit-default-avatar-photo-placeholder-profile-icon-124557887.jpg",
    description: "Famous Skater",
    hobbies: ["Skateboard", "Curling"],
    birthday: "01/01/2002",
  },
  {
    firstName: "Adrien",
    lastName: "Cordier",
    img: "https://thumbs.dreamstime.com/b/default-avatar-photo-placeholder-profile-icon-eps-file-easy-to-edit-default-avatar-photo-placeholder-profile-icon-124557887.jpg",
    description: "Famous software developer",
    hobbies: ["Java", "React"],
    birthday: "01/01/2001",
  }
];

const App = () => {
  return (
    <div id="badges-container">
      {badges.map((badge) => (
        <Badge
          key={badge.firstName}
          firstName={badge.firstName}
          lastName={badge.lastName}
          avatarImage={badge.img}
          description={badge.description}
          hobbies={badge.hobbies}
        />
      ))}
    </div>
  );
};

export default App;