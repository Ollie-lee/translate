import React, { Component } from 'react'
import LanguageContext from '../contexts/LanguageContext'
import ColorContext from '../contexts/ColorContext'

export default class Button extends Component {
    // static contextType = LanguageContext
    //! only used when this.context


    render() {
        return (
            <ColorContext.Consumer>
            {/* ! make button's className change, so embrace the button with Consumer */}

            {/* the only thing exists in Consumer is going to be a function
            so, we need a function receive value and return jsx */}
                <button className='ui button primary'>
                    <LanguageContext.Consumer>
                        {(value) => value === 'english' ? 'Submit' : 'Voorleggen'}
                    </LanguageContext.Consumer>
                </button>
            </ColorContext.Consumer>
        )
    }
}
