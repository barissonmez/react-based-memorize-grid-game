import Game from "./Game"

export default class Container extends React.Component {

  render(){
    return (
      <div>
        <Game rows={5} columns={5} activeCellsCount={6} />
      </div>
    );
  }
}
