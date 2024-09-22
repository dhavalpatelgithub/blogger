import Li from "./li";

export default function Ol({ content }: any) {
    return (
        <ol>
            { content?.list?.map((item: any, index: number) => {
                return (<Li key={index} content={item} />)
            }) }
        </ol>
    );
}