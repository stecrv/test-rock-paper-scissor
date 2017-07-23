"use strict"
import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Grid, Col, Row, Button} from  'react-bootstrap';
import {getRps} from "../../actions/rpsActions";
import SelectRps from './selectRps';




class Rps extends React.Component{

    componentDidMount(){
      this.props.getRps()
    }

    render(){
        console.log('accessing to state', this.props)

        return(
            <div>

                <Grid style={{marginTop:'15px'}}>
                    <Row>
                        <Col xs={12}>
                            <h1>Rock, Paper, Scissors</h1>
                        </Col>
                    </Row>
                    <SelectRps />
                    <Row>
                        <Col xs={12}>
                           <h3>Game</h3>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={4}>
                            Player number 1 (human) :
                        </Col>
                        <Col xs={8}>
                            {this.props.played1}
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={4}>
                            Player number 2 (computer) :
                        </Col>
                        <Col xs={8}>
                            {this.props.played2}
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={4}>
                            Winner:
                        </Col>
                        <Col xs={8}>
                            {this.props.win}
                        </Col>
                    </Row>
                </Grid>
            </div>
        )
    }
}
function mapStateToProps(state){
    return{
        player1: state.rps.player1,
        player2: state.rps.player2,
        played1: state.rps.played1,
        played2: state.rps.played2,
        win: state.rps.win
    }
}
function mapDispatchToProps(dispatch){
    return bindActionCreators({
        getRps: getRps // other actions
    },dispatch)
}
export default  connect(mapStateToProps,mapDispatchToProps)(Rps);