import { GameEngine } from "../game-engine";
import { connect } from "react-redux";

const mapStateToPropsGameEnginePlayer = (store: any) => {
    return {
        game: store.game,
    }
};

export default connect(mapStateToPropsGameEnginePlayer)(GameEngine);