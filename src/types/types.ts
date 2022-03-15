export type WifiPoints = {
    type: string,
    generator: string,
    features: 
    {
        type: string,
        properties: {
            time: string,
            router: string,
            mob: string,
            homessid: string,
        },
        geometry: {
            type: string,
            coordinates: [number]
        }
    }[], 
}