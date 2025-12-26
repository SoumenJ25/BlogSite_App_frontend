import React, { useState } from 'react'
import { Box, TextField, Button } from '@mui/material'

const BlogFilters = ({ onApplyFilters }) => {
    const [category, setCategory] = useState('')
    const [startDate, setStartDate] = useState('')
    const [endDate, setEndDate] = useState('')

    const applyFilters = () => {
        onApplyFilters({ category, startDate, endDate })
    }

    return (
        <Box className="blog-filters">
            <TextField
                label="Search by Category"
                size="small"
                placeholder='Enter category'
                value={category}
                onChange={(e) => setCategory(e.target.value)}
            />
            <TextField
                type="date"
                size="small"
                label="Start Date"
                slotProps={{
                    inputLabel: { shrink: true }
                }}
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
            />
            <TextField
                type="date"
                size="small"
                label="End Date"
                slotProps={{
                    inputLabel: { shrink: true }
                }}
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
            />
            <Button variant="contained" onClick={applyFilters}>Apply</Button>
        </Box>
    )
}

export default BlogFilters