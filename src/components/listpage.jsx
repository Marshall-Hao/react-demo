import React, { PureComponent } from 'react';
import ListItem from './listItem';


class ListPage extends PureComponent {

    renderList() {
        if (this.props.data.length === 0) {
            return <div className="text-center">Empty</div>;
        }
        return this.props.data.map((item, index) => {
            return (
            <ListItem
                key={item.id}
                data={item}
                onDelete={this.props.handleDelete}
                onIncrease={this.props.handleIncrease}
                onDecrease={this.props.handleDecrease}
            />
            );
        });
    }

    render() { 
        console.log('ListPage - rendering')
        return (
            <div className="container">
                {this.props.data.length === 0 && (
                <div className="text-center">Empty</div>
                )}
                {this.renderList()}
            </div> 
      );
    }
}
 
export default ListPage;