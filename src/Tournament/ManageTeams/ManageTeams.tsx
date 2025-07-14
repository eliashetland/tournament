import type { ITeam } from "../../NewTournament/models/ITeam";
import styles from "./ManageTeams.module.css";
import { DisplayTeams } from "./DisplayTeams/DisplayTeams";
import { AddTeam } from "./AddTeam/AddTeam";

interface IManageTeamsProps {
  teams: ITeam[];
  add: (team: ITeam) => void;
  remove: (id: string) => void;
}

export const ManageTeams = (props: IManageTeamsProps) => {
  return (
    <div className={styles.manageTeams}>
      <AddTeam teams={props.teams} add={props.add} />
      <DisplayTeams teams={props.teams} remove={props.remove} />
    </div>
  );
};
