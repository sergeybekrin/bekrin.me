import NextLink from 'next/link';
import { string, any } from 'prop-types';
import Link from '~/components/link';

const InternalLink = ({ href, children, ...props }) => (
  <NextLink {...props} href={href}>
    <Link href={href}>{children}</Link>
  </NextLink>
);

InternalLink.propTypes = {
  href: string,
  children: any,
};

export default InternalLink;
