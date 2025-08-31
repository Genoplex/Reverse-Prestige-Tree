addLayer('Civilization', {
    name: 'Civilization',

    // 左侧节点外观
    row: 1,
    position: 1,
    layerShown() {
        return true
    },
    color: '#EDB3FF',
    symbol: () => getI18N('Civilization.Title'),
    tooltip: () => getI18N('Civilization.Tooltip', {
        Amount: format(player.Civilization.points),
        Name: getI18N('Common.Resources.Civilization.points')
    }),

    // 层级数据
    type: 'normal',
    baseAmount() {
        return player.points
    },
    requires: new Decimal(Infinity),
    exponent: 0.5,
    resource: () => getI18N('Common.Resources.Civilization.points'),

    // 初始变量
    startData() {
        return {
            // 解锁和点数
            unlocked: true,
            points: new Decimal(0),
            Civil: new Decimal(0),
        }
    },

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
        'Civil': {
            TabName: () => getI18N('Civilization.LayerName.Building'),
            content() {
                let tabformat = []

                // 文明点获得
                tabformat.push(['display-text', getI18N('Civilization.TabFormat.Common.Resource', {
                    Amount: format(player.Civilization.points),
                    Name: getI18N('Common.Resources.Civilization.points')
                })])
                tabformat.push(['display-text', getI18N('Common.Gain', {
                    Amount: format(tmp.Civilization.Point_Gain)
                })])
                tabformat.push('blank')

                if (hasUpgrade('Civilization', 'CU11')) {
                    tabformat.push(
                        ['column', [
                            ['display-text', getI18N('Civilization.TabFormat.Civil.Population', {
                                Amount1: formatWhole(tmp.Civilization.Population),
                                Amount2: formatWhole(tmp.Civilization.Population_Max),
                                Name: getI18N('Common.Resources.Civilization.Population')
                            })],
                            ['display-text', getI18N('Civilization.TabFormat.Civil.Population_Effect', {
                                Amount: formatWhole(tmp.Civilization.Population_LimitRate.mul(100)),
                                Name: getI18N('Common.Resources.Civilization.Population')
                            })],
                            'blank',
                            ['column', [
                                ['display-text', getI18N('Civilization.TabFormat.Civil.Territory', {
                                    Amount1: formatWhole(tmp.Civilization.Territory),
                                    Amount2: formatWhole(tmp.Civilization.Territory_Max),
                                    Name: getI18N('Common.Resources.Civilization.Territory')
                                })],
                                ['display-text', getI18N('Civilization.TabFormat.Civil.Territory_Effect', {
                                    Amount: formatWhole(tmp.Civilization.Territory_LimitCost),
                                    Name: getI18N('Common.Resources.Civilization.Territory')
                                })],], {}],
                        ], {}])
                    tabformat.push('blank')
                    tabformat.push(
                        ['row', [
                            ['buyable', 'CB11'],
                            ['buyable', 'CB12'],
                            ['buyable', 'CB13'],
                        ], {}])
                    tabformat.push('blank')
                }

                tabformat.push(
                    ['row', [
                        ['upgrade', 'CU11'],
                        ['upgrade', 'CU12'],
                        ['upgrade', 'CU13'],
                        ['upgrade', 'CU14'],
                    ], {}])

                return tabformat
            }
        },
        'Techonology': {
            TabName: () => getI18N('Civilization.LayerName.Technology'),
            content() {
                let tabformat = []

                tabformat.push(['display-text', getI18N('Civilization.TabFormat.Common.Resource', {
                    Amount: format(player.Civilization.points),
                    Name: getI18N('Common.Resources.Civilization.points')
                })])
                tabformat.push(['display-text', getI18N('Common.Gain', {
                    Amount: format(tmp.Civilization.Point_Gain)
                })])
                tabformat.push('blank')

                tabformat.push(['display-text', getI18N('Civilization.TabFormat.Technology.Tech_Price_Revise', {
                    Amount: format(tmp.Civilization.Tech_Price_Revise)
                })])
                tabformat.push('blank')

                tabformat.push(
                    ['row', [
                        ['column', [
                            ['buyable', 'CB21'],
                            ['milestone', 'CM11'],
                            ['milestone', 'CM12'],
                            ['milestone', 'CM13'],
                        ], {}],
                        ['column', [
                            ['buyable', 'CB21'],
                            ['milestone', 'CM11'],
                            ['milestone', 'CM12'],
                            ['milestone', 'CM13'],
                        ], {}],
                    ]], {})

                return tabformat
            }
        }
    },

    // UBC-GA
    // 升级
    upgrades: (() => {
        let Upgrade = {}
        for (let I = 1; I <= 4; I++) {
            Upgrade['CU1' + I] = {}
            Upgrade['CU1' + I].fullDisplay = function () {
                return getI18N('Civilization.Upgrade.' + this.id, {
                    Text: Common_Cost_Text(this.costNeed)
                })
            }
            Upgrade['CU1' + I].canAfford = function () {
                return Common_CanAfford(this.costNeed)
            }
            Upgrade['CU1' + I].pay = function () {
                Common_Pay(this.costNeed)
            }
            Upgrade['CU1' + I].style = function () {
                let style = {}
                style['height'] = '120px'
                style['width'] = '120px'
                style['border-radius'] = '0px'
                return style
            }
        }

        Upgrade['CU11'].costNeed = [['Civilization', 'points', '0']]
        Upgrade['CU12'].costNeed = [['Civilization', 'points', '50']]
        Upgrade['CU13'].costNeed = [['Civilization', 'points', '500']]
        Upgrade['CU14'].costNeed = [['Civilization', 'points', '1e100']]

        return Upgrade
    })(),

    // 购买项：
    buyables: (() => {
        let Buyable = {}
        for (let I = 1; I <= 3; I++) {
            Buyable['CB1' + I] = {}
            Buyable['CB1' + I].canAfford = function () {
                return Common_CanAfford(tmp.Civilization.buyables[this.id].costNeed)
            }
            Buyable['CB1' + I].buy = function () {
                Common_Pay(tmp.Civilization.buyables[this.id].costNeed)
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            }
            Buyable['CB1' + I].style = function () {
                let style = {}
                style['height'] = '150px'
                style['width'] = '150px'
                style['border-radius'] = '0px'
                return style
            }
        }

        // CB11
        Buyable['CB11'].display = function () {
            return getI18N('Civilization.Buyable.' + this.id, {
                Amount1: formatWhole(getBuyableAmount('Civilization', this.id)),
                Amount2: format(tmp.Civilization.buyables[this.id].levelEffect[0]),
                Amount3: format(tmp.Civilization.buyables[this.id].levelEffect[1]),
                Amount4: formatWhole(tmp.Civilization.buyables[this.id].effect),
                Name1: getI18N('Common.Resources.Civilization.points'),
                Name2: getI18N('Common.Resources.Civilization.Population'),
                Text: Common_Cost_Text(tmp.Civilization.buyables[this.id].costNeed)
            })
        }
        Buyable['CB11'].unlocked = function () {
            return hasUpgrade('Civilization', 'CU11')
        }
        Buyable['CB11'].levelEffect = function () {
            let Population = new Decimal(1)
            let Gain = new Decimal(1)
            return [Population, Gain]
        }
        Buyable['CB11'].effect = function (x = getBuyableAmount(this.layer, this.id)) {
            return x.floor()
        }
        Buyable['CB11'].costNeed = function (x = getBuyableAmount(this.layer, this.id)) {
            let Cost = new Decimal(1.15).pow(x).mul(5).sub(5)
            Cost = Cost.mul(tmp.Civilization.Building_Price_Revise)
            return [['Civilization', 'points', Cost]];
        }

        // CB12
        Buyable['CB12'].display = function () {
            return getI18N('Civilization.Buyable.' + this.id, {
                Amount1: formatWhole(getBuyableAmount('Civilization', this.id)),
                Amount2: format(tmp.Civilization.buyables[this.id].levelEffect.mul(100)),
                Amount3: formatWhole(tmp.Civilization.buyables[this.id].effect),
                Name: getI18N('Common.Resources.Civilization.points'),
                Text: Common_Cost_Text(tmp.Civilization.buyables[this.id].costNeed)
            })
        }
        Buyable['CB12'].unlocked = function () {
            return hasUpgrade('Civilization', 'CU12')
        }
        Buyable['CB12'].levelEffect = function () {
            let Percent = new Decimal(0.1)
            return Percent
        }
        Buyable['CB12'].effect = function (x = getBuyableAmount(this.layer, this.id)) {
            return x.mul(this.levelEffect())
        }
        Buyable['CB12'].costNeed = function (x = getBuyableAmount(this.layer, this.id)) {
            let Cost = new Decimal(1.2).pow(x).mul(50)
            Cost = Cost.mul(tmp.Civilization.Building_Price_Revise)
            return [['Civilization', 'points', Cost]];
        }

        // CB13
        Buyable['CB13'].display = function () {
            return getI18N('Civilization.Buyable.' + this.id, {
                Amount1: formatWhole(getBuyableAmount('Civilization', this.id)),
                Amount2: format(tmp.Civilization.buyables[this.id].levelEffect),
                Amount3: formatWhole(tmp.Civilization.buyables[this.id].effect),
                Name: getI18N('Common.Resources.Civilization.Population'),
                Text: Common_Cost_Text(tmp.Civilization.buyables[this.id].costNeed)
            })
        }
        Buyable['CB13'].unlocked = function () {
            return hasUpgrade('Civilization', 'CU12')
        }
        Buyable['CB13'].levelEffect = function () {
            let Percent = new Decimal(0.5)
            return Percent
        }
        Buyable['CB13'].effect = function (x = getBuyableAmount(this.layer, this.id)) {
            return x.mul(this.levelEffect()).floor()
        }
        Buyable['CB13'].costNeed = function (x = getBuyableAmount(this.layer, this.id)) {
            let Cost = new Decimal(1.15).pow(x).mul(20)
            Cost = Cost.mul(tmp.Civilization.Building_Price_Revise)
            return [['Civilization', 'points', Cost]];
        }

        for (let I = 1; I <= 8; I++) {
            Buyable['CB2' + I] = {}
            Buyable['CB2' + I].display = function () {
                return getI18N('Civilization.Buyable.' + this.id + '.Display', {
                    Amount: getI18N('Civilization.Buyable.' + this.id + '.Level.' + getBuyableAmount('Civilization', this.id)),
                    Text: Common_Cost_Text(tmp.Civilization.buyables[this.id].costNeed)
                })
            }
            Buyable['CB2' + I].purchaseLimit = 12
            Buyable['CB2' + I].costNeed = function (x = getBuyableAmount(this.layer, this.id)) {
                let Cost = tmp.Civilization.Tech_Price_Pow.pow(x).mul(tmp.Civilization.Tech_Price_Mul).mul(tmp.Civilization.Tech_Price_Revise)
                return [['Civilization', 'points', Cost]];
            }
            Buyable['CB2' + I].canAfford = function () {
                return Common_CanAfford(tmp.Civilization.buyables[this.id].costNeed)
            }
            Buyable['CB2' + I].buy = function () {
                Common_Pay(tmp.Civilization.buyables[this.id].costNeed)
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            }
            Buyable['CB2' + I].style = function () {
                let style = {}
                style['height'] = '80px'
                style['width'] = '200px'
                style['border-radius'] = '0px'
                return style
            }
        }

        return Buyable
    })(),

    // 点击项
    clickables: {
    },

    // 里程碑
    milestonePopups: false,
    milestones: (() => {
        let Milestone = {}
        for (let I = 1; I <= 1; I++) {
            for (let J = 1; J <= 3; J++) {
                Milestone['CM' + I + J] = {}
                Milestone['CM' + I + J].requirementDescription = function () {
                    if (hasMilestone(this.layer, this.id)) {
                        return getI18N('Civilization.Milestone.' + this.id + '.Title_Unlock')
                    }
                    return getI18N('Civilization.Milestone.' + this.id + '.Title_Lock')
                }
                Milestone['CM' + I + J].effectDescription = function () {
                    if (hasMilestone(this.layer, this.id)) {
                        return getI18N('Civilization.Milestone.' + this.id + '.Desciption_Unlock', {
                            Amount: this.effect()
                        })
                    }
                    return getI18N('Civilization.Milestone.' + this.id + '.Desciption_Lock')
                }
                Milestone['CM' + I + J].style = function () {
                    let style = {}
                    style['height'] = '0px'
                    style['width'] = '186px'
                    style['border-radius'] = '0px'
                    return style
                }
            }
        }

        // CM11
        Milestone['CM11'].levelEffect = new Decimal(1.25)
        Milestone['CM11'].done = function () {
            return getBuyableAmount('Civilization', 'CB21').gte(1)
        }
        Milestone['CM11'].effect = function (x = getBuyableAmount('Civilization', 'CB21')) {
            return new Decimal(1.25).pow(x)
        }

        // CM12
        Milestone['CM12'].done = function () {
            return getBuyableAmount('Civilization', 'CB21').gte(3)
        }

        // CM13
        Milestone['CM13'].done = function () {
            return getBuyableAmount('Civilization', 'CB21').gte(6)
        }

        return Milestone
    })(),

    // 函数
    // 更新函数
    update: function (diff) {
        player.Civilization.points = player.Civilization.points.add(tmp.Civilization.Point_Gain.mul(diff))
    },

    // TMP函数
    Point_Gain() {
        let Gain = new Decimal(0)

        UnExceeding = tmp.Civilization.Population.min(tmp.Civilization.Population_Max).mul(tmp.Civilization.buyables['CB11'].levelEffect[1])
        Exceeding = tmp.Civilization.Population.sub(tmp.Civilization.Population_Max).max(0).mul(tmp.Civilization.buyables['CB11'].levelEffect[1]).mul(new Decimal(1).sub(tmp.Civilization.Population_LimitRate))
        Gain = Gain.add(UnExceeding).add(Exceeding)

        Gain = Gain.mul(tmp.Civilization.buyables['CB12'].effect.add(1).max(1))

        return Gain
    },

    // 科技价格
    Tech_Price_Pow() {
        return new Decimal(2.5)
    },
    Tech_Price_Mul() {
        return new Decimal(400)
    },
    // 科技价格修正
    Tech_Price_Revise() {
        let Level = getBuyableAmount('Civilization', 'CB21')
        Level = Level.max(getBuyableAmount('Civilization', 'CB22'))
        Level = Level.max(getBuyableAmount('Civilization', 'CB23'))
        Level = Level.max(getBuyableAmount('Civilization', 'CB24'))
        Level = Level.max(getBuyableAmount('Civilization', 'CB25'))
        Level = Level.max(getBuyableAmount('Civilization', 'CB26'))
        Level = Level.max(getBuyableAmount('Civilization', 'CB27'))
        Level = Level.max(getBuyableAmount('Civilization', 'CB28'))
        Level = Level.pow(4)
        return Level.max(1)
    },

    // 基础建筑价格修正
    Building_Price_Revise() {
        let Revise = new Decimal(1)
        Revise = Revise.div(tmp.Civilization.milestones['CM11'].effect)
        return Revise
    },
    // 基础建筑总效果
    Building_TotalEffect() {
        return tmp.Civilization.buyables['CB22'].effect
    },

    // 人口数
    Population() {
        return tmp.Civilization.buyables['CB11'].effect
    },
    // 人口上限
    Population_Max() {
        let Max = new Decimal(10)
        Max = Max.add(tmp.Civilization.buyables['CB13'].effect)
        return Max
    },
    // 人口软硬上限程度
    Population_LimitRate() {
        let Limit = new Decimal(1)
        return Limit.min(1)
    },

    // 领土
    Territory() {
        let CB11 = getBuyableAmount('Civilization', 'CB11')
        let CB12 = getBuyableAmount('Civilization', 'CB12')
        let CB13 = getBuyableAmount('Civilization', 'CB13')
        let CB14 = getBuyableAmount('Civilization', 'CB14')
        let Total = CB11.add(CB12).add(CB13).add(CB14)
        return Total.max(1)
    },
    // 领土上限
    Territory_Max() {
        return new Decimal(100)
    },
    // 领土惩罚
    Territory_LimitCost() {
        return new Decimal(1)
    }

    // 文本
    // 其他函数
    /*
    hotkeys: [
        {key: 'p', description: 'P: Reset for prestige points', onPress() { if (canReset(this.layer)) doReset(this.layer) } },],*/
})

function Tech_Cost(x) {
    let Cost = new Decimal(12).pow(x).mul(100)
    return Cost.mul(tmp.Civilization.Tech_Price_Revise)
}