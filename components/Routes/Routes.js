import React from 'react';
import { Route, IndexRoute } from 'react-router';
import RootContainer from 'components/RootContainer';
import AboutPage from 'components/AboutPage';
import ProjectsPage from 'components/ProjectsPage';
import ContactsPage from 'components/ContactsPage';
import NotFoundPage from 'components/NotFoundPage';
import NpmkitProjectPage from 'components/NpmkitProjectPage';
import SpectroProjectPage from 'components/SpectroProjectPage';

export default (
  <Route path="/" component={RootContainer}>
    <IndexRoute component={AboutPage} />
    <Route path="projects">
      <IndexRoute component={ProjectsPage} />
      <Route path="npmkit" component={NpmkitProjectPage} />
      <Route path="spectro" component={SpectroProjectPage} />
    </Route>
    <Route path="contacts" component={ContactsPage} />
    <Route path="*" component={NotFoundPage} />
  </Route>
);
