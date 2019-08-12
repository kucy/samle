// 微信小程序
export const AppId = 'wx047afda668a7540d';
export const AppSecret = '411936c334e348a2ad0b15d9af9b0db6';
export const WxUrl = (code: string) => {
  return `https://api.weixin.qq.com/sns/jscode2session?appid=${AppId}&secret=${AppSecret}&js_code=${code}&grant_type=authorization_code`;
};

// 百度Ai

export const BaiDuApiKey = 'ARPGzSzSqh68YYRNN7Hx5RYL';
export const BaiDuAppSecret = 'QCHG0wGICsQAz6dNEwd6nmsPXmgRch9C';
const BaiDuHostName = 'https://aip.baidubce.com/';
const BaiDuPath = 'oauth/2.0/token';
export const BaiDuUrl = `${BaiDuHostName}${BaiDuPath}?grant_type=client_credentials&client_id=${BaiDuApiKey}&client_secret=${BaiDuAppSecret}`;
export const ImageClassify = (token: string) => {
  return `${BaiDuHostName}rest/2.0/image-classify/v2/advanced_general?access_token=${token}`;
};
