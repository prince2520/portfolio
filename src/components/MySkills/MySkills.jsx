import { Icon } from "@iconify/react";
import { mySkills } from "../../data";

import "./MySkills.css";

const MySkills = () => {
  return (
    <div className="flex-center my-skills">
      <h3>MY SKILLS</h3>

      <div className="flex-center my-technologies">
        {mySkills.map((technology) => (
          <div className="flex-center technology">
            <Icon icon={technology.logo} fontSize={"1.25rem"} />
            <p>{technology.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MySkills;
