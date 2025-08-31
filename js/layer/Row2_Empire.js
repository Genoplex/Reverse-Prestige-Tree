addLayer('Empire', {
    name: 'Empire',

    // 左侧节点外观
    row: 2,
    position: 1,
    color: '#E5DAB7',
    layerShown() {
        /*
        let Condition = getBuyableAmount('Civilization', 'CB21').gte(5)
        Condition = Condition && (getBuyableAmount('Civilization', 'CB22').gte(5))
        Condition = Condition && (getBuyableAmount('Civilization', 'CB23').gte(5))
        Condition = Condition && (getBuyableAmount('Civilization', 'CB24').gte(5))
        Condition = Condition && (getBuyableAmount('Civilization', 'CB25').gte(5))
        Condition = Condition && (getBuyableAmount('Civilization', 'CB26').gte(5))
        Condition = Condition && (getBuyableAmount('Civilization', 'CB27').gte(5))
        Condition = Condition && (getBuyableAmount('Civilization', 'CB28').gte(5))
        return Condition || player.Science.unlocked || player.Empire.unlocked
        */
    },
    symbol: () => getI18N('Empire.Title'),
    tooltip() { return 'test' },
    tooltipLocked: () => getI18N('Empire.Tooltip.Lock', {
        Amount: format(tmp.Empire.requires),
        Name: getI18N('Common.Resources.Civilization.points')
    }),
    branches: ['Civilization'],

    // 层级数据
    type: 'normal',
    baseAmount() {
        return player.Civilization.points
    },
    requires() {
        return new Decimal(10000000000).mul((player.Empire.unlockOrder && !player.Empire.unlocked) ? 1e100 : 1)
    },
    exponent: 0.2,
    resource: () => getI18N('Common.Resources.Empire.points'),
    baseResource: () => getI18N('Common.Resources.Civilization.points'),

    // 初始变量
    startData() {
        return {
            // 解锁和点数
            unlocked: false,
            points: new Decimal(0),
            unlockOrder: new Decimal(0),
        }
    },
    increaseUnlockOrder: ['Science'],

    // 声望获得
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
        'Empire': {
            TabName: () => getI18N('Empire.LayerName.Empire'),
            content() {
                let tabformat = []
                tabformat.push(['display-text', getI18N('Empire.TabFormat.Empire.Resource', {
                    Amount: format(player.Empire.points),
                    Name: getI18N('Common.Resources.Empire.points')
                })])
                tabformat.push('blank')
                tabformat.push('prestige-button')
                return tabformat
            }
        },
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
    },

    // TMP函数

    // 文本
    // 其他函数
    /*
    hotkeys: [
        {key: 'p', description: 'P: Reset for prestige points', onPress() { if (canReset(this.layer)) doReset(this.layer) } },],*/
})

function Tech_Cost(x) {
    let Cost = new Decimal(3).pow(x).mul(125)
    return Cost.mul(tmp.Civilization.Tech_Price_Revise)
}