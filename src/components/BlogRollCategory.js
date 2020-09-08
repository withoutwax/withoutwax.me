import React from 'react';

export default class BlogRollCategory extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      category: this.props.category,
      componentClass: 'inline-flex items-center mb-4 px-3 py-1 rounded-full text-xs font-medium leading-4 bg-gray-200 text-gray-800',
      emoji: '',
    }
  }

  componentWillMount(){
    let color = '';
    switch (this.state.category) {
      case 'Thoughts':
        this.setState({
          emoji: '💭'
        });
        color = 'orange';
        break;
      case 'Project':
        this.setState({
          emoji: '🕹'
        });
        color = 'red';
        break;
      case 'Lab':
        this.setState({
          emoji: '🔨'
        });
        color = 'purple';
        break;
      default:
        this.setState({
          emoji: '💻'
        });
        color = 'gray';
        break;
    }
    this.setState({
      componentClass: `bg-${color}-200 text-${color}-800 inline-flex items-center mb-4 px-3 py-1 rounded-full text-xs font-medium leading-4`,
    });
  }

  render() {
    
    return (
    <div className={this.state.componentClass}>{this.state.category} {this.state.emoji}</div>
    );
  }
  
};
