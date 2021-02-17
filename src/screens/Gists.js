import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    Avatar,
    Container,
    Divider,
    Grid,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
    Paper,
    Typography,
} from '@material-ui/core';
import { Context } from '../components/ContextWrapper';
import CodeIcon from '@material-ui/icons/Code';
import RestaurantIcon from '@material-ui/icons/Restaurant';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import moment from 'moment';

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: 10,
    },
    containerDiv: {
        width: 600,
        [theme.breakpoints.down('sm')]: {
            width: "100%"
        }
    },
    center: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    typographyName: {
        fontSize: 12,
        color: "blue",
        textDecoration: "underline",
        cursor: "pointer",
        marginLeft: -5
    },
    metaDataTypography: {
        fontSize: 12,
        color: "blue",
        textDecoration: "underline",
        cursor: "pointer",
        marginLeft: -27,
    },
    metaDataIcons: {
        marginTop: 7,
        color: "blue",
    },
    typographySubText: {
        fontSize: 12,
    },
    typographyDescription: {
        fontSize: 16,
        fontWeight: "bold",
        paddingTop: 20,
        paddingBottom: 20,
    }
}));


function Gists() {
    const context = useContext(Context);
    const {
        gists,
        username,
        error,
    } = context;
    const classes = useStyles();
    const {
        paper,
        containerDiv,
        center,
        typographyName,
        metaDataTypography,
        metaDataIcons,
        typographySubText,
        typographyDescription,
    } = classes;

    return (
        <>
            <Container maxWidth="md" style={{ marginTop: 50 }}>
                <div className={center}>
                    <div className={containerDiv}>
                        {
                            error
                                ?
                                <Typography>
                                    {error}
                                </Typography>
                                :
                                <Typography>
                                    Showing {username ? username : "public"} gists
                                </Typography>
                        }
                        {
                            gists &&
                            gists.length > 0 &&
                            gists.map((gist, index) => {
                                // We could break this into seprate component for reusability
                                return (
                                    <React.Fragment key={index}>
                                        <Paper className={paper} elevation={4}>
                                            <Grid container>
                                                <Grid item xs={12} md={5}>
                                                    <List>
                                                        <a
                                                            href={gist.owner.html_url}
                                                            target="_blank"
                                                            style={{ textDecoration: "none" }}
                                                        >
                                                            <ListItem>
                                                                <ListItemAvatar>
                                                                    <Avatar
                                                                        src={gist.owner.avatar_url}
                                                                    />
                                                                </ListItemAvatar>
                                                                <ListItemText primary={
                                                                    <Typography className={typographyName}>
                                                                        {gist.owner.login}
                                                                    </Typography>
                                                                } />
                                                            </ListItem>
                                                        </a>
                                                    </List>
                                                </Grid>
                                                <Grid item xs={4} md={2}>
                                                    <List>
                                                        <a
                                                            href={`https://gist.github.com/${gist.owner.login}/${gist.id}`}
                                                            target="_blank"
                                                            style={{ textDecoration: "none" }}
                                                        >
                                                            <ListItem>
                                                                <ListItemAvatar>
                                                                    <CodeIcon className={metaDataIcons} />
                                                                </ListItemAvatar>
                                                                <ListItemText primary={
                                                                    <Typography className={metaDataTypography}>
                                                                        {Object.keys(gist.files).length} Files
                                                                </Typography>
                                                                } />
                                                            </ListItem>
                                                        </a>
                                                    </List>
                                                </Grid>
                                                <Grid item xs={4} md={2}>
                                                    <List>
                                                        <a
                                                            href={`https://gist.github.com/${gist.owner.login}/${gist.id}/forks`}
                                                            target="_blank"
                                                            style={{ textDecoration: "none" }}
                                                        >
                                                            <ListItem>
                                                                <ListItemAvatar>
                                                                    <RestaurantIcon className={metaDataIcons} />
                                                                </ListItemAvatar>
                                                                <ListItemText primary={
                                                                    <Typography className={metaDataTypography}>
                                                                        Forks
                                                                </Typography>
                                                                } />
                                                            </ListItem>
                                                        </a>
                                                    </List>
                                                </Grid>
                                                <Grid item xs={4} md={3}>
                                                    <List>
                                                        <a
                                                            href={`https://gist.github.com/${gist.owner.login}/${gist.id}#comments`}
                                                            target="_blank"
                                                            style={{ textDecoration: "none" }}
                                                        >
                                                            <ListItem>
                                                                <ListItemAvatar>
                                                                    <ChatBubbleOutlineIcon className={metaDataIcons} />
                                                                </ListItemAvatar>
                                                                <ListItemText primary={
                                                                    <Typography className={metaDataTypography}>
                                                                        {gist.comments} Comments
                                                                </Typography>
                                                                } />
                                                            </ListItem>
                                                        </a>
                                                    </List>
                                                </Grid>
                                                <Grid item xs={3}>
                                                    <Typography className={typographySubText}>
                                                        Created at: {moment(gist.created_at).format("L")}
                                                    </Typography>
                                                </Grid>
                                                <Grid item xs={3}>
                                                    <Typography className={typographySubText}>
                                                        Last updated: {moment(gist.updated_at).format("L")}
                                                    </Typography>
                                                </Grid>
                                                <Grid item xs={12}>
                                                    <Typography className={typographyDescription}>
                                                        {gist.description}
                                                    </Typography>
                                                </Grid>
                                                <Grid item xs={12}>
                                                    <Grid container>
                                                        {
                                                            Object.keys(gist.files).map((key) =>
                                                                <Grid item xs>
                                                                    <a href={gist.files[key].raw_url} target="_blank" style={{ textDecoration: "none" }}>
                                                                        <ListItem>
                                                                            <ListItemAvatar>
                                                                                <FileCopyIcon className={metaDataIcons} />
                                                                            </ListItemAvatar>
                                                                            <ListItemText primary={
                                                                                <Typography className={metaDataTypography} style={{ textDecoration: "none" }}>
                                                                                    {key}
                                                                                </Typography>
                                                                            } />
                                                                        </ListItem>
                                                                    </a>
                                                                </Grid>
                                                            )
                                                        }
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                        </Paper>
                                        <Divider style={{ marginTop: 20, marginBottom: 20 }} />
                                    </React.Fragment>
                                )
                            })
                        }
                    </div>
                </div>
            </Container>
        </>
    )
}

export default Gists;
