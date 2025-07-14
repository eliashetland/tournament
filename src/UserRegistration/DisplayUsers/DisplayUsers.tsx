import type { IUser } from "../useUser";
import styles from "./DisplayUsers.module.css";

interface IDisplayUsersProps {
  users: IUser[];
}
export const DisplayUsers = (props: IDisplayUsersProps) => {
  return (
    <div className={styles.displayUsers}>
      <h2>Registered Users: [{props.users.length}]</h2>
      <section className={styles.scrollableContainer}>
        <table className={styles.userTable}>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Ranking</th>
            </tr>
          </thead>
          <tbody>
            {props.users.length === 0 && (
              <tr>
                <td colSpan={3}>No users registered yet.</td>
              </tr>
            )}
            {props.users
              .sort((userA: IUser, userB: IUser) => {
                let diff = userB.ranking - userA.ranking;
                if (diff !== 0) return diff;

                diff =
                  userA.tournamentsPlayed.length -
                  userB.tournamentsPlayed.length;
                return diff;
              })
              .map((user: IUser) => (
                <tr key={user.id}>
                  <td>{user.firstName}</td>
                  <td>{user.lastName}</td>
                  <td className={styles.ranking}>{user.ranking}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </section>
    </div>
  );
};
