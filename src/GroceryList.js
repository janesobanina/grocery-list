import { Component } from "react";

export class GroceryList extends Component {

    state={
        userInput: '',
        groceryList: []
    }

    onChangeEvent(e) {
        this.setState({userInput: e});
    }

    addItem(input) {
        if(input==='') {
            alert('Please enter an item.')
        } else {
            let listArray = this.state.groceryList;
            listArray.push(input);
            this.setState({groceryList:listArray, userInput:''})
        }
    }

    crossedWord(event) {
        const li = event.target;
        li.classList.toggle('crossed');
    }

    deleteItem() {
        let listArray = this.state.groceryList;
        listArray = [];
        this.setState({groceryList: listArray})
    }

    onFormSubmit(e) {
        e.preventDefault();
    }

    render() {
        return(
            <div className="main">
                <form className="container" onSubmit={this.onFormSubmit}>
                    <div className="inp">
                        <input type="text"
                        placeholder="What do you want to buy?" 
                        onChange={(e) => {this.onChangeEvent(e.target.value)}}
                        value={this.state.userInput}/>
                    </div>
                    <div className="btn">
                        <button onClick={() => this.addItem(this.state.userInput)} className="add">ADD</button>
                    </div>
                    <ul>
                        {this.state.groceryList.map((item,index) => (
                            <li onClick={this.crossedWord} key={index}>{item}</li>
                        ))}
                    </ul>
                    <div className="btn">
                        <button onClick={() => this.deleteItem()} className="del">Delete</button>
                    </div>
                </form>
            </div>
        )
    }
}