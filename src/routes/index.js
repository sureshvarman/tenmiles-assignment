/**
 * Defines route in application and corresponding components
 */
import { Route }   from 'react-router';
import React       from 'react';
import CoreLayout  from 'layouts/CoreLayout';
import HomeView    from 'views/Home/HomeView.react';
import BookMarkView    from 'views/Bookmark/BookMarkView.react';

export default (
    <Route component={CoreLayout}>
        <Route name='home' path='/' component={HomeView} />
        <Route name='bookmark' path='/bookmark' component={BookMarkView} />
    </Route>
);
