import { useState, useEffect } from "react";
import type { ITournament } from "./models/ITournament";

const STORAGE_KEY = "tournaments";

export function useTournaments() {
  const [tournaments, setTournaments] = useState<ITournament[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) setTournaments(JSON.parse(stored));
  }, []);

  const save = (updated: ITournament[]) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    setTournaments(updated);
  };

  const getTournament = (id: string) => {
    return tournaments.find((t) => t.id === id);
  };

  const addTournament = (tournament: ITournament) => {
    const updated = [...tournaments, tournament];
    save(updated);
  };

  const updateTournament = (updatedTournament: ITournament) => {
    const updated = tournaments.map((t) =>
      t.id === updatedTournament.id ? updatedTournament : t
    );
    save(updated);
  };

  const removeTournament = (id: string) => {
    const updated = tournaments.filter((t) => t.id !== id);
    save(updated);
  };

  return {
    tournaments,
    getTournament,
    addTournament,
    updateTournament,
    removeTournament,
  };
}
