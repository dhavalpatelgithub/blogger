import Structure from "./structure";

export default function Li({ content }: any) {
    if (content?.structure) {
        return <li><Structure structure={content?.structure} /></li>
    }
    return (
        <li>{ content?.content }</li>
    );
}