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
                points: '统治点'
            },
            Science: {
                points: '突破点'
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
            CU14: `<h3>【CU14】防卫</h3><br><br>解锁【CB14 营地】<br><br>{{Text}}`,
        },
        Buyable: {
            CB11: `<h3>【CB11】住所</h3><br>Lv. {{Level}}<br><br>每级获得 {{LevelEffect1}} {{NamePopulation}}，每 1 {{NamePopulation}}每秒生产 {{LevelEffect2}} {{NamePoint}}<br><br>总效果：+{{Effect}} {{NamePopulation}}<br>{{Price}}`,
            CB12: `<h3>【CB12】工厂</h3><br>Lv. {{Level}}<br><br>{{NamePoint}}获得量 +{{LevelEffect}}%<br><br>总效果：+{{Effect}}%<br>{{Price}}`,
            CB13: `<h3>【CB13】农场</h3><br>Lv. {{Level}}<br><br>{{NamePopulation}}承载上限 +{{LevelEffect}}<br><br>总效果：+{{Effect}}<br>{{Price}}`,
            CB14: `<h3>【CB14】营地</h3><br>Lv. {{Level}}<br><br>{{NameTerritory}}上限 +{{LevelEffect}}<br><br>总效果：+{{Effect}}<br>{{Price}}`,
            CB21: {
                Display: `<h3>【CB21】材料技术</h3><br>Lv. {{Level}}<br><br>{{Price}}`,
                Level: {
                    0: `0/{{LevelMax}}`,
                    1: `1/{{LevelMax}} 石`,
                    2: `2/{{LevelMax}} 青铜`,
                    3: `3/{{LevelMax}} 铁`,
                    4: `4/{{LevelMax}} 玻璃`,
                    5: `5/{{LevelMax}} 水泥`,
                    6: `6/{{LevelMax}} 钢`,
                    7: `7/{{LevelMax}} 橡胶`,
                    8: `8/{{LevelMax}} 赛璐珞`,
                    9: `9/{{LevelMax}} 铝`,
                    10: `10/{{LevelMax}} 酚醛塑料`,
                    11: `11/{{LevelMax}} 钨`,
                    12: `12/{{LevelMax}} 不锈钢`,
                }
            },
            CB22: {
                Display: `<h3>【CB22】能源技术</h3><br>Lv. {{Level}}<br><br>{{Price}}`,
                Level: {
                    0: `0/{{LevelMax}}`,
                    1: `1/{{LevelMax}} 火`,
                    2: `2/{{LevelMax}} 人畜力`,
                    3: `3/{{LevelMax}} 风车`,
                    4: `4/{{LevelMax}} 水车`,
                    5: `5/{{LevelMax}} 煤炭`,
                    6: `6/{{LevelMax}} 蒸汽机`,
                    7: `7/{{LevelMax}} 煤气`,
                    8: `8/{{LevelMax}} 石油`,
                    9: `9/{{LevelMax}} 内燃机`,
                    10: `10/{{LevelMax}} 电力`,
                    11: `11/{{LevelMax}} 汽油`,
                    12: `12/{{LevelMax}} 交流电`,
                }
            },
            CB23: {
                Display: `<h3>【CB23】信息技术</h3><br>Lv. {{Level}}<br><br>{{Price}}`,
                Level: {
                    0: `0/{{LevelMax}}`,
                    1: `1/{{LevelMax}} 语言`,
                    2: `2/{{LevelMax}} 文字`,
                    3: `3/{{LevelMax}} 造纸技术`,
                    4: `4/{{LevelMax}} 印刷技术`,
                    5: `5/{{LevelMax}} 邮政系统`,
                    6: `6/{{LevelMax}} 电报`,
                    7: `7/{{LevelMax}} 打字机`,
                    8: `8/{{LevelMax}} 电话`,
                    9: `9/{{LevelMax}} 留声机`,
                    10: `10/{{LevelMax}} 电影`,
                    11: `11/{{LevelMax}} 无线电`,
                    12: `12/{{LevelMax}} 计算机`,
                }
            },
            CB24: {
                Display: `<h3>【CB24】医疗技术</h3><br>Lv. {{Level}}<br><br>{{Price}}`,
                Level: {
                    0: `0/{{LevelMax}}`,
                    1: `1/{{LevelMax}} 草药`,
                    2: `2/{{LevelMax}} 解剖`,
                    3: `3/{{LevelMax}} 公共卫生系统`,
                    4: `4/{{LevelMax}} 系统性观察`,
                    5: `5/{{LevelMax}} 疫苗`,
                    6: `6/{{LevelMax}} 麻醉技术`,
                    7: `7/{{LevelMax}} 消毒技术`,
                    8: `8/{{LevelMax}} 细菌理论`,
                    9: `9/{{LevelMax}} 无菌外科手术`,
                    10: `10/{{LevelMax}} 医学成像`,
                    11: `11/{{LevelMax}} 阿司匹林`,
                    12: `12/{{LevelMax}} 化学疗法`,
                }
            },
            CB25: {
                Display: `<h3>【CB25】交通技术</h3><br>Lv. {{Level}}<br><br>{{Price}}`,
                Level: {
                    0: `0/{{LevelMax}}`,
                    1: `1/{{LevelMax}} 动物驯化`,
                    2: `2/{{LevelMax}} 轮子`,
                    3: `3/{{LevelMax}} 帆船`,
                    4: `4/{{LevelMax}} 罗马道路`,
                    5: `5/{{LevelMax}} 马镫`,
                    6: `6/{{LevelMax}} 指南针`,
                    7: `7/{{LevelMax}} 远洋帆船`,
                    8: `8/{{LevelMax}} 蒸汽轮船`,
                    9: `9/{{LevelMax}} 铁路`,
                    10: `10/{{LevelMax}} 自行车`,
                    11: `11/{{LevelMax}} 汽车`,
                    12: `12/{{LevelMax}} 飞机`,
                }
            },
            CB26: {
                Display: `<h3>【CB26】军事技术</h3><br>Lv. {{Level}}<br><br>{{Price}}`,
                Level: {
                    0: `0/{{LevelMax}}`,
                    1: `1/{{LevelMax}} 金属武器与盔甲`,
                    2: `2/{{LevelMax}} 弩`,
                    3: `3/{{LevelMax}} 希腊火`,
                    4: `4/{{LevelMax}} 火药`,
                    5: `5/{{LevelMax}} 前装式滑膛炮`,
                    6: `6/{{LevelMax}} 制式步枪`,
                    7: `7/{{LevelMax}} 来复枪与圆锥子弹`,
                    8: `8/{{LevelMax}} 铁甲舰`,
                    9: `9/{{LevelMax}} 后装式步枪与定装弹药`,
                    10: `10/{{LevelMax}} 无烟火药`,
                    11: `11/{{LevelMax}} 全自动机枪`,
                    12: `12/{{LevelMax}} 潜艇`,
                }
            },
            CB27: {
                Display: `<h3>【CB27】工业技术</h3><br>Lv. {{Level}}<br><br>{{Price}}`,
                Level: {
                    0: `0/{{LevelMax}}`,
                    1: `1/{{LevelMax}} 手工工具`,
                    2: `2/{{LevelMax}} 杠杆与滑轮`,
                    3: `3/{{LevelMax}} 模具与冲压`,
                    4: `4/{{LevelMax}} 机床`,
                    5: `5/{{LevelMax}} 可替换零件`,
                    6: `6/{{LevelMax}} 工厂系统`,
                    7: `7/{{LevelMax}} 流水线`,
                    8: `8/{{LevelMax}} 质量控制`,
                    9: `9/{{LevelMax}} 连续生产流程`,
                    10: `10/{{LevelMax}} 工业开发实验室`,
                    11: `11/{{LevelMax}} 全球供应链`,
                    12: `12/{{LevelMax}} 工业标准化`,
                }
            },
            CB28: {
                Display: `<h3>【CB28】农业技术</h3><br>Lv. {{Level}}<br><br>{{Price}}`,
                Level: {
                    0: `0/{{LevelMax}}`,
                    1: `1/{{LevelMax}} 植物驯化`,
                    2: `2/{{LevelMax}} 灌溉农业`,
                    3: `3/{{LevelMax}} 犁`,
                    4: `4/{{LevelMax}} 轮作制度`,
                    5: `5/{{LevelMax}} 种子条播机`,
                    6: `6/{{LevelMax}} 人工选育`,
                    7: `7/{{LevelMax}} 收割机`,
                    8: `8/{{LevelMax}} 化学肥料`,
                    9: `9/{{LevelMax}} 杀虫剂`,
                    10: `10/{{LevelMax}} 冷藏运输`,
                    11: `11/{{LevelMax}} 拖拉机`,
                    12: `12/{{LevelMax}} 杂交育种`,
                }
            },
        },
        Milestone: {
            CM11: {
                Title_Lock: `<h6 style='height:0px'>？？？`,
                Title_Unlock: `<h6 style='height:0px'>【CM11】材料革新`,
                Desciption_Lock: `<h6 style='height:25px'>【CB21 材料技术】达到 1 级以揭示此里程碑效果`,
                Desciption_Unlock: `<h6 style='height:25px'>【CB1X 基础建筑】的价格 ÷({{LevelEffect}}^Lv)<br>效果：÷{{Effect}}`,
            },
            CM12: {
                Title_Lock: `<h6 style='height:0px'>？？？`,
                Title_Unlock: `<h6 style='height:0px'>【CM12】耐用器械`,
                Desciption_Lock: `<h6 style='height:25px'>【CB21 材料技术】达到 3 级以揭示此里程碑效果`,
                Desciption_Unlock: `<h6 style='height:25px'>【CB12 工厂】和【CB13 农场】的效果 +({{LevelEffect}}×(Lv-2))%<br>效果：+{{Effect}}%`,
            },
            CM13: {
                Title_Lock: `<h6 style='height:0px'>？？？`,
                Title_Unlock: `<h6 style='height:0px'>【CM13】新式加工工艺`,
                Desciption_Lock: `<h6 style='height:25px'>【CB21 材料技术】达到 6 级以揭示此里程碑效果`,
                Desciption_Unlock: `<h6 style='height:25px'>占位<br>效果：+{{Amount}}%`,
            },
            CM21: {
                Title_Lock: `<h6 style='height:0px'>？？？`,
                Title_Unlock: `<h6 style='height:0px'>【CM21】燃料供应`,
                Desciption_Lock: `<h6 style='height:25px'>【CB22 能源技术】达到 1 级以揭示此里程碑效果`,
                Desciption_Unlock: `<h6 style='height:25px'>文明点获得 +({{LevelEffect}}×Lv)%<br>效果：+{{Effect}}%`,
            },
            CM31: {
                Title_Lock: `<h6 style='height:0px'>？？？`,
                Title_Unlock: `<h6 style='height:0px'>【CM31】学院`,
                Desciption_Lock: `<h6 style='height:25px'>【CB23 信息技术】达到 1 级以揭示此里程碑效果`,
                Desciption_Unlock: `<h6 style='height:25px'>除【CM2X 信息里程碑】外的里程碑基础效果 +({{LevelEffect}}×Lv)%<br>效果：+{{Effect}}%`,
            },
            CM41: {
                Title_Lock: `<h6 style='height:0px'>？？？`,
                Title_Unlock: `<h6 style='height:0px'>【CM41】希波克拉底医学体系`,
                Desciption_Lock: `<h6 style='height:25px'>【CB24 医疗技术】达到 1 级以揭示此里程碑效果`,
                Desciption_Unlock: `<h6 style='height:25px'>超过上限的人口降低效果 -×({{LevelEffect}}^Lv)<br>效果：×{{Effect}}`,
            },
            CM51: {
                Title_Lock: `<h6 style='height:0px'>？？？`,
                Title_Unlock: `<h6 style='height:0px'>【CM51】交通枢纽`,
                Desciption_Lock: `<h6 style='height:25px'>【CB25 交通技术】达到 1 级以揭示此里程碑效果`,
                Desciption_Unlock: `<h6 style='height:25px'>【CB11 住所】的效果 +({{LevelEffect}}×Lv)%<br>效果：+{{Effect}}%`,
            },
            CM61: {
                Title_Lock: `<h6 style='height:0px'>？？？`,
                Title_Unlock: `<h6 style='height:0px'>【CM61】罗马军团`,
                Desciption_Lock: `<h6 style='height:25px'>【CB26 军事技术】达到 1 级以揭示此里程碑效果`,
                Desciption_Unlock: `<h6 style='height:25px'>领土 +({{LevelEffect}}×Lv)%<br>效果：+{{Effect}}%`,
            },
            CM71: {
                Title_Lock: `<h6 style='height:0px'>？？？`,
                Title_Unlock: `<h6 style='height:0px'>【CM71】工业区`,
                Desciption_Lock: `<h6 style='height:25px'>【CB27 工业技术】达到 1 级以揭示此里程碑效果`,
                Desciption_Unlock: `<h6 style='height:25px'>【CB12 工厂】的效果 +({{LevelEffect}}×Lv)%<br>效果：+{{Effect}}%`,
            },
            CM81: {
                Title_Lock: `<h6 style='height:0px'>？？？`,
                Title_Unlock: `<h6 style='height:0px'>【CM81】集成农业`,
                Desciption_Lock: `<h6 style='height:25px'>【CB28 农业技术】达到 1 级以揭示此里程碑效果`,
                Desciption_Unlock: `<h6 style='height:25px'>【CB13 农场】的效果 +({{LevelEffect}}×Lv)%<br>效果：+{{Effect}}%`,
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