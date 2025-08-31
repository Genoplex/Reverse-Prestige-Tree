addLayer('Side', {
    name: 'Side',

    // 左侧节点外观
    symbol: '<h6>Side',
    row: 'side',
    position: 0,
    color: 'cornflowerblue',
    layerShown() {
        return false
    },
    tooltip() {
        return ''
    },

    // 层级数据
    type: 'normal',
    exponent: 0.5,
    requires: new Decimal(Infinity),

    // 初始变量
    startData() {
        return {
            // 解锁和点数
            unlocked: true,
            points: new Decimal(0),
        }
    },

    baseAmount() {
        return player.points
    },
    gainMult() {
        mult = new Decimal(1)
        return mult
    },
    gainExp() {
        exp = new Decimal(1)
        return exp
    },

    // 层级内外观
    tabFormat: {
        'Data': {
            content() {
                return []
            }
        }
    },

    // UBC-GA
    // 升级
    upgrades: {

    },

    // 购买项：
    buyables: {

    },

    // 点击项
    clickables: {

    },

    // 函数
    // 更新函数
    update: function (diff) {
        document.title = getI18N('Mod.Name')

        displayThings = []
    },

    // TMP函数

    // 文本
    // 其他函数
    /*
    hotkeys: [
        {key: 'p', description: 'P: Reset for prestige points', onPress() { if (canReset(this.layer)) doReset(this.layer) } },],*/
})


function Common_CanAfford(cost) {
    let can = true
    for (let I = 0; I < cost.length; I++) {
        let each = cost[I]
        if (player[each[0]][each[1]].lt(each[2])) {
            can = false
        }
    }
    return can
}

function Common_Pay(cost) {
    for (let I = 0; I < cost.length; I++) {
        let each = cost[I]
        player[each[0]][each[1]] = player[each[0]][each[1]].sub(each[2])
    }
}

function Common_Cost_Text(cost) {
    let text = getI18N('Common.PriceLabel') + ' ';
    for (let I = 0; I < cost.length; I++) {
        const [layer, resourceKey, amount] = cost[I];
        const resourceName = getI18N(`Common.Resources.${layer}.${resourceKey}`)
        text += `${format(amount)} ${resourceName}, `
    }
    return text.slice(0, -2)
}