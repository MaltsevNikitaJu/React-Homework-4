import "./App.css";
import UserListDiv from "../components/UserList/userList";
import WindowSize from "../components/WindowSize/windowSize";
import HandleCounter from "../components/Counter/counter";
import CouldownTimer from "../components/Timer/timer";

function App() {

  return (
    <>
      <CouldownTimer></CouldownTimer>
      <HandleCounter></HandleCounter>
      <UserListDiv></UserListDiv>
      <WindowSize></WindowSize>
    </>
  );
}

export default App;
