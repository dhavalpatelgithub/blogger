import Li from "./li";

export default function Ul({ content }: any) {
    return (
        <ul>
            { content?.list?.map((item: any, index: number) => {
                return (<Li key={index} content={item} />)
            }) }
        </ul>
    );
}