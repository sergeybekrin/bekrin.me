import React from 'react';
import Page from 'components/Page';
import Formatter from 'components/Formatter';
import ContentSection from 'components/ContentSection';
import NpmkitProjectCard from 'components/NpmkitProjectCard';
import SpectroProjectCard from 'components/SpectroProjectCard';

export const ProjectsPage = () => (
    <Page title="Projects">
        <ContentSection title={<Formatter>Projects</Formatter>}>
            <NpmkitProjectCard />
            <SpectroProjectCard />
        </ContentSection>
    </Page>
);

export default ProjectsPage;
