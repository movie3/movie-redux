import React from "react";
import Table2 from "../../Main-Component/Table2";
import SideBar from "../SideBar";

// import SideBar from "../SideBar";
// import { UsersData } from "../../../Data/MovieData";
const UsersData = [
  {
    fullName: "Tom Cruise",
    image: "c1.png",
    email: "tomcruise@gmail.com",
    rate: 4.5,
    message:
      "Lorem ipsum dolor sit amet, consecetur adipiscing elseddo eiusmod There are many variations of passages of lorem Ipsum available, but the majority have suffered alteration.",
  },
  {
    fullName: "Emily Blunt",
    image: "c2.png",
    email: "emilyblunt@gmail.com",
    rate: 0.5,
    message:
      "There are many variations of passages of lorem Ipsum available, but the majority have suffered alteration.",
  },
  {
    fullName: "John Snow",
    image: "c3.png",
    email: "johnsnow@gmail.com",
    rate: 2.5,
    message: "The majority have suffered alteration.",
  },
  {
    fullName: "Will Smith",
    image: "c4.png",
    email: "willsmith@gmail.com",
    rate: 5,
    message:
      "Lorem ipsum dolor sit amet, consecetur adipiscing elseddo eiusmod Lorem ipsum dolor sit amet, consecetur adipiscing elseddo eiusmod There are many variations of passages of lorem Ipsum available, but the majority have suffered alteration.",
  },
  {
    fullName: "Minah Lee",
    email: "minahlee@gmail.com",
    image: "c5.png",
    rate: 1.5,
    message:
      "Lorem ipsum dolor sit amet, consecetur adipiscing elseddo eiusmod There are many variations of passages of lorem Ipsum available, but the majority have suffered alteration.",
  },
];
function Users() {
  return (
    <SideBar>
      <div className=" gap-6  ">
        <h2 className="text-xl font-bold">Users</h2>
        <Table2 data={UsersData} users={true} />
      </div>
    </SideBar>
  );
}

export default Users;
