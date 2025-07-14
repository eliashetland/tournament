import { useParams } from "react-router-dom";
import styles from "./Tournament.module.css";
import { useTournament } from "./useTournament";
import { ManageTeams } from "./ManageTeams/ManageTeams";

export const Tournament = () => {
  const uuid = useParams<{ uuid: string }>().uuid;

  const { tournament, addTeam, removeTeam } = useTournament(uuid || "");

  if (!tournament) {
    return <div className={styles.tournament}>Loading...</div>;
  }

  return (
    <div className={styles.tournament}>
      {tournament ? (
        <div className={styles.tournamentDetails}>
          <h2>{tournament.name}</h2>
          <p>Teams: {tournament.teams.length}</p>
          <p>Matches: {tournament.matches.length}</p>
        </div>
      ) : (
        <p>No tournament found.</p>
      )}
      <ManageTeams add={addTeam} remove={removeTeam} teams={tournament.teams} />
    </div>
  );
};
