
export const saveLive = (liveRes: any) => {
    return {
        type: 'SAVE_LIVE',
        live: liveRes,
    };
}