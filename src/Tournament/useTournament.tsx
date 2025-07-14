import { useState, useEffect } from "react";
import type { IMatch } from "../NewTournament/models/IMatch";
import type { ITeam } from "../NewTournament/models/ITeam";
import type { ITournament } from "../NewTournament/models/ITournament";
import type { IVolleyResult } from "../NewTournament/models/IVolleyResult";
import { useTournaments } from "../NewTournament/useTournaments";

export function useTournament(id: string) {
  const { getTournament, updateTournament } = useTournaments();
  const [tournament, setTournament] = useState<ITournament | null>(null);

  useEffect(() => {
    if (!id) return;
    const t = getTournament(id);
    if (t) setTournament(t);
  }, [id, getTournament]);

  const save = (updated: ITournament) => {
    updateTournament(updated);
    setTournament(updated);
  };

const addTeam = (newTeam: ITeam) => {
    if (!tournament) return;
    save({ ...tournament, teams: [...tournament.teams, newTeam] });
  };

  const removeTeam = (teamId: string) => {
    if (!tournament) return;
    save({
...tournament,
      teams: tournament.teams.filter((t) => t.id !== teamId),
    });
  };

  const addMatch = (match: IMatch<IVolleyResult>) => {
    if (!tournament) return;
    save({ ...tournament, matches: [...tournament.matches, match] });
  };

  const updateMatchResult = (matchId: string, result: IVolleyResult) => {
    if (!tournament) return;
    save({
      ...tournament,
      matches: tournament.matches.map((m) =>
        m.id === matchId ? { ...m, result } : m
      ),
    });
  };

  return {
    tournament,
    addTeam,
    removeTeam,
    addMatch,
    updateMatchResult,
  };
}
