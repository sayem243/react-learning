export default function Text({ addEmoji }) {
    const text = 'React is a Javascript Library ';
    return <div> {addEmoji ? addEmoji(text, '💜') : text} </div>;
}
