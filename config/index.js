export const config = {
    // 公众号配置
    // 公众号appId
    appId: "wx449b543802edd30b",
    // 公众号appSecret
    appSecret: "5c32124a58d0c2af03609853d960641b",
    // 模板消息id
    templateId: "LUN2ZullbM1-hfiadw7NhdAcpgdbdMBE1NVJTwQeCnQ",
    // 接收公众号消息的微信号，如果有多个，需要在[]里用英文逗号间隔，例如["wx1", "wx2"]
    user: ["gs1033694784"，"z13199868525"],
     
    // 信息配置
    // 所在省份
    province: "河北",
    // 所在城市
    city: "唐山",
    // 生日，修改名字为对应需要显示的名字，如果生日为农历， type为 r
    birthdays: [
      {"name": "老婆", "year": "1994", "date": "10-05", "type": 'new'},
    ],
    // 在一起的日子，格式同上
    loveDate: "2020-07-22"
    }

// {{date.DATA}}  
// 城市：{{city.DATA}}  
// 天气：{{weather.DATA}}  
// 最低气温: {{min_temperature.DATA}}  
// 最高气温: {{max_temperature.DATA}}  
// 今天是我们恋爱的第{{love_day.DATA}}天
// 今天是我们结婚的第{{marry_day.DATA}}天
// {{birthday_message.DATA}}

// {{note_en.DATA}}  
// {{note_ch.DATA}}
