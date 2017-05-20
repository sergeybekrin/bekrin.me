import React from 'react';
import Page from 'components/Page';
import Link from 'components/Link';
import Formatter from 'components/Formatter';
import ContentSection from 'components/ContentSection';

const NpmkitProjectPage = () => (
    <Page title="npmkit Project">
        <ContentSection title={<Formatter>Key technologies</Formatter>}>
            <p>
                <Link
                    to="//github.com/electron/electron"
                    eventLabel="electron-link"
                >Electron</Link>,{' '}
                <Link
                    to="//github.com/facebook/react"
                    eventLabel="react-link"
                >React</Link> and{' '}
                <Link
                    to="//github.com/reactjs/redux"
                    eventLabel="redux-link"
                >Redux</Link>.
            </p>
        </ContentSection>
        <ContentSection title={<Formatter>The original idea</Formatter>}>
            <p>
                It all started with wish to have visual feedback of my Gulp
                tasks running in background and ability to edit it visually.
                I&apos;ve failed pretty quickly, considering that Gulp uses
                code-over-configuration setup. I even spent some time trying
                monkey patch Gulp to hook it up to receive some useful
                information in real-time, but that did&apos;t help much.
            </p>
            <p>
                At this point I decided to change the path and switch to npm as
                task runner and dependency management.
            </p>
        </ContentSection>
        <ContentSection title={<Formatter>What were planned</Formatter>}>
            <p>Next features were set at the start of development:</p>
            <ul>
                <li>
                    <b>Projects Library</b>
                    <br />
                    <span>
                        List of your projects with quick filter and favorites
                        on top. So you can jump to any project directory in file
                        explorer just in 2 click, hooray!
                    </span>
                </li>
                <li>
                    <b>Dependency Management</b>
                    <br />
                    <span>
                        Keeping your dependencies up-to-day in npm is taught.
                        I found this super useful (and hard to implement, too!).
                    </span>
                </li>
                <li>
                    <b>Tasks Status</b>
                    <br />
                    <span>
                        With notifications and error reporting out-of-box.
                        Despite the fact that this supposed to be core feature,
                        it does&apos;t look like one so far.
                    </span>
                </li>
                <li>
                    <b>Data Editor</b>
                    <br />
                    <span>
                        This is simple editor for your package.json. It helps to
                        avoid shooting your leg by putting comma at wrong place
                        in file.
                    </span>
                </li>
            </ul>
            <p>
                What sounds simple, but took me about 3 months to implement. As
                far as I can tell, Electron was great choice for cross-platform
                app. React and Redux are great for building UI (even for desktop
                apps). I faced some bottlenecks when dealing with rapid updates
                of dependencies, but I&apos;ll tell more later.
            </p>
        </ContentSection>
    </Page>
);

export default NpmkitProjectPage;
