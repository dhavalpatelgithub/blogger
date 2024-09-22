export default function Blockquote({ content }: any) {
    return (
        <blockquote>
            <p className={content?.className}>
                { content?.content }
            </p>
        </blockquote>
    );
}