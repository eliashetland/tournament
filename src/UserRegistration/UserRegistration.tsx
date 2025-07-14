import { nanoid } from "nanoid";
import { DisplayUsers } from "./DisplayUsers/DisplayUsers";
import { useUsers } from "./useUser";
import styles from "./UserRegistration.module.css";
import { useState } from "react";

export const UserRegistration = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const { users, addUser } = useUsers();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    if (!firstName || !lastName) return;

    addUser({
      id: nanoid(5),
      firstName: firstName,
      lastName: lastName,
      ranking: 0,
      tournamentsPlayed: [],
    });
    setFirstName("");
    setLastName("");
    form.reset();
  };

  return (
    <div>
      <h2>User Registration</h2>
      <form onSubmit={handleSubmit} className={styles.registrationForm}>
        <div className={styles.firstName}>
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </div>

        <div className={styles.lastName}>
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </div>

        <button type="submit" disabled={!firstName || !lastName}>
          Register
        </button>
      </form>

      <DisplayUsers users={users} />
    </div>
  );
};
