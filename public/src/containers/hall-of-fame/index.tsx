import * as React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (state: any) => state.hallOfFame;
  

@connect(mapStateToProps)
export class HallOfFame extends React.Component<{}> {
    render(){
        const { ranking } = this.props as any;
        console.log(ranking);
        return (<section>Hall Of Fame</section>);
    }   
}