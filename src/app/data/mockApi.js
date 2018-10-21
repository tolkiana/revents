import sampleData from './sampleData'

const delay = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
}

export const fetchSampleData = () => {
    return delay(1000).then(() => {
        return Promise.resolve(sampleData)
    })
}