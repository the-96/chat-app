import React, { useState, KeyboardEvent } from 'react';
import {useDispatch} from 'react-redux'
import {
    Paper,
    Button,
    Card,
    CardContent,
    Typography,
    CardActionArea,
    CardMedia,
    Slide,
    TextField,
    Grid,
    IconButton,
    Checkbox
  } from '@mui/material';
export default function Auth(){
    const renderMain = () => {
        return (
            <Typography variant="h5" color="primary" align="center">
                    Create an account, or sign in!
            </Typography>
        )
    }

    return (
        <div className="auth-wrapper">
            {renderMain()}
        </div>
    )
}

