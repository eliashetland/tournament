import { Link } from "react-router-dom";
import type { ITournament } from "../NewTournament/models/ITournament";
import { useTournaments } from "../NewTournament/useTournaments";
import styles from "./StartPage.module.css";
import { ChevronRight } from "lucide-react";

export const StartPage = () => {
  const { tournaments } = useTournaments();

  return (
    <div className={styles.startPage}>
      <h2>Welcome to the Tournament App</h2>
      <p>Manage your tournaments and players easily.</p>
      {tournaments.length > 0 && (
        <div className={styles.tournamentList}>
          <h3>Existing Tournaments</h3>
          <ul>
            {tournaments.map((tournament: ITournament) => (
              <li key={tournament.id}>
                <Link
                  to={`/edit/${tournament.id}`}
                  className={styles.tournamentLink}
                >
                  <span>
                    {tournament.name} - {tournament.id}
                  </span>
                  <ChevronRight />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
