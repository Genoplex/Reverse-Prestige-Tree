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
                                Amount: format(tmp.Civilization.Population_LimitRate.mul(100)),
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
                                    Amount: format(tmp.Civilization.Territory_LimitCost),
                                    Name: getI18N('Common.Resources.Civilization.Territory')
                                })],], {}],
                        ], {}])
                    tabformat.push('blank')
                    tabformat.push(
                        ['row', [
                            ['buyable', 'CB11'],
                            ['buyable', 'CB12'],
                            ['buyable', 'CB13'],
                            ['buyable', 'CB14'],
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
                    Amount: format(tmp.Civilization.CB2X_Price_Revise)
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
                            ['buyable', 'CB22'],
                            ['milestone', 'CM21'],
                            ['milestone', 'CM22'],
                            ['milestone', 'CM23'],
                        ], {}],
                        ['column', [
                            ['buyable', 'CB23'],
                            ['milestone', 'CM31'],
                            ['milestone', 'CM32'],
                            ['milestone', 'CM33'],
                        ], {}],
                        ['column', [
                            ['buyable', 'CB24'],
                            ['milestone', 'CM41'],
                            ['milestone', 'CM42'],
                            ['milestone', 'CM43'],
                        ], {}],
                    ]], {})
                tabformat.push('blank')
                tabformat.push(
                    ['row', [
                        ['column', [
                            ['buyable', 'CB25'],
                            ['milestone', 'CM51'],
                            ['milestone', 'CM52'],
                            ['milestone', 'CM53'],
                        ], {}],
                        ['column', [
                            ['buyable', 'CB26'],
                            ['milestone', 'CM61'],
                            ['milestone', 'CM62'],
                            ['milestone', 'CM63'],
                        ], {}],
                        ['column', [
                            ['buyable', 'CB27'],
                            ['milestone', 'CM71'],
                            ['milestone', 'CM72'],
                            ['milestone', 'CM73'],
                        ], {}],
                        ['column', [
                            ['buyable', 'CB28'],
                            ['milestone', 'CM81'],
                            ['milestone', 'CM82'],
                            ['milestone', 'CM83'],
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
        Upgrade['CU14'].costNeed = [['Civilization', 'points', '5000']]

        return Upgrade
    })(),

    // 购买项：
    buyables: (() => {
        let Buyable = {}
        for (let I = 1; I <= 4; I++) {
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
                Level: formatWhole(getBuyableAmount('Civilization', this.id)),
                LevelEffect1: format(tmp.Civilization.buyables[this.id].levelEffect[0]),
                LevelEffect2: format(tmp.Civilization.buyables[this.id].levelEffect[1]),
                Effect: formatWhole(tmp.Civilization.buyables[this.id].effect),
                NamePoint: getI18N('Common.Resources.Civilization.points'),
                NamePopulation: getI18N('Common.Resources.Civilization.Population'),
                Price: Common_Cost_Text(tmp.Civilization.buyables[this.id].costNeed)
            })
        }
        Buyable['CB11'].unlocked = function () {
            return hasUpgrade('Civilization', 'CU11')
        }
        Buyable['CB11'].levelEffect = function () {
            let Population = new Decimal(1)
            Population = Population.mul(tmp.Civilization.milestones['CM51'].effect.div(100).add(1))
            let Gain = new Decimal(1)
            return [Population, Gain]
        }
        Buyable['CB11'].effect = function (x = getBuyableAmount(this.layer, this.id)) {
            let Effect = x.mul(this.levelEffect()[0])
            Effect = Effect.max(0).floor()
            return Effect
        }
        Buyable['CB11'].costNeed = function (x = getBuyableAmount(this.layer, this.id)) {
            let Cost = new Decimal(1.1).pow(x).mul(5).sub(5)
            Cost = Cost.mul(tmp.Civilization.CB1X_Price_Revise)
            Cost = Cost.mul(tmp.Civilization.Territory_LimitCost)
            Cost = Cost.max(0)
            return [['Civilization', 'points', Cost]];
        }

        // CB12
        Buyable['CB12'].display = function () {
            return getI18N('Civilization.Buyable.' + this.id, {
                Level: formatWhole(getBuyableAmount('Civilization', this.id)),
                LevelEffect: format(tmp.Civilization.buyables[this.id].levelEffect.mul(100)),
                Effect: formatWhole(tmp.Civilization.buyables[this.id].effect.mul(100)),
                NamePoint: getI18N('Common.Resources.Civilization.points'),
                Price: Common_Cost_Text(tmp.Civilization.buyables[this.id].costNeed)
            })
        }
        Buyable['CB12'].unlocked = function () {
            return hasUpgrade('Civilization', 'CU12')
        }
        Buyable['CB12'].levelEffect = function () {
            let Percent = new Decimal(0.1)
            Percent = Percent.mul(tmp.Civilization.milestones['CM71'].effect.div(100).add(1))
            return Percent
        }
        Buyable['CB12'].effect = function (x = getBuyableAmount(this.layer, this.id)) {
            let Effect = x.mul(this.levelEffect())
            Effect = Effect.max(0)
            return Effect
        }
        Buyable['CB12'].costNeed = function (x = getBuyableAmount(this.layer, this.id)) {
            let Cost = new Decimal(1.15).pow(x).mul(50)
            Cost = Cost.mul(tmp.Civilization.CB1X_Price_Revise)
            Cost = Cost.mul(tmp.Civilization.Territory_LimitCost)
            Cost = Cost.max(0)
            return [['Civilization', 'points', Cost]];
        }

        // CB13
        Buyable['CB13'].display = function () {
            return getI18N('Civilization.Buyable.' + this.id, {
                Level: formatWhole(getBuyableAmount('Civilization', this.id)),
                LevelEffect: format(tmp.Civilization.buyables[this.id].levelEffect),
                Effect: formatWhole(tmp.Civilization.buyables[this.id].effect),
                NamePopulation: getI18N('Common.Resources.Civilization.Population'),
                Price: Common_Cost_Text(tmp.Civilization.buyables[this.id].costNeed)
            })
        }
        Buyable['CB13'].unlocked = function () {
            return hasUpgrade('Civilization', 'CU12')
        }
        Buyable['CB13'].levelEffect = function () {
            let Limit = new Decimal(0.5)
            Limit = Limit.mul(tmp.Civilization.milestones['CM81'].effect.div(100).add(1))
            return Limit
        }
        Buyable['CB13'].effect = function (x = getBuyableAmount(this.layer, this.id)) {
            let Effect = x.mul(this.levelEffect()).floor()
            Effect = Effect.max(0)
            return Effect
        }
        Buyable['CB13'].costNeed = function (x = getBuyableAmount(this.layer, this.id)) {
            let Cost = new Decimal(1.1).pow(x).mul(20)
            Cost = Cost.mul(tmp.Civilization.CB1X_Price_Revise)
            Cost = Cost.mul(tmp.Civilization.Territory_LimitCost)
            Cost = Cost.max(0)
            return [['Civilization', 'points', Cost]];
        }

        // CB14
        Buyable['CB14'].display = function () {
            return getI18N('Civilization.Buyable.' + this.id, {
                Level: formatWhole(getBuyableAmount('Civilization', this.id)),
                LevelEffect: format(tmp.Civilization.buyables[this.id].levelEffect),
                Effect: formatWhole(tmp.Civilization.buyables[this.id].effect),
                NameTerritory: getI18N('Common.Resources.Civilization.Territory'),
                Price: Common_Cost_Text(tmp.Civilization.buyables[this.id].costNeed),
            })
        }
        Buyable['CB14'].unlocked = function () {
            return hasUpgrade('Civilization', 'CU14')
        }
        Buyable['CB14'].levelEffect = function () {
            let Limit = new Decimal(4)
            return Limit
        }
        Buyable['CB14'].effect = function (x = getBuyableAmount(this.layer, this.id)) {
            let Effect = x.mul(this.levelEffect()).floor()
            Effect = Effect.max(0)
            return Effect
        }
        Buyable['CB14'].costNeed = function (x = getBuyableAmount(this.layer, this.id)) {
            let Cost = new Decimal(1.15).pow(x).mul(1000)
            Cost = Cost.mul(tmp.Civilization.CB1X_Price_Revise)
            Cost = Cost.mul(tmp.Civilization.Territory_LimitCost)
            Cost = Cost.max(0)
            return [['Civilization', 'points', Cost]];
        }

        for (let I = 1; I <= 8; I++) {
            Buyable['CB2' + I] = {}
            Buyable['CB2' + I].display = function () {
                return getI18N('Civilization.Buyable.' + this.id + '.Display', {
                    Level: getI18N('Civilization.Buyable.' + this.id + '.Level.' + getBuyableAmount('Civilization', this.id), {
                        LevelMax: tmp.Civilization.buyables[this.id].purchaseLimit
                    }),
                    Price: Common_Cost_Text(tmp.Civilization.buyables[this.id].costNeed)
                })
            }
            Buyable['CB2' + I].purchaseLimit = 12
            Buyable['CB2' + I].costNeed = function (x = getBuyableAmount(this.layer, this.id)) {
                let Cost = new Decimal(500).mul(tmp.Civilization.CB2X_Price_Revise)
                Cost = Cost.max(0)
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
                style['height'] = '90px'
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
        for (let I = 1; I <= 8; I++) {
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
                            LevelEffect: format(tmp.Civilization.milestones[this.id].levelEffect),
                            Effect: format(this.effect())
                        })
                    }
                    return getI18N('Civilization.Milestone.' + this.id + '.Desciption_Lock')
                }
                Milestone['CM' + I + J].style = function () {
                    let style = {}
                    style['height'] = '70px'
                    style['width'] = '186px'
                    style['border-radius'] = '0px'
                    return style
                }
            }
        }

        // CM11
        Milestone['CM11'].levelEffect = function () {
            let Effect = new Decimal(2)
            Effect = Effect.mul(tmp.Civilization.milestones['CM31'].effect.div(100).add(1))
            Effect = Effect.max(1)
            return Effect
        }
        Milestone['CM11'].done = function () {
            return getBuyableAmount('Civilization', 'CB21').gte(1)
        }
        Milestone['CM11'].effect = function (x = getBuyableAmount('Civilization', 'CB21')) {
            let Effect = new Decimal(tmp.Civilization.milestones['CM11'].levelEffect).pow(x)
            Effect = Effect.max(1)
            return Effect
        }

        // CM12
        Milestone['CM12'].levelEffect = function () {
            let Effect = new Decimal(5)
            Effect = Effect.mul(tmp.Civilization.milestones['CM31'].effect.div(100).add(1))
            Effect = Effect.max(0)
            return Effect
        }
        Milestone['CM12'].done = function () {
            return getBuyableAmount('Civilization', 'CB21').gte(3)
        }
        Milestone['CM12'].effect = function (x = getBuyableAmount('Civilization', 'CB21')) {
            let Effect = new Decimal(tmp.Civilization.milestones['CM12'].levelEffect).mul(x.sub(2))
            Effect = Effect.max(0)
            return Effect
        }

        // CM13
        Milestone['CM13'].done = function () {
            return getBuyableAmount('Civilization', 'CB21').gte(6)
        }

        // CM21
        Milestone['CM21'].levelEffect = function () {
            let Effect = new Decimal(40)
            Effect = Effect.mul(tmp.Civilization.milestones['CM31'].effect.div(100).add(1))
            Effect = Effect.max(0)
            return Effect
        }
        Milestone['CM21'].done = function () {
            return getBuyableAmount('Civilization', 'CB22').gte(1)
        }
        Milestone['CM21'].effect = function (x = getBuyableAmount('Civilization', 'CB22')) {
            let Effect = x.mul(tmp.Civilization.milestones['CM21'].levelEffect)
            Effect = Effect.max(0)
            return Effect
        }

        // CM22
        Milestone['CM22'].done = function () {
            return getBuyableAmount('Civilization', 'CB22').gte(5)
        }

        // CM23
        Milestone['CM23'].done = function () {
            return getBuyableAmount('Civilization', 'CB22').gte(8)
        }

        // CM31
        Milestone['CM31'].levelEffect = function () {
            let Effect = new Decimal(5)
            return Effect
        }
        Milestone['CM31'].done = function () {
            return getBuyableAmount('Civilization', 'CB23').gte(1)
        }
        Milestone['CM31'].effect = function (x = getBuyableAmount('Civilization', 'CB23')) {
            let Effect = x.mul(tmp.Civilization.milestones['CM31'].levelEffect)
            Effect = Effect.max(0)
            return Effect
        }

        // CM32
        Milestone['CM32'].done = function () {
            return getBuyableAmount('Civilization', 'CB23').gte(3)
        }

        // CM33
        Milestone['CM33'].done = function () {
            return getBuyableAmount('Civilization', 'CB23').gte(11)
        }

        // CM41
        Milestone['CM41'].levelEffect = function () {
            let Effect = new Decimal(0.01)
            Effect = Effect.mul(tmp.Civilization.milestones['CM31'].effect.div(100).add(1))
            Effect = new Decimal(1).sub(Effect)
            return Effect
        }
        Milestone['CM41'].done = function () {
            return getBuyableAmount('Civilization', 'CB24').gte(1)
        }
        Milestone['CM41'].effect = function (x = getBuyableAmount('Civilization', 'CB24')) {
            let Effect = tmp.Civilization.milestones['CM41'].levelEffect.pow(x)
            Effect = Effect.min(1)
            return Effect
        }

        // CM42
        Milestone['CM42'].done = function () {
            return getBuyableAmount('Civilization', 'CB24').gte(3)
        }

        // CM43
        Milestone['CM43'].done = function () {
            return getBuyableAmount('Civilization', 'CB24').gte(11)
        }

        // CM51
        Milestone['CM51'].levelEffect = function () {
            let Effect = new Decimal(25)
            Effect = Effect.mul(tmp.Civilization.milestones['CM31'].effect.div(100).add(1))
            return Effect
        }
        Milestone['CM51'].done = function () {
            return getBuyableAmount('Civilization', 'CB25').gte(1)
        }
        Milestone['CM51'].effect = function (x = getBuyableAmount('Civilization', 'CB25')) {
            let Effect = x.mul(tmp.Civilization.milestones['CM51'].levelEffect)
            Effect = Effect.max(0)
            return Effect
        }

        // CM52
        Milestone['CM52'].done = function () {
            return getBuyableAmount('Civilization', 'CB25').gte(4)
        }

        // CM53
        Milestone['CM53'].done = function () {
            return getBuyableAmount('Civilization', 'CB25').gte(7)
        }

        // CM61
        Milestone['CM61'].levelEffect = function () {
            let Effect = new Decimal(25)
            Effect = Effect.mul(tmp.Civilization.milestones['CM31'].effect.div(100).add(1))
            return Effect
        }
        Milestone['CM61'].done = function () {
            return getBuyableAmount('Civilization', 'CB26').gte(1)
        }
        Milestone['CM61'].effect = function (x = getBuyableAmount('Civilization', 'CB26')) {
            let Effect = x.mul(tmp.Civilization.milestones['CM61'].levelEffect)
            Effect = Effect.max(0)
            return Effect
        }

        // CM62
        Milestone['CM62'].done = function () {
            return getBuyableAmount('Civilization', 'CB26').gte(4)
        }

        // CM63
        Milestone['CM63'].done = function () {
            return getBuyableAmount('Civilization', 'CB26').gte(8)
        }

        // CM71
        Milestone['CM71'].levelEffect = function () {
            let Effect = new Decimal(10)
            Effect = Effect.mul(tmp.Civilization.milestones['CM31'].effect.div(100).add(1))
            return Effect
        }
        Milestone['CM71'].done = function () {
            return getBuyableAmount('Civilization', 'CB27').gte(1)
        }
        Milestone['CM71'].effect = function (x = getBuyableAmount('Civilization', 'CB27')) {
            let Effect = x.mul(tmp.Civilization.milestones['CM71'].levelEffect)
            Effect = Effect.max(0)
            return Effect
        }

        // CM72
        Milestone['CM72'].done = function () {
            return getBuyableAmount('Civilization', 'CB27').gte(5)
        }

        // CM73
        Milestone['CM73'].done = function () {
            return getBuyableAmount('Civilization', 'CB27').gte(7)
        }

        // CM81
        Milestone['CM81'].levelEffect = function () {
            let Effect = new Decimal(20)
            Effect = Effect.mul(tmp.Civilization.milestones['CM31'].effect.div(100).add(1))
            return Effect
        }
        Milestone['CM81'].done = function () {
            return getBuyableAmount('Civilization', 'CB28').gte(1)
        }
        Milestone['CM81'].effect = function (x = getBuyableAmount('Civilization', 'CB28')) {
            let Effect = x.mul(tmp.Civilization.milestones['CM81'].levelEffect)
            Effect = Effect.max(0)
            return Effect
        }

        // CM82
        Milestone['CM82'].done = function () {
            return getBuyableAmount('Civilization', 'CB28').gte(6)
        }

        // CM83
        Milestone['CM83'].done = function () {
            return getBuyableAmount('Civilization', 'CB27').gte(8)
        }

        return Milestone
    })(),

    // 函数
    // 更新函数
    update: function (diff) {
        player.Civilization.points = player.Civilization.points.add(tmp.Civilization.Point_Gain.mul(diff))
        if (player.Civilization.points.lt(0)) {
            player.Civilization.points = new Decimal(0)
        }
    },

    // TMP函数
    Point_Gain() {
        let Gain = new Decimal(0)

        UnExceeding = tmp.Civilization.Population.min(tmp.Civilization.Population_Max).mul(tmp.Civilization.buyables['CB11'].levelEffect[1])
        Exceeding = tmp.Civilization.Population.sub(tmp.Civilization.Population_Max).max(0).mul(tmp.Civilization.buyables['CB11'].levelEffect[1]).mul(new Decimal(1).sub(tmp.Civilization.Population_LimitRate))
        Gain = Gain.add(UnExceeding).add(Exceeding)

        Gain = Gain.mul(tmp.Civilization.buyables['CB12'].effect.add(1).max(1))
        Gain = Gain.mul(tmp.Civilization.milestones['CM21'].effect.div(100).add(1))

        Gain = Gain.max(0)
        return Gain
    },

    // 科技价格修正
    CB2X_Price_Revise() {
        let Level = getBuyableAmount('Civilization', 'CB21').pow(2).add(getBuyableAmount('Civilization', 'CB21')).div(2)
        Level = Level.add(getBuyableAmount('Civilization', 'CB22').pow(2).add(getBuyableAmount('Civilization', 'CB22')).div(2))
        Level = Level.add(getBuyableAmount('Civilization', 'CB23').pow(2).add(getBuyableAmount('Civilization', 'CB23')).div(2))
        Level = Level.add(getBuyableAmount('Civilization', 'CB24').pow(2).add(getBuyableAmount('Civilization', 'CB24')).div(2))
        Level = Level.add(getBuyableAmount('Civilization', 'CB25').pow(2).add(getBuyableAmount('Civilization', 'CB25')).div(2))
        Level = Level.add(getBuyableAmount('Civilization', 'CB26').pow(2).add(getBuyableAmount('Civilization', 'CB26')).div(2))
        Level = Level.add(getBuyableAmount('Civilization', 'CB27').pow(2).add(getBuyableAmount('Civilization', 'CB27')).div(2))
        Level = Level.add(getBuyableAmount('Civilization', 'CB28').pow(2).add(getBuyableAmount('Civilization', 'CB28')).div(2))
        return Level.max(1)
    },

    // 基础建筑价格修正
    CB1X_Price_Revise() {
        let Revise = new Decimal(1)
        Revise = Revise.div(tmp.Civilization.milestones['CM11'].effect)
        Revise = Revise.min(1)
        return Revise
    },
    // 基础建筑总效果
    CB1X_TotalEffect() {
        return new Decimal(1)
    },

    // 人口数
    Population() {
        let Population = tmp.Civilization.buyables['CB11'].effect
        Population = Population.max(0).floor()
        return Population
    },
    // 人口上限
    Population_Max() {
        let Max = new Decimal(10)
        Max = Max.add(tmp.Civilization.buyables['CB13'].effect)
        Max = Max.max(0).floor()
        return Max
    },
    // 人口软硬上限程度
    Population_LimitRate() {
        let Limit = new Decimal(1)
        Limit = Limit.mul(tmp.Civilization.milestones['CM41'].effect)
        Limit = Limit.min(1)
        return Limit
    },

    // 领土
    Territory() {
        let CB11 = getBuyableAmount('Civilization', 'CB11')
        let CB12 = getBuyableAmount('Civilization', 'CB12')
        let CB13 = getBuyableAmount('Civilization', 'CB13')
        let CB14 = getBuyableAmount('Civilization', 'CB14')
        let Total = CB11.add(CB12).add(CB13).add(CB14)
        Total = Total.max(1)
        return Total
    },
    // 领土上限
    Territory_Max() {
        let Max = new Decimal(100)
        Max = Max.add(tmp.Civilization.buyables['CB14'].effect)
        Max = Max.mul(tmp.Civilization.milestones['CM61'].effect.div(100).add(1))
        Max = Max.max(0)
        return Max
    },
    // 领土惩罚
    Territory_LimitCost() {
        let Cost = tmp.Civilization.Territory.sub(tmp.Civilization.Territory_Max).max(1).pow(0.125)
        return Cost
    }

    // 文本
    // 其他函数
    /*
    hotkeys: [
        {key: 'p', description: 'P: Reset for prestige points', onPress() { if (canReset(this.layer)) doReset(this.layer) } },],*/
})

function Tech_Cost(x) {
    let Cost = new Decimal(12).pow(x).mul(100)
    return Cost.mul(tmp.Civilization.CB2X_Revise)
}