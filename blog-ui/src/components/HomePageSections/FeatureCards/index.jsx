import React, { useEffect } from 'react'
import { Box, Card, CardContent, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import './FeatureCards.css'

const FeatureCards = () => {
    return (
        <Box className="feature-container">
            <Link to='/login' className='feature-card-link'>
                <Card className="feature-card" clickable="true">
                    <CardContent>
                        <Typography variant="h6" className="feature-title">
                            Write Your Stories
                        </Typography>
                        <Typography variant="body2" className="feature-text">
                            Create and publish your own blogs easily.
                        </Typography>
                    </CardContent>
                </Card>
            </Link>

            <Link to='/publicBlogs' className='feature-card-link'>
                <Card className="feature-card" clickable="true">
                    <CardContent>
                        <Typography variant="h6" className="feature-title">
                            Discover New Ideas
                        </Typography>
                        <Typography variant="body2" className="feature-text">
                            Read articles from writers across the world.
                        </Typography>
                    </CardContent>
                </Card>
            </Link>

            <Card className="feature-card" clickable="true">
                <CardContent>
                    <Typography variant="h6" className="feature-title">
                        Join Our Community
                    </Typography>
                    <Typography variant="body2" className="feature-text">
                        Engage and connect with readers and creators.
                    </Typography>
                </CardContent>
            </Card>

        </Box>
    )
}

export default FeatureCards