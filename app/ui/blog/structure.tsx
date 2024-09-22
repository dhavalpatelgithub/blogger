import A from "./a";

export default function Structure({ structure }: any) {
    return (structure?.map((item: any) => {
        switch(item.contentType) {
            case "plainText": return <>{item?.content}</>;
            case "strong": return <strong>{item?.content}</strong>;
            case "code": return <code className={item?.className}>{ item?.content }</code>;
            case "a": return <A content={item} />;

            default:      return <></>
        }
    }));
}