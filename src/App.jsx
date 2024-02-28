import Player from "./components/Player";

function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player initalName="Player 1" symbol="X"/>
          <Player initalNameame="Player 2" symbol="0"/>

        </ol>
        PLAYERS GAME BOARD
      </div>
    </main>
  );
}

export default App;
