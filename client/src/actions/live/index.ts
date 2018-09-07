
export const saveLive = (liveRes: any) => {
    console.log(liveRes)
    return {
        type: 'SAVE_LIVE',
        live: liveRes,
    };
}