import React, { Component } from 'react';


class AddItem extends Component {
    state = {
        name:'',
        age:''
    }
    handelChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handelsubmit = (e) => {
        e.preventDefault();
        if (e.target.name.value === '') {
            return false
        } else {
            this.props.addItem(this.state)
            this.setState({
                name:'',
                age:''
            });
        }
    }
    render() {
        return(
            <form onSubmit={this.handelsubmit}>
                <input type="text" id="name" placeholder="Add Name ..." onChange={this.handelChange} value={this.state.name}/>
                <input type="number" id="age" placeholder="Add Age ..." onChange={this.handelChange} value={this.state.age}/>
                <input type="submit" value="ADD"/>
            </form>
        )
    }
}
export default AddItem;