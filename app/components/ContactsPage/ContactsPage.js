import React from 'react';
import Page from 'components/Page';
import ContentSection from 'components/ContentSection';
import Formatter from 'components/Formatter';
import Link from 'components/Link';
import './ContactsPage.styl';

const contactsData = [
    {
        label: <Formatter>sergey@bekrin.me</Formatter>,
        href: 'mailto:sergey@bekrin.me',
        eventLabel: 'email-link'
    },
    {
        label: <Formatter><b>sergeybekrin</b> on GitHub</Formatter>,
        href: '//github.com/sergeybekrin',
        eventLabel: 'github-link'
    },
    {
        label: <Formatter><b>sergeybekrin</b> on Twitter</Formatter>,
        href: '//twitter.com/sergeybekrin',
        eventLabel: 'twitter-link'
    },
    {
        label: <Formatter><b>sbekrin</b> on Telegram</Formatter>,
        href: '//telegram.me/sbekrin',
        eventLabel: 'telegram-link'
    }
];

const ContactsPage = () => (
    <Page title="Contacts">
        <ContentSection title={<Formatter>Contacts</Formatter>}>
            <ul className="ContactsList">
                {contactsData.map(item =>
                    <li className="ContactsList-item" key={item.eventLabel}>
                        <Link
                            eventLabel={item.eventLabel}
                            to={item.href}
                        >{item.label}</Link>
                    </li>
                )}
            </ul>
        </ContentSection>
    </Page>
);

export default ContactsPage;
