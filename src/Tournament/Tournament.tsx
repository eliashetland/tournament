import { useParams } from "react-router-dom";
import styles from "./Tournament.module.css";
import { useTournament } from "./useTournament";

export const Tournament = () => {
  const uuid = useParams<{ uuid: string }>().uuid;

  const { tournament } = useTournament(uuid || "");

  return (
    <div className={styles.tournament}>
      <h2>Tournaments</h2>
      {tournament ? (
        <div className={styles.tournamentDetails}>
          <h3>{tournament.name}</h3>
          <p>Teams: {tournament.teams.length}</p>
          <p>Matches: {tournament.matches.length}</p>
        </div>
      ) : (
        <p>No tournament found.</p>
      )}
    </div>
  );
};
