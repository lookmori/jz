import { NextResponse } from 'next/server';
import { v4 as uuidv4 } from 'uuid';
import jwt from 'jsonwebtoken';
// COZE 相关环境变量
const COZE_CLIENT_ID_JWT = process.env.COZE_CLIENT_ID_JWT;
const COZE_PUBLIC_KEY_ID_JWT = process.env.COZE_PUBLIC_KEY_ID_JWT || 'DAl7grpcR7J4o5iZGeZYPXZby2gt8cCpG6yqcUuG8QI';
const COZE_API_BASE_JWT = process.env.COZE_API_BASE_JWT || 'https://api.coze.cn';
const COZE_WORKFLOW_ID_JWT = process.env.COZE_WORKFLOW_ID_JWT;
// 直接内联私钥
const PRIVATE_KEY = `-----BEGIN PRIVATE KEY-----
MIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDFhDWbiJ5M+06t
1R7aF7qm+5Z1/fJhPTtGTIJqIirNvr19YIbjOVBpk/vleXOhbdLx1WKyMzlgg8eY
4Jqql8oSDkTsIU+1CNX5SVtX4NNK2XLuFSwBx2R6rtdSWe3jCieRlMoIgXqUOX2X
Pso9sm99SpkexD7RyyXE1hoB7wMBawuqVEqUXutxe9EkXO/kQyp5qsQfF9gvQuY0
yMuO8hhZtndLinirxlkQ2lFYrJ/K/y0uexdxrlowBw81X58gdw/1v9i9O/E9BffV
DDZ0GkSwS9MBTvvVtt5xEIggGVnRnP/KGH716ZcZc1I/HrrkdZsJTyncKp/CwKmv
5uX51NXHAgMBAAECggEAPc2FIqIoekkGUPFHQpG7N0WwykHIRjHtKq2E/yWqxA8j
Zqg9/Lpx1V9XKfILQt9E6qPMypqpoPALE+RvsOJm+ahaW5J+yNQ3c9XGzaQNKTYK
NsIML5BO+e5cdKmr/Gcwg2aNowS0sM2eZSViDdUX+pnNeKmKSIXqzwD5SVKa26Ww
20Ly0ayrIgxH8NDgdFBWAb58DQo1PrLWfjqkoxkD3edOIURTsdHqWyBGZlMYNA7c
12pKKA12Sl+JnYbJld0guANFlHYHRVrHIXj7qdmnpI8yVzY5ijDvfV587QeLNYqz
YSHwF8FnbVkJ9xwqcUFa/QEvwYS3bVrhGB2XsdlmeQKBgQDhPVity7I9jXrdA9Dp
1HVEcAHPdl5pICvek1RvgQhNBwm6tvBugfkAyXVWJuA4qHSZUSlT1kBuVHqEzNbn
q9uCfuV2zm2BH5lYtZByp8C57019wXVwvB0XW4idsoqpxTyVfa9BWW716DxdiLPh
RJRrf4ufy5XirPRmGcS2k07ZKQKBgQDgfaBSw//eJoZkwu04M2LIfmPqlZVYgHYC
wUFjxDAg8CzQcpcLR1zM/v++P0TCYKD/9WyPTUKisrXRklsslVM7jlXVivcp4dz+
vwHCLWuRmtavgKV4WBUo1ca0r03OYHTaLkia5o7msWMB6yqOwO7iOJ91LteaT3z5
Nskr5KvlbwKBgQDdd0tVf57fJNh0rkbhU5SGWTd+fN2xsf9Qlz6DcLTvwAbR/wSD
M+rY2j00G3+GViRnh8UB+P1bPldFcn+wRWvNcOZAnhJPzvkhn0zLX6SBbgmcp/bI
hT55c/ftTttGuHesaWtD7yLKSbHpKfvseFkTJdLsqOnUesjIB3hDKK5zmQKBgExt
eK+02t+e7hJP6sM/e1oW7Z1n37iJw6Ocd86ndFtCaX9uA85rNUT1a8wxbg9fJnD9
9T+0ZgNOJGh9E11SWUvlYYOaFBvGMZ7pGIgrPnwL4xtNCQi3tDx6y3OoWyzv2diN
+VoDNJOFwNdeYNbJCIssC92xXOXEOh/+bu7qozsxAoGBAK+CcWJPP9CEit7O4S71
1czZAfRBkDDiSpMUtG0eywomYGHtssfCc6qZfrc32AYzeJADObydBrn3BkpL/Mbf
/qDv/n9ku2fPgBCXtHvdTyzMF82D2OjeMo9DZgOI6ArN6mmGZhmb+VTPvSCv0Tds
OtkB2pwCleqyL2df4Dcr3wtr
-----END PRIVATE KEY-----`

export async function POST(request: Request) {
  try {
    // 解析请求体
    const body = await request.json();
    const { prompt } = body;

    if (!prompt) {
      return NextResponse.json({ error: '缺少提示词参数' }, { status: 400 });
    }

       // 1. 生成 Coze JWT
       const now = Math.floor(Date.now() / 1000);
       const payload = {
         iss: COZE_CLIENT_ID_JWT,
         aud: 'api.coze.cn',
         iat: now,
         exp: now + 300,
         jti: uuidv4(),
       };
       // 从环境变量读取私钥内容
       const privateKey = PRIVATE_KEY;
   
       if (!privateKey) {
         return NextResponse.json({ error: '缺少 COZE_PRIVATE_KEY_JWT 环境变量' }, { status: 500 });
       }
   
       const cozeJwt = jwt.sign(payload, privateKey, {
         algorithm: 'RS256',
         keyid: COZE_PUBLIC_KEY_ID_JWT,
       });
       console.log(cozeJwt)
       // 2. 换取 access_token
       const tokenResp = await fetch(`${COZE_API_BASE_JWT}/api/permission/oauth2/token`, {
         method: 'POST',
         headers: {
           'Content-Type': 'application/json',
           'Authorization': `Bearer ${cozeJwt}`,
         },
         body: JSON.stringify({
           duration_seconds: 86399,
           grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer',
         }),
       });
       const tokenData = await tokenResp.json();
       console.log(tokenData,'token')  
       if (!tokenData.access_token) {
         return NextResponse.json({ error: 'Coze token 获取失败', detail: tokenData }, { status: 500 });
       }
  

    // 3. 执行 Coze 工作流
    const wfResp = await fetch(`${COZE_API_BASE_JWT}/v1/workflow/run`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${tokenData.access_token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        parameters: {
          input: prompt,
        },
        workflow_id: COZE_WORKFLOW_ID_JWT,
      }),
    });
    
    const wfData = await wfResp.json();
    console.log('Coze工作流返回结果:', JSON.stringify(wfData));

    // 解析工作流返回结果
    let imageUrl = null;
    
    if (wfData.code === 0 && wfData.data) {
      try {
        const parsedData = typeof wfData.data === 'string' ? JSON.parse(wfData.data) : wfData.data;
        imageUrl = parsedData.output;
      } catch (e) {
        console.error('解析工作流结果失败:', e);
      }
    }

    // 返回结果给前端
    return NextResponse.json({
      success: wfData.code === 0,
      imageUrl: imageUrl,
      message: wfData.msg,
      debug_url: wfData.debug_url,
    });

  } catch (error) {
    console.error('Coze API 调用失败:', error);
    return NextResponse.json({ 
      error: '处理请求时出错', 
      message: error instanceof Error ? error.message : '未知错误' 
    }, { status: 500 });
  }
} 