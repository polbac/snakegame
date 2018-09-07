import { GameEngine } from "../game-engine";
import { connect } from "react-redux";

const mapStateToPropsGameEngineLive = (store: any) => store.live;

export default connect(mapStateToPropsGameEngineLive)(GameEngine);