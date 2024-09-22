export default function Table({ content }: any) {
    return (
        <table>
            <thead>
                <tr>
                    {content?.columns?.map((column: any, index: number) => {
                        return (<th key={index}>{ column?.name }</th>);
                    })}
                </tr>
            </thead>
            <tbody>
                {content?.rows?.map((row: any, index: number) => {
                    return (
                        <tr key={index}>
                            {content?.columns?.map((column: any, colIndex: number) => {
                                return (
                                    <td key={colIndex} className={column?.className}>{ row[column?.key] }</td>
                                );
                            })}
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
}