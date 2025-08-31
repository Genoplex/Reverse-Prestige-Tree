export const zh = {
    Mod: {
        Name: '逆声望树',
    },
    Common: {
        PriceLabel: '价格：',
        Resources: {
            Civilization: {
                points: '文明点',
                Population: '人口',
                Territory: '领土',
            },
            Empire: {
                points: '统治力'
            },
            Science: {
                points: '科学点'
            },
        },
        Gain: '(+ {{Amount}} /秒)',
        Loss: '(- {{Amount}} /秒)',
        Reset_Text_1: '重置以获得 ',
        Reset_Text_2: '下一个需要',
    },

    Civilization: {
        Title: '文明',
        LayerName: {
            Building: '基础建筑',
            Technology: '科学技术',
        },
        Tooltip: '<h2 style="color: #EDB3FF; text-shadow: 1px 1px 10px #EDB3FF;"> {{Amount}} {{Name}}</h2>',
        TabFormat: {
            Common: {
                Resource: `<h3>你有 <h2 style="color: #EDB3FF; text-shadow: 1px 1px 10px #EDB3FF;"> {{Amount}} <h3>{{Name}}`,
            },
            Civil: {
                Population: `<h3>你的文明有<h2 style="color: #EDB3FF; text-shadow: 1px 1px 10px #EDB3FF;"> {{Amount1}} </h2><h3>{{Name}}，而你的文明的人口承载上限是<h2 style="color: #EDB3FF; text-shadow: 1px 1px 10px #EDB3FF;"> {{Amount2}} </h2><h3>{{Name}}`,
                Population_Effect: `<h3>超出上限部分的效率将降低 <h2 style="color: #EDB3FF; text-shadow: 1px 1px 10px #EDB3FF;"> {{Amount}}%</h2>`,
                Territory: `<h3>你的文明已经占用了<h2 style="color: #EDB3FF; text-shadow: 1px 1px 10px #EDB3FF;"> {{Amount1}} </h2><h3>{{Name}}，而你的文明的{{Name}}上限是 <h2 style="color: #EDB3FF; text-shadow: 1px 1px 10px #EDB3FF;"> {{Amount2}} </h2> <h3>{{Name}}`,
                Territory_Effect: `<h3>超出上限的{{Name}}使得【CB1X 基础建筑】的价格提高至<h2 style="color: #EDB3FF; text-shadow: 1px 1px 10px #EDB3FF;"> ×{{Amount}}</h2>`,
            },
            Technology: {
                Tech_Price_Revise: `<h3>【CB2X 科学技术】系列购买项的价格受科技规模提高 <h2 style="color: #EDB3FF; text-shadow: 1px 1px 10px #EDB3FF;">×{{Amount}}</h2>`,
            }
        },
        Upgrade: {
            CU11: `<h3>【CU11】文明启程</h3><br><br>解锁【CB11 住所】<br><br>{{Text}}`,
            CU12: `<h3>【CU12】定居点</h3><br><br>解锁【CB12 工厂】和【CB13 农场】<br><br>{{Text}}`,
            CU13: `<h3>【CU13】科学技术</h3><br><br>解锁【CB2X 科学技术】<br><br>{{Text}}`,
        },
        Buyable: {
            CB11: `<h3>【CB11】住所</h3><br>Lv. {{Amount1}}<br><br>每级获得 {{Amount2}} {{Name2}}，每 1 {{Name2}}每秒生产 {{Amount3}} {{Name1}}<br><br>总效果：+{{Amount4}} {{Name2}}<br>{{Text}}`,
            CB12: `<h3>【CB12】工厂</h3><br>Lv. {{Amount1}}<br><br>{{Name}}获得量 +{{Amount2}}%<br><br>总效果：+{{Amount3}}%<br>{{Text}}`,
            CB13: `<h3>【CB13】农场</h3><br>Lv. {{Amount1}}<br><br>{{Name}}承载上限 +{{Amount2}}<br><br>总效果：+{{Amount3}}<br>{{Text}}`,
            CB21: {
                Display: `<h3>【CB21】材料技术</h3></h3><br>Lv. {{Amount}}<br><br>{{Text}}`,
                Level: {
                    0: `0`,
                    1: `1 石`,
                    2: `2 青铜`,
                    3: `3 铁`,
                    4: `4 玻璃`,
                    5: `5 水泥`,
                    6: `6 钢`,
                    7: `7 橡胶`,
                    8: `8 赛璐珞`,
                    9: `9 铝`,
                    10: `10 酚醛塑料`,
                    11: `11 钨`,
                    12: `12 不锈钢`,
                }
            },
            CB22: {
                Display: `<h3>【CB22】能源技术</h3></h3><br>Lv. {{Amount}}<br><br>{{Text}}`,
                Level: {
                    0: `0`,
                    1: `1 火`,
                    2: `2 人畜力`,
                    3: `3 风车`,
                    4: `4 水车`,
                    5: `5 煤炭`,
                    6: `6 蒸汽机`,
                    7: `7 煤气`,
                    8: `8 石油`,
                    9: `9 内燃机`,
                    10: `10 电力`,
                    11: `11 汽油`,
                    12: `12 交流电`,
                }
            },
            CB23: {
                Display: `<h3>【CB23】信息技术</h3></h3><br>Lv. {{Amount1}}<br><br>每级使{{Name}}获得量 ×{{Amount2}}<br><br>总效果：×{{Amount3}}<br>{{Text}}`,
                Level: {
                    0: `0`,
                    1: `1 语言`,
                    2: `2 文字`,
                    3: `3 造纸技术`,
                    4: `4 印刷技术`,
                    5: `5 邮政系统`,
                    6: `6 电报`,
                    7: `7 打字机`,
                    8: `8 电话`,
                    9: `9 留声机`,
                    10: `10 电影`,
                    11: `11 无线电`,
                    12: `12 计算机`,
                }
            },
            CB24: {
                Display: `<h3>【CB24】医疗技术</h3></h3><br>Lv. {{Amount1}}<br><br>每级使文明承载上限 ×{{Amount2}}<br><br>总效果：×{{Amount3}}<br>{{Text}}`,
                Level: {
                    0: `0`,
                    1: `1 草药`,
                    2: `2 解剖`,
                    3: `3 公共卫生系统`,
                    4: `4 系统性观察`,
                    5: `5 疫苗`,
                    6: `6 麻醉技术`,
                    7: `7 消毒技术`,
                    8: `8 细菌理论`,
                    9: `9 无菌外科手术`,
                    10: `10 医学成像`,
                    11: `11 阿司匹林`,
                    12: `12 化学疗法`,
                }
            },
            CB25: {
                Display: `<h3>【CB25】交通技术</h3></h3><br>Lv. {{Amount1}}<br><br>每级使【CB11 住所】的基础效果 ×{{Amount2}}<br><br>总效果：×{{Amount3}}<br>{{Text}}`,
                Level: {
                    0: `0`,
                    1: `1 畜力`,
                    2: `2 轮子`,
                    3: `3 帆船`,
                    4: `4 蒸汽机车`,
                    5: `5 汽车`,
                    6: `6 飞机`,
                    7: `7 集装箱`,
                    8: `8 高速铁路`,
                    9: `9 GPS`,
                    10: `10 自动驾驶`,
                }
            },
            CB26: {
                Display: `<h3>【CB26】环境技术</h3></h3><br>Lv. {{Amount1}}<br><br>每级使超过文明承载上限的{{Name}}的效率降低百分比 ×{{Amount2}}<br><br>总效果：÷{{Amount3}}<br>{{Text}}`,
                Level: {
                    0: `0`,
                    1: `1 原始开发`,
                    2: `2 气象观测`,
                    3: `3 地质学`,
                    4: `4 环保意识`,
                    5: `5 遥感技术`,
                    6: `6 污染控制`,
                    7: `7 气候学`,
                    8: `8 废料回收`,
                    9: `9 碳捕捉`,
                    10: `10 生态工程`,
                }
            },
            CB27: {
                Display: `<h3>【CB27】工业技术</h3></h3><br>Lv. {{Amount1}}<br><br>解锁【CB12 工厂】购买项<br>每级使【CB12 工厂】购买项的基础效率 ×{{Amount2}}<br><br>总效果：×{{Amount3}}<br>{{Text}}`,
                Level: {
                    0: `0`,
                    1: `1 手工`,
                    2: `2 杠杆原理`,
                    3: `3 标准化`,
                    4: `4 机床`,
                    5: `5 流水线`,
                    6: `6 自动化`,
                    7: `7 计算辅助`,
                    8: `8 3D打印`,
                    9: `9 物联网`,
                    10: `10 自组织工业`,
                }
            },
            CB28: {
                Display: `<h3>【CB28】农业技术</h3></h3><br>Lv. {{Amount1}}<br><br>解锁【CB13 农场】购买项<br>每级使【CB13 农场】购买项的基础效率 ×{{Amount2}}<br><br>总效果：×{{Amount3}}<br>{{Text}}`,
                Level: {
                    0: `0`,
                    1: `1 植物驯化`,
                    2: `2 灌溉`,
                    3: `3 选育`,
                    4: `4 化肥与农药`,
                    5: `5 机械化`,
                    6: `6 绿色革命`,
                    7: `7 转基因`,
                    8: `8 无土栽培`,
                    9: `9 保鲜技术`,
                    10: `10 合成食品`,
                }
            },
        },
        Milestone: {
            CM11: {
                Title_Lock: `<h6 style='height:0px'>？？？`,
                Title_Unlock: `<h6 style='height:0px'>【CM11】材料革新`,
                Desciption_Lock: `<h6 style='height:25px'>【CB21 材料技术】达到 1 级以揭示此里程碑效果`,
                Desciption_Unlock: `<h6 style='height:25px'>【CB1X 基础建筑】的价格 ÷(1.25^Lv)<br>效果：÷{{Amount}}`,
            },
            CM12: {
                Title_Lock: `<h6 style='height:0px'>？？？`,
                Title_Unlock: `<h6 style='height:0px'>【CM12】耐用器械`,
                Desciption_Lock: `<h6 style='height:25px'>【CB21 材料技术】达到 3 级以揭示此里程碑效果`,
                Desciption_Unlock: `<h6 style='height:25px'>【CB12 工厂】和【CB13 农场】的效果 +(5×(Lv-2))%<br>效果：+{{Amount}}%`,
            },
            CM13: {
                Title_Lock: `<h6 style='height:0px'>？？？`,
                Title_Unlock: `<h6 style='height:0px'>【CM13】新式加工工艺`,
                Desciption_Lock: `<h6 style='height:25px'>【CB21 材料技术】达到 6 级以揭示此里程碑效果`,
                Desciption_Unlock: `<h6 style='height:25px'>占位<br>效果：+{{Amount}}%`,
            },
        }
    },

    Empire: {
        Title: '帝国',
        LayerName: {
            Empire: '帝国'
        },
        Tooltip: {
            Lock: '<h3>需要 <h2 style="color: #EDB3FF; text-shadow: 1px 1px 10px #EDB3FF;">{{Amount}} {{Name}}</h2> <h3>解锁此节点',
        },
        TabFormat: {
            Empire: {
                Resource: `<h3>你有 <h2 style="color: #E5DAB7; text-shadow: 1px 1px 10px #E5DAB7;"> {{Amount}} <h3>{{Name}}`,
            }
        }
    },

    Science: {
        Title: '科学',
        LayerName: {
            Science: '科学'
        },
        Tooltip: {
            Lock: '<h3>需要 <h2 style="color: #EDB3FF; text-shadow: 1px 1px 10px #EDB3FF;">{{Amount}} {{Name}}</h2> <h3>解锁此节点',
        },
        TabFormat: {
            Science: {
                Resource: `<h3>你有 <h2 style="color: #E5DAB7; text-shadow: 1px 1px 10px #E5DAB7;"> {{Amount}} <h3>{{Name}}`,
            }
        }
    }
}