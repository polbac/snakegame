import { GameEngine } from "../game-engine";
import { connect } from "react-redux";

const mapStateToPropsGameEnginePlayer = (store: any) => {

    return {
        game: store.game,
        key: 'game',
        user: {
            ...store.authenticate.session,
        }
    }
};

export default connect(mapStateToPropsGameEnginePlayer)(GameEngine);