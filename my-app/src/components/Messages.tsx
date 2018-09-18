import * as React from 'react';
import { withStyles, Theme } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import { isArray } from 'util';

const styles = (theme: Theme) => ({
    root: {
        width: '100%',
        maxWidth: '720px',
        backgroundColor: theme.palette.background.paper,
        borderStyle: 'solid',
        borderWidth: '2px',
        borderColor: theme.palette.divider
    },
});

interface MessProps {
    classes: any;
    messages: any;
}

function getFormattedMessages(messages: any) {
    if (!messages || !isArray(messages) || messages.length === 0) {
        return <div>messages</div>;
    } else {
        var formattedMessages: any = [];
        messages.map(function(message) {
            formattedMessages.push(
                <ListItem key={message.id}>
                    {message.content}
                </ListItem>
                
            );
            formattedMessages.push(<Divider inset component="li" />);
        })
    }
    return formattedMessages;
}

function Messages(props: MessProps) {
    const { classes, messages } = props;

    return (
        <div className={classes.root}>
            <List>
                {getFormattedMessages(messages)}
            </List>
        </div>
    );
}

export default withStyles(styles)(Messages);