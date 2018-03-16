import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from '../pages/home/home';
import Search from '../pages/search/search';
import Item from '../pages/item/item';
import NotFound from '../pages/not-found/not-found';
import Header from '../pages/header/header';

const Index = () => (
    <div className="">
        <Header />
        <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/search' component={Search} />
            <Route exact path='/item' component={Item} />
            <Route exact component={NotFound} />
        </Switch>
    </div>
)

export default Index;