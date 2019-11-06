import React,{Component} from 'react';
import axios from 'axios';
import News from './News';

export default class NewsNumberPersonInSpace extends React.Component {
    state = {
      persons: [],
    };

    componentDidMount() {
      axios.get('http://api.open-notify.org/astros.json')
        .then(res=> {
          console.log(res);
          this.setState({
            persons: res.data.people 
          });
        })
    }

    render() {
        return (
            <News
            title='People that are in space now'
             text = {
              <ul className='peopleThatAreInSpace'>
              {this.state.persons.map(person => <li>{person.name}</li>)}
             </ul>
            }/>
        );
    }
}