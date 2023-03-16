import AsyncStorage from "@react-native-async-storage/async-storage"
import { useEffect } from "react"

const KEY_PREFIX = 'yb_core_icon_storage'
const CACHE_TIME_PREFIX = 'caching_time'

const storeData = async (key: string, value: string) => {
    try {
        await AsyncStorage.setItem(KEY_PREFIX + key, value)
        const nowTime = JSON.stringify(Date.now())
        await AsyncStorage.setItem(CACHE_TIME_PREFIX + key, nowTime)
    } catch (error) {
        console.log("Cache Persistance Error:- ", error)
    }
}

const getData = async (key: string) => {
    try {
        const value = await AsyncStorage.getItem(KEY_PREFIX + key)
        return value
    } catch (error) {
        console.log("Cache Retrival Error:- ", error)
        return null
    }
}

const getDataTime = async (key: string) => {
    try {
        const value = await AsyncStorage.getItem(CACHE_TIME_PREFIX + key)
        return value
    } catch (error) {
        console.log("Cache Retrival Error:- ", error)
        return null
    }
}

const removeData = async (key: string) => {
    try {
        await AsyncStorage.removeItem(KEY_PREFIX + key)
        await AsyncStorage.removeItem(CACHE_TIME_PREFIX + key)
    } catch (error) {
        console.log("Cache Invalidation Error:- ", error)
    }
}

const useCacheInvalidate = (timeToInvalidateCache: number) => {
    useEffect(() => {
        const inValidateCache = async () => {
            const data = await AsyncStorage.getAllKeys()
            const iconCachedData = data.filter((item) => item.startsWith(CACHE_TIME_PREFIX))
            iconCachedData.forEach(async (key) => {
                const plainKey = key.replace(CACHE_TIME_PREFIX, '')
                const cacheRegisterTime = await getDataTime(plainKey)
                const nowTime = Date.now()
                const cacheTime = Number(cacheRegisterTime!)
                if (nowTime >= (cacheTime + timeToInvalidateCache * 86400000)) {
                    console.log('Time to invalidate Cache. Removed Key:- ', key)
                    await removeData(plainKey)
                } else {
                    /***** Dot not delete this. Used for debugging time remaining *****/
                    // console.log(dhm((cacheTime + timeToInvalidateCache * 86400000) - nowTime), ' to invalidate this cache')
                }
            })
        }
        inValidateCache()
    }, [])
}

/***** Dot not delete this. Used for debugging time remaining *****/
// function dhm(ms: number) {
//     const days = Math.floor(ms / (24 * 60 * 60 * 1000));
//     const daysms = ms % (24 * 60 * 60 * 1000);
//     const hours = Math.floor(daysms / (60 * 60 * 1000));
//     const hoursms = ms % (60 * 60 * 1000);
//     const minutes = Math.floor(hoursms / (60 * 1000));
//     const minutesms = ms % (60 * 1000);
//     const sec = Math.floor(minutesms / 1000);
//     return days + ":" + hours + ":" + minutes + ":" + sec;
// }

export { storeData, getData, removeData, useCacheInvalidate }