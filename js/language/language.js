let currentLang = 'zh'; // 默认语言
let langData = null;    // 当前加载的语言数据

// 动态加载语言文件的函数
async function loadLanguage(langCode) {
    try {
        const module = await import(`./${langCode}.js`);
        langData = module[langCode]; // 假设导出对象名为 en/ch
        currentLang = langCode;
    } catch (e) {
        console.error('Failed to load language file:', e);
    }
}

// 初始化加载默认语言
loadLanguage(currentLang);

// 修改 getI18N 函数
function getI18N(keyPath, variables = {}) {
    if (!langData) return 'Loading...'; // 数据未加载时的占位文本
    
    // 解析键路径
    const keys = keyPath.split('.');
    let value = langData;
    for (const key of keys) {
        value = value?.[key];
        if (value === undefined) break;
    }
    
    // 处理动态变量（如果 value 是字符串）
    if (typeof value === 'string') {
        return value.replace(/\{{(.*?)}}/g, (_, varName) => variables[varName]);
    }
    return value || '[Missing Translation]';
}

// 监听语言切换事件（假设通过按钮触发）
function switchLanguage(langCode) {
    loadLanguage(langCode)
}