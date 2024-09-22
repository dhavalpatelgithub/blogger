import Structure from "./structure";

export default function P({ content }: any) {
    if (content?.structure) {
        return <p><Structure structure={content?.structure} /></p>
    } else {
        return (<p className={content?.className}>
            { content?.content }
        </p>);
    }
}