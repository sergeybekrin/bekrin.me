import { style, classes } from 'typestyle';
import { any, string, bool, oneOf } from 'prop-types';
import { mobile, tablet } from '~/styles/media';

const styles = {
  text: style({
    margin: '1em 0',
    lineHeight: 1.75,
  }, mobile({
    lineHeight: 1.5,
  })),
  heading: style({
    fontWeight: 500,
    fontSize: 36,
    lineHeight: 1.5,
    margin: 0,
  }, tablet({
    fontSize: 26,
  })),
  bold: style({
    fontWeight: 600,
    letterSpacing: -2,
  }, tablet({
    letterSpacing: -1,
  })),
};

export const Kinds = {
  paragraph: 'p',
  heading: 'h2',
  title: 'h1',
};

const Text = ({
  className,
  kind = Kinds.paragraph,
  bold = false,
  ...props
}) => {
  const Tag = kind;
  const classNames = classes(
    className,
    styles.text,
    bold && styles.bold,
    kind === Kinds.heading && styles.heading,
    kind === Kinds.title && styles.heading,
  );

  return <Tag className={classNames} {...props} />;
};

Text.propTypes = {
  className: string,
  bold: bool,
  kind: oneOf(Object.values(Kinds)),
  children: any,
};

export default Text;
