import { Button } from "../Button/Button";
import "./UserCard.css";

export function UserCard(): JSX.Element {
  return (
    <div className="user-card">
      <h1>Hi, User Name</h1>
      <p>
        You can now have access to our diary, Lorem ipsum dolor sit amet
        consectetur adipisicing elit.
      </p>
      <Button className="m-0 block-btn">Add new meet</Button>
    </div>
  );
}
