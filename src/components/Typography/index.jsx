const asTag = {
    h1: 'font-light text-8xl normal-case tracking-t-15',
    h2: 'font-light text-6xl normal-case tracking-t-5',
    h3: 'font-normal text-5xl normal-case tracking-t0',
    h4: 'font-normal text-4xl normal-case tracking-t25',
    h5: 'font-normal text-2xl normal-case tracking-t0',
    h6: 'font-medium text-xl normal-case tracking-t15',
    subtitle1: 'font-normal text-base normal-case tracking-t15',
    subtitle2: 'font-medium text-sm normal-case tracking-t1',
    body1: 'font-normal text-base normal-case tracking-t5',
    body2: 'font-normal text-sm normal-case tracking-t25',
    button: 'font-medium text-sm uppercase tracking-t125',
    caption: 'font-normal text-xs normal-case tracking-t4',
    overline: 'font-normal text-2xs uppercase tracking-t1-5',
}

/**
 * @description Component Typography
 * @prop {string} as what type of typography you need h1 h2 | h3 | h4 | h5 | subtitle1 | subtitle2 | body1 | body2 | button | caption | overline
 * @prop {string} content body of Paragraph
 * @prop {string} color body of Paragraph
 */
const Typography = ({ as, content, color = "text-black" }) => <span className={(asTag[as] || asTag.subtitle1) + ' ' + color}>{content}</span>

export default Typography