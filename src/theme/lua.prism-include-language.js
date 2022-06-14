(function (Prism) {
    Prism.languages.lua = {
        'builtin': /\b(?:_G|_VERSION|assert|collectgarbage|error|getfenv|getmetatable|ipairs|loadstring|newproxy|next|pairs|pcall|print|rawequal|rawget|rawset|select|setfenv|setmetatable|tonumber|tostring|type(?:\()|unpack|xpcall|Enum|game|plugin|shared|script|workspace|delay|DebuggerManager|elapsedTime|LoadLibrary|PluginManager|printidentity|require|settings|spawn|stats|tick|time|typeof|UserSettings|version|wait|warn|task|string|number|boolean|any<+[a-zA-Z]+>)\b/,
        'comment': /^#!.+|--(?:\[(=*)\[[\s\S]*?\]\1\]|.*)/m,
        // \z may be used to skip the following space
        'string': {
            pattern: /(["'])(?:(?!\1)[^\\\r\n]|\\z(?:\r\n|\s)|\\(?:\r\n|[^z]))*\1|\[(=*)\[[\s\S]*?\]\2\]/,
            greedy: true
        },
        'number': /\b0x[a-f\d]+(?:\.[a-f\d]*)?(?:p[+-]?\d+)?\b|\b\d+(?:\.\B|(?:\.\d*)?(?:e[+-]?\d+)?\b)|\B\.\d+(?:e[+-]?\d+)?\b/i,
        'keyword': /\b(?:and|break|do|else|elseif|end|false|for|function|goto|if|in|local|nil|not|or|repeat|return|then|true|until|while|export|type|->)\b/,
        'function': /(?!\d)\w+(?=\s*(?:[({]))/,
        'operator': [
            /[-+*%^&|#]|\/\/?|<[<=]?|>[>=]?|[=~]=?/,
            {
                // Match ".." but don't break "..."
                pattern: /(^|[^.])\.\.(?!\.)/,
                lookbehind: true
            }
        ],
        'punctuation': /[\[\](){},;]|\.+|:+/
    };
}(Prism));