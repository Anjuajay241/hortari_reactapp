import React from 'react'
import { Switch, Route} from 'react-router-dom'
import App from './App'
import Cart from './container/cartconatiner'
import { render } from '@testing-library/react'

export default class Routes extends React.Component
{
    render()
    {
        return(
            <Switch>
                <Route exact path="/" component={App} />
                <Route exact path="/cart" component={Cart} />
            </Switch>
        )
    }
}