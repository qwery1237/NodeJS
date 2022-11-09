import jwt from 'jsonwebtoken';
const secretkey = 'secretkey';
const token = jwt.sign(
  {
    id: 'userId',
    isAdmin: true,
  },
  secretkey,
  { expiresIn: 2 } // option
);
const tokenCopied = // 사용자가 임의로 수정하면 토큰 시그니쳐 부분이 변경된다.
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6InVzZXJJZCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2Nzk1NDAxM30.En0OuDiSTOHt0lYpBF6FHbh-G2OYOs_OFBZPTDCB4u4';
setTimeout(() => {
  jwt.verify(token, secretkey, (err, decoded) => {
    console.log(err, decoded);
  });
}, 3000);
console.log(token);
