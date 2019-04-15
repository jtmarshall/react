import React from 'react';
import moment from 'moment';


function FofTable(props) {
    return (
        <div className="fof">
            <h4>
                {props.facility}
            </h4>
            <table className="fofTable" style={{borderCollapse: 'collapse'}}>
                <thead>
                <tr>
                    <th component="th"></th>
                    <td>404 Link</td>
                    <td>Referred From / Found On</td>
                    <td>Time</td>
                </tr>
                </thead>
                <tbody>
                {Object.keys(props.data).map((keyName, keyIndex) => {
                    return (
                        <tr key={keyName}>
                            <th>{keyName}</th>
                            <td>
                                <a href={props.data[keyIndex].Page.String} target={"_blank"}>
                                    {props.data[keyIndex].Page.String}
                                </a>
                            </td>
                            <td>
                                <a href={props.data[keyIndex].Referer.String} target={"_blank"}>
                                    {props.data[keyIndex].Referer.String}
                                </a>
                            </td>
                            <td>{moment(props.data[keyIndex].TimeStamp).format("lll")}</td>
                        </tr>
                    );
                })}
                </tbody>
            </table>
        </div>
    );
}

export default FofTable;
