import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/Home';
import SportsPage from './pages/Sports';
import BlogPage from './pages/Blog';
import CommunityPage from './pages/Community';

const App = () => {
    return (
        <>
            <Header />
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/sports" component={SportsPage} />
                <Route path="/blog" component={BlogPage} />
                <Route path="/community" component={CommunityPage} />
            </Switch>
            <Footer />
        </>
    );
};

export default App;