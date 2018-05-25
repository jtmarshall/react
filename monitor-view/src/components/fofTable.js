import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import moment from 'moment';


function FofTable(props) {
    return (
        <Paper className="fof">
            <h4>
                {props.facility}
            </h4>
            <Table className="fofTable">
                <TableHead>
                    <TableRow>
                        <TableCell component="th"></TableCell>
                        <TableCell>404 Link</TableCell>
                        <TableCell>Referred From / Found On</TableCell>
                        <TableCell>Time</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {Object.keys(props.data).map((keyName, keyIndex) => {
                        return (
                            <TableRow key={keyName}>
                                <TableCell component="th">{keyName}</TableCell>
                                <TableCell>
                                    <a href={props.data[keyIndex].Page.String} target={"_blank"}>
                                        {props.data[keyIndex].Page.String}
                                    </a>
                                </TableCell>
                                <TableCell>
                                    <a href={props.data[keyIndex].Referer.String} target={"_blank"}>
                                        {props.data[keyIndex].Referer.String}
                                    </a>
                                </TableCell>
                                <TableCell>{moment(props.data[keyIndex].TimeStamp).format("lll")}</TableCell>
                            </TableRow>
                        );
                    })}
                </TableBody>
            </Table>
        </Paper>
    );
}

export default FofTable;
