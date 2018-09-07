import { GameEngine } from "../game-engine";
import { connect } from "react-redux";

const mapStateToPropsGameEngineLive = (store: any) => {
    return {
        game: store.game,
        user: {
            pictureUrl: 'https://via.placeholder.com/350x150',
            firstName: 'ppp',
            lastName: 'ppp',
            score: 111,
        }
    }
};

export default connect(mapStateToPropsGameEngineLive)(GameEngine);