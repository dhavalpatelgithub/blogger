import Structure from "./structure";

export default function Pre({ content }: any) {
    if (content?.structure) {
        return <pre><Structure structure={content?.structure} /></pre>
    } else {
        return (<pre className={content?.className}>
            { content?.content }
        </pre>);
    }
}