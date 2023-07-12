import { Component } from "react";

export class Message extends Component {
    
    state={
        userMsg: ''
    }

    onChangeEvent(e) {
        this.setState({userMsg: e})
        console.log(e)
    }

    render() {
        return(
            <div className="msg">
                <h3>Write us a mrssage</h3>
                <input type="text"
                className="inp_msg"
                placeholder="Please write there a message..."
                onChange={(e) => {this.onChangeEvent(e.target.value)}}
                value={this.state.userMsg} />
            </div>
        )
    }
}

