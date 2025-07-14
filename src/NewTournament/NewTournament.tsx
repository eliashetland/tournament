import { nanoid } from "nanoid";
import type { ITournament } from "./models/ITournament";
import styles from "./NewTournament.module.css";
import { useTournaments } from "./useTournaments";
import { useNavigate } from "react-router-dom";
export const NewTournament = () => {
  const { addTournament } = useTournaments();
  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const tournamentName = form.tournamentName.value;
    const date = form.date.value;

    if (!tournamentName || !date) return;

    const newTournament: ITournament = {
      id: nanoid(5),
      name: tournamentName,
      date: new Date(date),
      teams: [],
      matches: [],
    };

    addTournament(newTournament);

    form.reset();

    navigate(`/edit/${newTournament.id}`);
  };

  return (
    <div>
      <h2>New Tournament</h2>

      <form className={styles.tournamentForm} onSubmit={handleSubmit}>
        <div>
          <label htmlFor="tournamentName">Tournament Name</label>
          <input
            type="text"
            id="tournamentName"
            name="tournamentName"
            required
          />
        </div>

        <div>
          <label htmlFor="date">Date</label>
          <input type="date" id="date" name="date" required />
        </div>

        <button type="submit">Create Tournament</button>
      </form>
    </div>
  );
};
