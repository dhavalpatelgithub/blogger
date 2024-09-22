export default function A({ content }: any) {
    return (
        <a href={content?.href}>{ content?.content }</a>
    );
}