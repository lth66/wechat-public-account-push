/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wx15c5e4136bbd3a41',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: '49fc70286fac251b96bc7a7d83a2397d',

  PROVINCE: '上海',
  CITY: '上海',

  USERS: [
    {
      // 想要发送的人的名字
      name: '佳宝贝',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oHmdC50qcQdu8bUfSz3x8uT_RGbY',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'lKYTHb2LRO_-x2AgjnnxhUFLNg0x5OQHDj8oAAJRiNE',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '05-31',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '佳宝贝', year: '1996', date: '04-15',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '*生日', name: '老公', year: '1996', date: '06-21',
        },
        {
          type: '*生日', name: '咱妈', year: '1967', date: '12-14',
        },
        {
          type: '*生日', name: '咱爸', year: '1967', date: '10-24',
        },
        {
          type: '*生日', name: '妈', year: '1973', date: '02-22',
        },
        {
          type: '*生日', name: '爸', year: '1969', date: '09-02',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2015-11-22' },
        // 结婚纪念日
        { keyword: 'marry_day', date: '2021-05-02' },
      ],
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: 'wzuhHAdS24nUSkyrTZ9R6YPYZFLa06-4oZuikYo4exg',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oHmdC50qcQdu8bUfSz3x8uT_RGbY',
    }
  ],

}

module.exports = USER_CONFIG

