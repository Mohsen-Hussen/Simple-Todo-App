import React, { Component } from 'react';


class TodoItems extends Component {
    render() {
        const info = this.props.data;
        const deleteItem = this.props.deleteItem;
        let length = info.length;
        const FinalData = length ? (
            info.map(item => {
                return (
                    <div key={item.id}>
                        <span className="name">{item.name}</span>
                        <span className="age">{item.age}</span>
                        <span className="action icon" onClick={() => deleteItem(item.id)}>&times;</span>
                    </div>
                )
            })
        ) : (
            <p>There No Item To Show</p>
        )
        return(
            <div className="list_items">
                <div>
                    <span className="name title">Name</span>
                    <span className="age title">Age</span>
                    <span className="action title">Action</span>
                </div>
                {FinalData}
            </div>
        )
    }
}
export default TodoItems;