import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { Box } from "@mui/material"

import { Videos, ChannelCard } from './'
import { fetchFromAPI } from "../utils/fetchFromAPI"
const ChannelDetail = () => {
    const { id } = useParams()
    const [ChannelDetail, setChannelDetail] = useState(null)
    const [videos, setVideos] = useState([])

    useEffect(() => {
        fetchFromAPI(`channels?part=snippet&id=${id}`).then((data) => {
            setChannelDetail(data?.items[0])
            fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`).then((data) => {
                setVideos(data?.items)
            })
        })
    }, [id])
    return (
        <Box minHeight="95vh">
            <Box>
                <div style={{ background: 'linear-gradient(90deg, rgba(30,27,84,1) 14%, rgba(116,116,221,1) 52%, rgba(73,155,237,1) 54%, rgba(114,118,227,1) 57%, rgba(255,255,255,1) 64%, rgba(0,101,255,1) 89%, rgba(0,212,255,1) 95%, rgba(92,166,181,1) 97%, rgba(0,212,255,1) 104%)', zIndex: 10, height: '300px' }} />
                <ChannelCard channelDetail={ChannelDetail} marginTop='-110px' />
            </Box>
            <Box display="flex" p="2">
                <Box sx={{ mr: { sm: '100px' } }} />
                <Videos videos={videos} />

            </Box>
        </Box>
    )
}

export default ChannelDetail