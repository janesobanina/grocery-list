import { Component } from "react";
import heart1 from './heart1.jpg'
import heart2 from './heart2.jpg'

export class Like extends Component {
    state={
        header: 'LIKE US!',
        heart: heart1
    }

    heartChange() {
        this.setState({header: 'Thank you! We love you, too!', heart: heart2})
    }

    render() {
        return(
            <div className="like">
                <h2>{ this.state.header }</h2>
                <img onClick={() => this.heartChange()} src={this.state.heart} alt="heart" width='75px' />
            </div>
        )
    }
}


