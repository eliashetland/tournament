import { nanoid } from "nanoid";
import React, { useState } from "react";
import type { ITeam } from "../../../NewTournament/models/ITeam";
import type { IUser } from "../../../UserRegistration/models/IUser";
import { useUsers } from "../../../UserRegistration/useUser";
import styles from "./AddTeam.module.css";
import { X } from "lucide-react";

interface IAddTeamProps {
  add: (newTeam: ITeam) => void;
  teams: ITeam[];
}

export const AddTeam = (props: IAddTeamProps) => {
  const [teamMembers, setTeamMembers] = useState<IUser[]>([]);
  const { users } = useUsers();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (teamMembers.length > 0) {
      const newTeam: ITeam = {
        id: nanoid(5),
        players: teamMembers,
      };
      props.add(newTeam);
      setTeamMembers([]);
    }
  };
  return (
    <div className={styles.addTeam}>
      <h3>New Team</h3>
      <form className={styles.addTeamForm} onSubmit={handleSubmit}>
        <div className={styles.teamMembers}>
          <label htmlFor="teamMembers">Team players</label>
          <select
            id="teamMembers"
            name="teamMembers"
            onChange={(e) => {
              const selectedUser = users.find(
                (user) => user.id === e.target.value
              );
              if (selectedUser && !teamMembers.includes(selectedUser)) {
                setTeamMembers([...teamMembers, selectedUser]);
              }
              e.target.selectedIndex = 0; // Reset to placeholder
            }}
          >
            <option value="">Add player</option>
            {users
              .filter(
                (user) =>
                  !teamMembers.some((member) => member.id === user.id) &&
                  !props.teams.some((team) =>
                    team.players.some((player) => player.id === user.id)
                  )
              )
              .map((user) => (
                <option key={user.id} value={user.id}>
                  {user.firstName} {user.lastName}
                </option>
              ))}
          </select>
        </div>

        <div className={styles.selectedMembers}>
          <ul>
            {teamMembers.length === 0 && <li>No players selected</li>}
            {teamMembers.map((member) => (
              <li key={member.id}>
                <span>
                  {member.firstName} {member.lastName}
                </span>
                <button
                  type="button"
                    className={styles.removeMember}
                  onClick={() =>
                    setTeamMembers(
                      teamMembers.filter((m) => m.id !== member.id)
                    )
                  }
                >
                  <X />
                </button>
              </li>
            ))}
          </ul>
        </div>

        <button type="submit" disabled={teamMembers.length === 0} className={styles.addButton}>
          Add Team
        </button>
      </form>
    </div>
  );
};
