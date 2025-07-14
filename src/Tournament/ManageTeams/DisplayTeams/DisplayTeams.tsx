import { Trash2 } from "lucide-react";
import type { ITeam } from "../../../NewTournament/models/ITeam";
import styles from "./DisplayTeams.module.css";

interface IDisplayTeamsProps {
  teams: ITeam[];

  remove?: (teamId: string) => void;
}

export const DisplayTeams = (props: IDisplayTeamsProps) => {
  return (
    <div className={styles.displayTeams}>
      <h3>Teams</h3>

      <ul>
        {props.teams.map((team) => (
          <li key={team.id}>
            <div className={styles.teamPlayers}>
              {team.players.map((player) => (
                <span key={player.id}>
                  {player.firstName} {player.lastName}
                </span>
              ))}
            </div>
            {props.remove && (
              <button onClick={() => props.remove!(team.id)}>
                <Trash2 />
              </button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};
