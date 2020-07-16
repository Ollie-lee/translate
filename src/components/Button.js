import React, { Component } from 'react'
import LanguageContext from '../contexts/LanguageContext'
import ColorContext from '../contexts/ColorContext'

export default class Button extends Component {
    // static contextType = LanguageContext
    //! only used when this.context

    renderSubmit = (language) => {
        return language === 'english' ? 'Submit' : 'Voorleggen'
    }

    renderButton(color) {
        return (
            <button className={`ui button ${color}`}>
                <LanguageContext.Consumer>
                    {({language}) => this.renderSubmit(language)}
                </LanguageContext.Consumer>
            </button>
        )
    }

    render() {
        return (
            <ColorContext.Consumer>
                {/* ! make button's className change, so embrace the button with Consumer */}
                {/* the only thing exists in Consumer is going to be a function
            so, we need a function receive value and return jsx */}
                {(color) => this.renderButton(color)}

            </ColorContext.Consumer>
        )
    }
}
