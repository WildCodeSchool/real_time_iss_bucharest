import React from 'react';
import axios from 'axios';
import News from './News';

export default class NewsNumberPersonInSpace extends React.Component {
    state = {
      persons: [],
      latitude: '',
      longitude: ''
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
            className='newsCard'
            title='People that are in space now'
             text = {
               <div class='containerNews' >
                 <span>
                    <img src=' https://spacecenter.org/wp-content/uploads/2019/01/ISS-Debrief.jpg' class='imageNews'/>
                 </span>
               <span>
               <ul className='peopleThatAreInSpace'>
               {this.state.persons.map(person => <li>{person.name}</li>)}
             </ul>
               </span>

               </div>
         
            }/>
        );
    }
}