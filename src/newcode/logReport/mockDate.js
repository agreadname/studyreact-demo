export function adaptDate(imei, oaid, idfa) {
    // deviceId(设备ID，安卓传IMEI,IOS传IDFA)
    // matchRes(匹配结果,0：不存在匹配数据，1：存在匹配数据)
    return new Promise((o) => {
        o({
            mobBaseRes: {
                code: 100,
                result: {
                    matchRes: 1,
                    activeRes: 1,
                    secondStayRes: 0,
                },
            },
        });
    });
}
// deviceId(设备ID，安卓传IMEI,IOS传IDFA)
// actionType(行为类型)
export function reportDate(actionType) {
    return new Promise((o) => {
        o({
            mobBaseRes: {
                code: 100,
                result: {
                    actionType,
                },
            },
        });
    });
}
