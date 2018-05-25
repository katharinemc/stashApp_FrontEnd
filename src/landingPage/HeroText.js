import React from 'react'
import './herotext.css';
import SignUpBox from './SignUpBox'

import LogInBox from './LogInBox'

export default class HeroText extends React.Component{

render () {
    console.log(this.props)
    if(this.props.display==='landing') {
        return (
            <div className="HeroText">
     <h1>Stash App</h1>
     <p> Being gorgeous with belly side up favor packaging over toy i could pee on this if i had the energy. Sleeps on my head you call this cat food i show my fluffy belly but it's a trap! if you pet it i will tear up your hand if it smells like fish eat as much as you wish yet making sure that fluff gets into the owner's eyes so love lick the other cats. Scratch the postman wake up lick paw wake up owner meow meow. Brown cats with pink ears. Catch mouse and gave it as a present pelt around the house and up and down stairs chasing phantoms curl into a furry donut. Purr for no reason jump on human and sleep on her all night long</p>
          </div>
        );
    } else if (this.props.display==='login'){
        return <LogInBox />
    } else if (this.props.display==='register'){
        return <SignUpBox />
    }

}

    

}