import axios from 'axios';
import * as cheerio from 'cheerio';
import { Request, Response } from 'express';
import { Result, AxiosData, ResultData } from '../interfaces/pornhub.interface'

const hub = async (url: string): Promise<Result[]> => {
    
    const { data: downloader } = await axios.post('', {
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        data: { video_url: url }
    }) as AxiosData
    
    const { data: html } = await axios.get(url) as AxiosData
    
    const $: cheerio.CheerioAPI = cheerio.load(downloader.data)
    const $$: cheerio.CheerioAPI = cheerio.load(html.data)
    
    let result: Result[] = []
    
    $('div[class="form-group mb-4"]').each((i, e) => {
        result.push({
            title: $$('div[class="title-container translate"] h1[class="title translate"]').find('span').text().trim(),
            data: $$('div[class="video-actions-menu"]').find('div[class="videoInfo"]').text().trim(),
            views: $$('div[class="video-actions-menu"]').find('div[class="views"]').find('span').text().trim(),
            rating: $$('div[class="video-actions-menu"]').find('div[class="ratingPercent"]').find('span').text().trim(),
            likes: $$('div[class="votes-fav-wrap"]').find('span[class="votesUp"]').text().trim(),
            dislikes: $$('div[class="votes-fav-wrap"]').find('span[class="votesDown"]').text().trim(),
            favorites: $$('div[class="votes-fav-wrap"]').find('span[class="favoritesCounter"]').text().trim(),
            author: {
                name: $$('div[class="userInfo"]').find('div[class="usernameWrap clearfix"]').text().trim()
            },
            url: '' + $(e).find('a[class="btn btn-secondary mb-4"]').attr('href'),
            quality: $(e).find('a').eq(0).text().trim()
        })
    })

    return result
}

export const controller = async(req: Request, res:Response): Promise<Response> => {
    const { url } = req.query
    
    if (!url) return res.status(400).json({
        status: 400,
        message: `[!] URL is missing`
    } as ResultData)
    
    try {
        const data: Result[] = await hub(url as string)
        return res.status(200).json({
            status: 200,
            message: 'Process completed successfully',
            result: data,
        } as ResultData)
    } catch (e) {
        return res.status(500).json({
            status: 500,
            message: 'An error occurred during the process',
            error: (e as Error).message,
        } as ResultData)
    }
    
}